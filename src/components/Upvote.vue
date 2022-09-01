<script setup>
  import { useStore } from 'vuex';
  import { ArrowUpIcon } from '@heroicons/vue/24/outline';
  import { PlusIcon } from "@heroicons/vue/24/outline";
  import { computed } from '@vue/reactivity';

  const store = useStore();

  const addUpvote = () => {
    store.dispatch('addUpvote');
  }

  const toggleState = () => {
    store.dispatch('toggleSelected');
  }

  const count = computed(() => store.getters.getCount);
  const isSelected = computed(() => store.getters.getSelected);
</script>

<template>
  <div class="upvote-container">
    <div class="upvotes" :class="count === 0 && 'empty'">
      <div 
        class="icon-container" 
        :class="isSelected && 'bg-selected-upvote'" 
        @click="toggleState" 
        v-for="index in count" 
        :key="index">
        <ArrowUpIcon 
          class="icon" 
          :class="isSelected && 'stroke-selected-arrow'"/>
      </div>
    </div>
    <div class="add-upvote">
      <div 
        class="icon-container"
        @click="addUpvote">
        <PlusIcon class="icon"/>
      </div>
    </div>
  </div>
</template>
