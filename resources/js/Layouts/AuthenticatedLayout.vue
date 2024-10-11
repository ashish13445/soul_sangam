<script setup>
import { ref ,computed} from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import SideMenu from '@/Components/SideMenu.vue';

import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import Avatar from 'primevue/avatar';
import Chip from 'primevue/chip';

import { Link,usePage } from '@inertiajs/vue3';
import CheckInModal from '@/Pages/Auth/CheckInModal.vue';
const page = usePage();
const showModal = ref(false); // State to control modal visibility
import Dialog from 'primevue/dialog';
import ChooseCity from '@/Components/ChooseCity.vue';
const lat = ref();
const long = ref();
const location = ref('');

import { useCityStore } from '@/stores/cityStore';
const visible= ref(false);

// Store
const cityStore = useCityStore();
if(!cityStore.selectedCity && page.url == '/auth/events/page'){
    
    visible.value = true;
}
    const openModal = () => {
        showModal.value = true;
    }

    const closeModal = () => {
        showModal.value = false;
    }
const showingNavigationDropdown = ref(false);
const firstImageUrl = computed(() => {
  const profilePictures = JSON.parse(page.props.auth.user.profile_pictures);
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
                                <!-- <Link :href="route('dashboard')">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800"
                                    />
                                </Link> -->
                                
                            </div>
                            

                            <!-- Navigation Links -->
                            <div class=" w-full hidden sm:flex items-center justify-between">
                                <div class=" space-x-8 sm:-my-px sm:ms-10">
                                    <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                    HOME
                                </NavLink>
                                <NavLink :href="route('home')" :active="route().current('about')">
                                    ABOUT US
                                </NavLink>
                                <NavLink :href="route('home')" :active="route().current('services')">
                                    SERVICES
                                </NavLink>
                                </div>
                                
                                
                            </div>
                            
                        </div>
                        
                        
                        <div class="hidden sm:flex sm:items-center sm:ms-6">
                            <div class="">
                                    <Chip :label="cityStore.selectedCity" icon="pi pi-map-marker" @click="visible=true" class="cursor-pointer" />
                                    <Dialog v-model:visible="visible" modal header="Choose City" :style="{ width: '25rem' }">
            <ChooseCity/>
        </Dialog>
    </div>
                            <div class="flex items-center">
                                <button @click="openModal" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                    CheckIn
                </button>

                        </div>
                            <!-- Settings Dropdown -->
                            <div class="ms-3 relative flex">
                                <section v-if="firstImageUrl">
                                    <Avatar 
                                @click="toggleSidebar"
                                    :image="firstImageUrl" 
                                    class="mr-2 cursor-pointer" 
                                    shape="circle" 
                                    
                                />
                                </section>
                                <section v-else>
                                    <Avatar  class="mr-2 cursor-pointer"
                                    @click="toggleSidebar"
                                    shape="circle"

                                    />
                                </section>
                                
                            </div>
                        </div>
                        <!-- Hamburger -->
                        <div class="-me-2 flex items-center sm:hidden">
                        
                            <section v-if="firstImageUrl">
                                    <Avatar 
                                @click="toggleSidebar"
                                    :image="firstImageUrl" 
                                    class="mr-2 cursor-pointer" 
                                    shape="circle" 
                                    
                                />
                                </section>
                                <section v-else>
                                    <Avatar  class="mr-2 cursor-pointer"
                                    @click="toggleSidebar"
                                    shape="circle"

                                    />
                                </section>
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
            <main class=" h-screen bg-primary sm:bg-primary-radial">
                
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
