<template>
    
    <GuestLayout>
<div class="w-full flex justify-center bg-primary-radial">
    <div v-if="event" class=" max-w-7xl w-full text-black flex flex-col items-center">
        <div class="bg-white rounded sm:mt-10 w-full sm:w-2/3" >
            <img
  alt="event image"
  :src="`/storage/event/${event.event_image}`"
  class="w-full h-auto object-cover"
/>   
<div class="flex mt-5 mx-10 justify-between">
    <h1 class="font-extrabold text-3xl">{{ event.name }}</h1>
    <Link :href="`/auth/events/${event.id}`">

<Button  class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    Buy Ticket
</Button>
</Link>
</div>       

<div class="mx-10 mb-2 ">
        <p class=" text-xl py-1">
            <span class="">
                {{ new Date(event.start_date).toDateString() }}
            </span>
            onwards
        </p>
        <p class="font-bold  py-2">
            <Chip :label="event.city" class="border-2 border-blue-600 text-blue-600 mx-2"/>
            <Chip :label="event.type" class="border-2 border-blue-600 text-blue-600"/>

            <!-- <span class="text-gray-400">{{ event.city }}</span>   -->
        </p>
        <div >

        </div>
    </div>
        </div>
        <div class='w-full mt-5 sm:flex'>
            <div class="bg-white rounded-lg sm:w-2/5 m-5 p-5 h-content ">
<section class="p-5">
                    <h1 class="text-2xl font-extrabold">
                    Terms & Conditions
                </h1>
                <p class="text-md py-5">
                    {{event.terms_and_conditions }}
                </p>
                </section>
                <section class="p-5">
                    <h1 class="text-2xl font-extrabold">
                    Guidelines
                </h1>
                <p class="text-md py-5">
                    {{event.guidelines }}
                </p>
                </section>
                
            </div>
            <div class="bg-white rounded-lg sm:w-3/5 m-5 sm:p-5 h-content overflow-hidden">
                <section class="p-5">
                    <h1 class="text-2xl font-extrabold">
                    About
                </h1>
                <p class="text-md py-5">
                    {{event.about }}
                </p>
                </section>
                
               
                <div v-if="event.maps_location" class="  md:flex justify-center w-auto  mt-4" v-html="event.maps_location">

            </div>
  
              
            </div>
            
        </div>

        
        </div>
    
</div>
        
    </GuestLayout>
</template>

<script setup>
import { ref } from 'vue';
import { usePage, Inertia } from '@inertiajs/inertia';
import { loadStripe } from '@stripe/stripe-js';
import {  router,Link } from '@inertiajs/vue3';
import Chip from 'primevue/chip';

import Button from 'primevue/button';

import axios from 'axios';
import GuestLayout from '@/Layouts/GuestLayout.vue';

const  props  = defineProps(['event']);
const event = ref(props.event);

const publishableKey = "pk_test_51K4koBSFlDb60EYrJRKOY4WRI0xp460rrhIZPW8XuVChtvmviOFyZUXq0EnNKLIaqzI1AkJik70iFvW1NNCiP1H700RCxV3kwh";
const stripePromise = loadStripe(publishableKey);
const loading = ref(false);

const isAuthenticated = async () => {
  try {
    const response = await axios.get('/api/user');
    return response.data.authenticated;
  } catch (error) {
    return false;
  }
};
const submit = async () => {
    loading.value = true;
    
    try {
        
        const authenticated = await isAuthenticated();

        if (!authenticated) {
            // Redirect to login page if not authenticated
            Inertia.remember(); // Remember the current route before redirecting to login
                    Inertia.visit('/login', { preserveState: true, preserveScroll: true });
                    return;
        }else{
            const checkoutResponse = await axios.post('/create-checkout-session', { event_id: props.event.id });
        const { id: sessionId } = checkoutResponse.data; // Ensure sessionId is correctly extracted

        const stripe = await stripePromise;

        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
            console.error('Error redirecting to checkout:', error);
        }
        }
        
    } catch (error) {
        console.error('Error during authentication or checkout:', error);
    } finally {
        loading.value = false;
    }
};

</script>
<style scoped>

</style>
