<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import ProfilePicture from '@/Components/ProfilePicture.vue';

import Tooltip from 'primevue/tooltip';


import Image from 'primevue/image';

import Dock from 'primevue/dock';

import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';

import { Head } from '@inertiajs/vue3';

import Chip from 'primevue/chip';

const items = ref([
    {
        label: 'Home',
        icon: 'https://cdn-icons-png.flaticon.com/512/10473/10473299.png',
        class : 'home'
    },
    {
        label: 'Notifications',
        icon: 'https://static.vecteezy.com/system/resources/previews/022/498/184/non_2x/3d-love-like-social-media-notification-icon-isolated-on-transparent-background-file-png.png',
        class: 'matches'
    },
    {
        label: 'Chat',
        icon: 'https://static.vecteezy.com/system/resources/previews/018/741/982/non_2x/live-messaging-chat-and-message-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png',
        class: 'chat'
    },
    {
        label: 'Preferences',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Settings_%28iOS%29.png/600px-Settings_%28iOS%29.png',
        class: 'settings'
    },
 
]);



defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
const showModal = ref(false); // State to control modal visibility

    const openModal = () => {
        showModal.value = true;
    }

    const closeModal = () => {
        showModal.value = false;
    }
const showingNavigationDropdown = ref(false);
const currentContent = ref('home'); // Track the current content
console.log(currentContent.value);
const handleDockClick = (item) => {
    currentContent.value = item.class;
    console.log(currentContent.value);
};
</script>



<template>
    <div>
        <!-- Dock window for larger screens (left) -->
        <div class="dock-window hidden sm:block">
            <Dock :model="items" position="left">
                <template #itemicon="{ item }">
                    <Image v-tooltip.top="item.label" :alt="item.label" role="button" :src="item.icon" style="width: 50px; height: 50px;" @click="handleDockClick(item)" />
                </template>
            </Dock>
        </div>

        <!-- Main content area -->
        <div class="w-full h-screen flex flex-col bg-primary items-center justify-between">
            <nav class="bg-white border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="w-screen md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('dashboard')">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800"
                                    />
                                </Link>
                                
                            </div>
                            

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                    Dashboard
                                </NavLink>
                                <NavLink :href="route('auth.events.page')" :active="route().current('auth.events.page')">
                                    Live Events
                                </NavLink>
                                <NavLink :href="route('dating.index')" :active="route().current('dating.index')">
                                    Dating
                                </NavLink>
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
                                                {{ $page.props.auth.user.name }}

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
                                        <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                                        <DropdownLink :href="route('logout')" method="post" as="button">
                                            Log Out
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
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

       
            <main class="w-full  lg:max-w-5xl h-full overflow-y-auto sm:mt-0 mb-24 sm:mb-0">
                <slot :currentContent="currentContent" />
            </main>

            <!-- Bottom Dock for smaller screens -->
            <div class="dock-window-bottom block sm:hidden fixed bottom-0 w-full bg-gray-800 text-white z-20">
                <Dock :model="items" position="bottom">
                    <template #itemicon="{ item }">
                        <Image v-tooltip.top="item.label" :alt="item.label" role="button" :src="item.icon" class="w-12 h-12" @click="handleDockClick(item)" />
                    </template>
                </Dock>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom styles to ensure proper layout for mobile */
.main-content {
    position: relative;
}

.main-content h-16 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
}

.dock-window-bottom {
    top: auto; 
    bottom: 0;
}

main {
    overflow-y: auto;
}
</style>
