<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { onMounted,ref } from 'vue';

import Button from 'primevue/button';

import Chip from 'primevue/chip';

import Card from 'primevue/card';

const events = ref([]);
const fetchEvents = ()=>{
    axios.get('/events')
    .then((res)=>{
        events.value = res.data;
    })
}
onMounted(fetchEvents);
function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head title="" />
    <AuthenticatedLayout>
    <div class="w-screen flex justify-center">

    <div class="grid grid-cols-1  md:grid-cols-3 grid-flow-row gap-0 w-full max-w-7xl bg-secondary ">
         <div class="
             flex flex-col justify-between items-center p-5  w-auto" v-for="event in events">
       <!-- <h1 class="text-xl font-extrabold text-center">
            {{ event.name }}
        </h1>
        <section>
            <Chip :label="event.start_date" /> -
            <Chip :label="event.end_date" />
        </section>

        <div class="flex flex-col justify-end items-center">
            <Link :href="`/auth/events/${event.id}`">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Event Details
    </button>
</Link>
            </div> -->


        <!-- <p class="bg-extralightblue text-md font-bold p-1 w-4">{{ event.start_date }} - {{ event.end_date }}</p> -->
        <Card >
        <template #header>
            <img
  alt="event image"
  :src="`/storage/event/${event.event_image}`"
  class="w-full h-40 object-cover"
/>           </template>
        <template #title>{{ event.name }}</template>
        <template #subtitle>{{ event.start_date }} - {{event.end_date }}</template>
        <template #content>
            <p class="m-0">
                <Chip :label="event.type" class="border-2 border-blue-600 text-blue-600"/>

            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Link :href="`/auth/events/${event.id}`"> <Button label="Details" severity="secondary" outlined class="w-full" /> </Link>
                <Link :href="`/auth/events/${event.id}`"> <Button label="Buy Ticket" class="w-full" /></Link>
            </div>
        </template>
    </Card>

    
    
    </div> 
         

    
    </div>
</div>
    
    </AuthenticatedLayout>
</template>
