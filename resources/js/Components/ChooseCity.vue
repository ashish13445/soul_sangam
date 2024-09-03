<template>
    <div class="max-w-md mx-auto mt-10">
      <label class="block text-sm font-medium text-gray-700">Select Your City</label>
      <select v-model="selectedCity" @change="onCitySelect" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option v-for="city in cities" :key="city" :value="city">
          {{ city }}
        </option>
      </select>
  
      <p v-if="selectedCity" class="mt-4 text-lg font-semibold">You have selected: {{ selectedCity }}</p>
    </div>
    
  </template>
  
  <script setup>
  import { ref,getCurrentInstance } from 'vue';
  
  const selectedCity = ref('');
  const cities = ref([
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    // Add more cities or fetch them from an API
  ]);
  
  const onCitySelect = () => {
    console.log('Selected city:', selectedCity.value);
  };
  const location = ref(null);
const errorMessage = ref('');

const getLocation = () => {
    const successCallback = (position) => {
        location.value = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };
    };

    const errorCallback = (error) => {
        errorMessage.value = `Error: ${error.message}`;
    };

    // Use the global geolocation API
    const { appContext } = getCurrentInstance();
    const geolocation = appContext.config.globalProperties.$geolocation;
    geolocation.getCurrentLocation(successCallback, errorCallback);
};
  </script>



  
  <style>
  /* Additional Tailwind CSS classes can be added if needed */
  </style>
  

