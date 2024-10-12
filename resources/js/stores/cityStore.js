import { defineStore } from 'pinia';
import { ref } from 'vue'; // Import ref for reactive state
import axios from 'axios';

export const useCityStore = defineStore('cityStore', () => {
  // Define reactive state using refs
  const selectedCity = ref(null); // Holds the currently selected city
  const cities = ref([]); // Holds the list of cities fetched from the API

  // Fetch cities from the API
  const fetchCities = async () => {
    try {
      const response = await axios.get('/api/cities'); // API request
      cities.value = response.data; // Set the cities array
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  // Add a new city to the cities array locally
  const addCityLocally = (newCity) => {
    if (!cities.value.includes(newCity)) {
      cities.value.push(newCity); // Add new city to the list
      selectedCity.value = newCity; // Set the newly added city as selected
    }
  };

  // Set the selected city
  const selectCity = (city) => {
    selectedCity.value = city;
  };

  // Return state and actions for use in components
  return {
    selectedCity,
    cities,
    fetchCities,
    addCityLocally,
    selectCity,
  };
});
