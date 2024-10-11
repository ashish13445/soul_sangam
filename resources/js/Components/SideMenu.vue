
<template>
    <div class="card flex justify-center h-full" data-aos="fade-left">
        <Menu :model="items" class="w-screen h-screen sm:h-auto md:w-96 md:ml-5 p-5">
            <template #start >
                <div class="flex items-center">
                        
                <button class="relative overflow-hidden w-full border-0 bg-transparent flex items-center pt-5 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
                        <Avatar v-if="firstImageUrl" :image="firstImageUrl" class="mr-2" shape="circle" size="xlarge" />
                        <Avatar v-else class="" shape="circle" size="xlarge" />

                        <Link :href="route('profile.pictures')" class="mr-3 mb-8">
                        <i class="pi pi-pencil"></i>
                        </Link>
                    

                    <span class="inline-flex flex-col items-start">
                        <span class="text-xl font-bold">{{ $page.props.auth.user.name }}</span>
                        <span class="text-sm pl-1">member</span>
                    </span>
                </button>
                <button class="bg-black rounded-full text-white h-10 px-4 mr-4 flex items-center">upgrade</button>
                    </div>
                
            </template>

        
            <template #item="{ item, props }" >
                <Link class="flex items-center justify-between" :href="item.action" v-bind="props.action" :method="item.method">
                    <span >{{ item.label }}</span>
                    <span class="" :class="item.icon" />
                </Link>
            </template>

        </Menu>
    </div>
</template>

<script setup>
import { ref ,computed} from "vue";

import Menu from 'primevue/menu';
import Avatar from 'primevue/avatar';
import { Link,usePage } from '@inertiajs/vue3';
const page = usePage();
const items = ref([
    
    {
        // label: 'Profile',
        items: [
            {
            separator: true
            },
            {
                label: 'Edit Profile',
                icon: 'pi pi-pencil',
                action:route('profile.edit')
            },
            {
                separator: true
            },
            {
                label: 'Dating Preferences',
                icon: 'pi pi-sliders-h',
                action:route('profile.preference')

            },
            {
                separator: true
            },
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                action:route('profile.settings')

            },
            {
                separator: true
            },
            {
                label: 'Help Center',
                icon: 'pi pi-shield',
            },
            {
                separator: true
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                action:route('logout'),
                method:"post"
            }
        ]
    },
  
]);
const firstImageUrl = computed(() => {
  const profilePictures = JSON.parse(page.props.auth.user.profile_pictures);
  return profilePictures && profilePictures.length > 0 
    ? `/storage/profile_pictures/${profilePictures[0]}` 
    : ''; // Fallback if no images are available
});
</script>
