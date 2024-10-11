<template>
  <div class="p-2">
    <!-- <Select
      v-model="cityStore.selectedState"
      :options="stateOptions"
      optionLabel="name"
      optionValue="isoCode"
      placeholder="Select a state"
      @change="handleStateChange"
    /> -->
    <!-- City selection based on the selected state -->
    <!-- <div v-if="cityStore.loadingCities">Loading cities...</div> -->
    <Select
      v-model="cityStore.selectedCity"
      :options="cityStore.cities"
      class="mx-4"
      placeholder="Select a city"
    />
  </div>
</template>
  
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useCityStore } from '@/stores/cityStore';
import Select from 'primevue/select';
import axios from 'axios';

const cityStore = useCityStore();

onMounted(cityStore.fetchCities);
</script>

