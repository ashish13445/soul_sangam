<script setup>
import { ref ,computed} from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import SideMenu from '@/Components/SideMenu.vue';

import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import Avatar from 'primevue/avatar';

import { Link,usePage } from '@inertiajs/vue3';
import CheckInModal from '@/Pages/Auth/CheckInModal.vue';
const page = usePage();
const showModal = ref(false); // State to control modal visibility

    const openModal = () => {
        showModal.value = true;
    }

    const closeModal = () => {
        showModal.value = false;
    }
const showingNavigationDropdown = ref(false);
const firstImageUrl = computed(() => {
  const profilePictures = JSON.parse(page.props.auth.user.profile_pictures);
  console.log(profilePictures[0]);
  return profilePictures && profilePictures.length > 0 
    ? `/storage/profile_pictures/${profilePictures[0]}` 
    : ''; // Fallback if no images are available
});

const sidebarOpen = ref(false);


// Toggle sidebar visibility
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            <div class="flex items-center">
                                <button @click="openModal" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                    CheckIn
                </button>
                        </div>
                            <!-- Settings Dropdown -->
                            <div class="ms-3 relative">
                                
                                <Avatar 
                                @click="toggleSidebar"
                                    :image="firstImageUrl" 
                                    class="mr-2 cursor-pointer" 
                                    shape="circle" 
                                    
                                />
                            </div>
                        </div>
                        <!-- Hamburger -->
                        <div class="-me-2 flex items-center sm:hidden">
                            <Avatar 
                                @click="toggleSidebar"
                                    :image="firstImageUrl" 
                                    class="mr-2 cursor-pointer" 
                                    shape="circle" 
                                    
                                />
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

            <!-- Page Heading -->
            

            <!-- Page Content -->
            <main class="w-full flex justify-between">
                
                    <slot />

                <aside
                v-if="sidebarOpen"
                class="absolute inset-y-0 right-0 top-16"
                >
                <SideMenu/>
                </aside>
            </main>
        </div>
        <CheckInModal v-if="showModal" @close="closeModal" />

    </div>
</template>
