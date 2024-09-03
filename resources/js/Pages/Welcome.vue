<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import Image from 'primevue/image';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head title="Welcome" />
    <GuestLayout >
        <div class="my-5 p-10 flex flex-col md:flex-row justify-between items-center bg-secondary w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl h-auto rounded-xl">
            <Link 
    href="dating" 
    class=" bg-blossomPink relative w-full h-72 m-5 rounded-xl flex justify-center items-center text-center text-2xl font-extrabold overflow-hidden"
>

    <!-- Background Image -->
    <img src="/images/dating.jpg" alt="Background Image" class="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition duration-300 ease-in-out " />
    
    <!-- Overlay Text -->
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="">
        <h1 class="text-2xl font-bold">DATING</h1>
      </div>
    </div>
  
</Link>
            <Link href="/events/page" class="bg-blossomPink  overflow-hidden relative w-full h-72 m-5 rounded-xl flex justify-center items-center text-2xl font-extrabold">
                <!-- Background Image -->
    <img src="/images/event.jpg" alt="Background Image" class="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition duration-300 ease-in-out" />
    
    <!-- Overlay Text -->
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div>
        <h1 class="text-2xl font-bold">EVENTS</h1>
      </div>
    </div>
            </Link>
            <Link href="/events/page" class="bg-blossomPink  overflow-hidden relative w-full h-72 m-5 rounded-xl flex justify-center items-center text-2xl font-extrabold">
                <!-- Background Image -->
    <img src="/images/matchmaking.jpg" alt="Background Image" class="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition duration-300 ease-in-out" />
    
    <!-- Overlay Text -->
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div>
        <h1 class="text-2xl font-bold">PRIVATE MATCHMAKING</h1>
      </div>
    </div>
            </Link>
        </div>
    </GuestLayout>
</template>
