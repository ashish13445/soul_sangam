<script setup>
import { ref ,onMounted} from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import Chip from 'primevue/chip';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import Dialog from 'primevue/dialog';
import ChooseCity from '@/Components/ChooseCity.vue';
const lat = ref();
const long = ref();
const location = ref('');
import {usePage } from '@inertiajs/vue3';
const page = usePage();
import { useCityStore } from '@/stores/cityStore';
const visible= ref(false);

// Store
const cityStore = useCityStore();
if(!cityStore.selectedCity && page.url == '/events/page'){
    visible.value = true;
}
import Button from 'primevue/button';

import { Link } from '@inertiajs/vue3';
const showingNavigationDropdown = ref(false);

</script>

<template>
    <div>
        <div class="min-h-screen ">
            <nav class="bg-white border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <!-- <div class="shrink-0 flex items-center">
                                <Link :href="route('dashboard')">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800"
                                    />
                                </Link>
                            </div> -->
                            
                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex justify-between w-screen max-w-5xl items-center">
                                <div class="w-1/2 flex justify-evenly">
                                    <NavLink :href="route('home')" :active="route().current('home')">
                                    HOME
                                </NavLink>
                                <NavLink :href="route('home')" :active="route().current('about')">
                                    ABOUT US
                                </NavLink>
                                <NavLink :href="route('home')" :active="route().current('services')">
                                    SERVICES
                                </NavLink>
                                </div>
                                
                                <div class="">
                                    <Chip :label="cityStore.selectedCity" icon="pi pi-map-marker" @click="visible=true" class="cursor-pointer" />
                                    <Dialog v-model:visible="visible" modal header="Choose City" :style="{ width: '25rem' }">
            <ChooseCity/>
        </Dialog>
    </div>

                            </div>
                            
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ms-6">
                            <!-- Settings Dropdown -->
                            <div class="ms-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                Guest
                                                <svg
                                                    class="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink :href="route('register')"> register </DropdownLink>
                                        <DropdownLink :href="route('login')" >
                                            Login
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-me-2 flex items-center sm:hidden">
                            <button
                                @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex': !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex': showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div
                    :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
                    class="sm:hidden"
                >
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">
                                guest
                            </div>
                            <div class="font-medium text-sm text-gray-500">Guest</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('register')"> register </ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('login')" method="post" as="button">
                                Login
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <div class=" h-screen bg-primary sm:bg-primary-radial"> 
        

        <!-- <div
            class="w-screen    sm:max-w-md lg:max-w-screen sm:justify-center items-center mt-6   bg-white shadow-md overflow-hidden sm:rounded-lg"
        > -->
            
        <slot />
        </div>
    </div>
            
        </div>
    <!-- </div> -->
</template>
