<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { onMounted,ref } from 'vue';

import Button from 'primevue/button';

import Chip from 'primevue/chip';

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
    <GuestLayout>
    <div class="grid grid-cols-2 grid-flow-row gap-2 w-full max-w-7xl bg-secondary  h-screen">
        <div class="
            bg-blossomPink flex flex-col justify-between items-center p-5 m-5 h-48 w-auto" v-for="event in events">
        <h1 class="text-xl font-extrabold text-center">
            {{ event.name }}
        </h1>
        <section>
            <Chip :label="event.start_date" /> -
            <Chip :label="event.end_date" />
        </section>

        <div class="flex flex-col justify-end items-center">
            <Link :href="`/events/${event.id}`">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Event Details
    </button>
</Link>
            </div>


        <!-- <p class="bg-extralightblue text-md font-bold p-1 w-4">{{ event.start_date }} - {{ event.end_date }}</p> -->
        </div>
    </div>
    
    </GuestLayout>
</template>
