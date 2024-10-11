import { defineStore } from 'pinia';
import axios from 'axios';

export const useCityStore = defineStore('cityStore', {
  state: () => ({
    selectedCity: null,  // Holds the currently selected city
    cities: [],          // Holds the list of cities fetched from the API
  }),

  actions: {
    // Fetch cities from the API
    async fetchCities() {
      try {
        const response = await axios.get('/api/cities');  // API request or mocked data
        this.cities = response.data;
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    },

    // Add a new city to the cities array locally
    addCityLocally(newCity) {
      if (!this.cities.includes(newCity)) {
        this.cities.push(newCity); // Add new city to the list
        this.selectedCity = newCity; // Set the newly added city as selected
      }
    },

    // Set the selected city
    selectCity(city) {
      this.selectedCity = city;
    }
  },
});
