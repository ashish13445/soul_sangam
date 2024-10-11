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
      <div class="h-1/3 sm:h-full flex items-center justify-center">
        <img src="../../images/hero_images.png" class="lg:w-4/5"/>
      </div>
      <div class="bg-white h-auto p-10  lg::p-20 flex flex-col sm:flex-row justify-center items-center">
        <h2 class="text-blossomPink tracking-wide text-center text-3xl sm:text-4xl lg:text-6xl font-bold sm:w-1/3">
            Your journey to a lifetime of happiness starts here.
        </h2>
        <div class="text-center">
            <img src="../../images/qr.png" class=" p-10 w-60"/>
            <p class="text-lg">Download app now</p>
        </div>
      </div>

      <div class="bg-custom-radial lg:p-60 flex flex-col justify-evenly items-center tracking-wide relative">
    <img class="absolute z-0" src="../../images/elephants.png" />
    <Link href="/events/page" class="bg-white rounded-lg w-1/3 my-4 hover:border-x-8 border-blossomPink z-10 relative" data-aos="fade-up" data-aos-duration="3000">
        <h2 class="text-sm md:text-xl p-3 md:p-10 text-center text-secondary font-bold">LIVE EVENTS</h2>
    </Link>
    <Link class="bg-white rounded-lg w-1/3 my-4 z-10 relative hover:border-x-8 border-blossomPink" data-aos="fade-up" data-aos-duration="3000">
        <h2 class="text-sm md:text-xl p-3 md:p-10 text-center text-secondary font-bold">PRIVATE <br/>MATCHMAKING</h2>
    </Link>
    <Link href="/dating" class="bg-white rounded-lg w-1/3 my-4 z-10 relative hover:border-x-8 border-blossomPink" data-aos="fade-up" data-aos-duration="3000">
        <h2 class="text-sm md:text-xl p-3 md:p-10 text-center text-secondary font-bold">DATING</h2>
    </Link>
</div>

    </GuestLayout>
</template>
