<template>
    <Head title="Details" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Event Details</h2>
        </template>

        <div class="py-12" v-if="loading == false">
          
            <div class="max-w-7xl mx-auto ">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class=" ">
      <!-- Assuming you have a list of events and a way to select one -->
      <!-- <div v-for="event in events" :key="event.id" @click="selectEvent(event)"> -->
        
        <img src="../../../../images/soul.jpg" class="w-full h-80 object-cover">

      <!-- Include the Details component and pass the selected event -->
      <div class="m-2 p-3 flex justify-between px-10">
        <div>
            <h1 class="font-extrabold text-4xl">{{ event.name }}</h1>
        <p class="font-bold text-2xl py-1">Date: 
            <span class="text-gray-400">
                {{ new Date(event.start_date).toLocaleDateString() }}
            </span>
        </p>
        <p class="font-bold text-2xl py-2">City: 
            <span class="text-gray-400">{{ event.city }}</span>  
        </p>
        </div>
        
        <div>
            <button v-if="props.user.age>=20 && props.user.age<=45" @click="submit(event.id)" :disabled="new Date(event.date) <= new Date()" class="m-2 bg-transparent disabled:bg-gray-700 disabled:text-white disabled:hover:text-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Buy Ticket
            </button>
            <button v-else @click="openAgeError()" :disabled="new Date(event.date) <= new Date()" class="m-2 bg-transparent disabled:bg-gray-700 disabled:text-white disabled:hover:text-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Buy Ticket
            </button> 
        </div>
      </div>
    </div>
    </div>
                </div>
            </div>
            <div v-else>
              <div class="h-96 flex flex-col justify-center items-center">
                Wait. Moving to checkout page...<br/>
                
    <div class="card flex justify-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>



              </div>
            </div>
        <!-- </div> -->
    </AuthenticatedLayout>
</template>


  <script setup>
  import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
  import { Head,router } from '@inertiajs/vue3';
  import { ref } from 'vue';
  import axios from 'axios';
  import ProgressSpinner from 'primevue/progressspinner';


import { usePage, Inertia } from '@inertiajs/inertia';
import { loadStripe } from '@stripe/stripe-js';


  const events = ref([]);
  const selectedEvent = ref(null);
  const  props  = defineProps(['event','user']);
const event = ref(props.event);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/events');
      events.value = response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
  
  const selectEvent = (event) => {
    selectedEvent.value = event;
  };
  
  // Fetch events when the component is mounted
  fetchEvents();




const publishableKey = "pk_test_51K4koBSFlDb60EYrJRKOY4WRI0xp460rrhIZPW8XuVChtvmviOFyZUXq0EnNKLIaqzI1AkJik70iFvW1NNCiP1H700RCxV3kwh";
const stripePromise = loadStripe(publishableKey);
const loading = ref(false);


const submit = async (id) => {
    loading.value = true;
    
    try {
        const checkoutResponse = await axios.post('/create-checkout-session', { event_id: id });
        const { id: sessionId } = checkoutResponse.data; // Ensure sessionId is correctly extracted

        const stripe = await stripePromise;

        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
            console.error('Error redirecting to checkout:', error);
        }
        
    } catch (error) {
        console.error('Error during authentication or checkout:', error);
    } finally {
        loading.value = false;
    }
};
const openAgeError = ()=>{
  alert('age should be between 20-45')
}

// const ticketPurchased = (eventId) => {
//     return axios.get(`/ticket/purchased/${eventId}`)
//         .then(response => {
//             return response.data;
//         })
//         .catch(error => {
//             if (error.response) {
//                 return error.response.data;
//             } else {
//                 return { success: false, message: 'An error occurred while checking the ticket.' };
//             }
//         });
// };

  </script>
  