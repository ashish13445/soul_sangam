<template>
    
    <GuestLayout>

    <div v-if="event" class="  w-screen  text-black">
        <div class="bg-white rounded m-10 " >
            <img src="../../../images/soul.jpg" class="w-full h-80 object-cover">
        <div class="m-10">
            <h1 class="font-extrabold text-4xl">{{ event.name }}</h1>
        <p class="font-bold text-2xl py-2">Date: 
            <span class="text-gray-400">
                {{ new Date(event.start_date).toDateString() }}
            </span>
        </p>
        <p class="font-bold text-2xl py-2">City: 
            <span class="text-gray-400">{{ event.city }}</span>  
        </p>
        <div >
            <Link :href="`/auth/events/${event.id}`">

            <Button  class="my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Buy Ticket
            </Button>
        </Link>
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
