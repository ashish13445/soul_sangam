<template>
    <CheckedInLayout>
<Toast/>
        <Carousel :value="participants" :numVisible="1" :numScroll="1"  containerClass="w-full  flex justify-center  sm:h-screen">
            <template #item="slotProps" >
                <div class="sm:flex items-center justify-between w-full">

                    <div class="p-0 w-full sm:w-2/3 bg-black">
                        <Galleria 
                    :value="getProfilePictures(slotProps.data.profile_pictures)" 
                    :responsiveOptions="responsiveOptions" 
                    :numVisible="1" 
                    :circular="false" 
                    :showItemNavigators="true" 
                    :showThumbnails="false"
                    class=""
                >
                    <template #item="imageSlotProps">
                        <img 
                            :src="`/storage/profile_pictures/${imageSlotProps.item}`" 
                            alt="Profile Picture" 
                            class="block h-96 sm:h-96 w-auto"
                        />
                    </template>
                </Galleria>
            </div>

            <div class="w-full sm:w-2/3  sm:h-full" >
                <div class="px-10 py-1">
                    <div class="font-medium text-2xl sm:text-3xl">{{ slotProps.data.name }} , <span class="font-medium">{{ slotProps.data.age }}</span></div>
                    <div class="font-medium text-md py-2 bg-gray-100 my-2 p-4 rounded-lg">
                        <span class="pi pi-shopping-bag pr-3 text-red-600"></span>  
                        <span class="sm:text-lg">{{ slotProps.data.occupation }}</span>
                    </div>
                    <div class="font-medium text-md py-2 bg-gray-100 my-2 p-4 rounded-lg">
                        <span class="pi pi-book pr-3 text-red-600"></span>  
                        <span class="sm:text-lg">{{ slotProps.data.education }}</span>
                    </div>
                    <div class="font-medium text-md py-2 bg-gray-100 my-2 p-4 rounded-lg">
                        <span class="pi pi-home pr-3 text-red-600 "></span> 
                        <span class="sm:text-lg">{{ slotProps.data.city }}</span>
                    </div>
                    <div class="mt-0 font-medium text-md py-2">Looking for <br/>
                        <Tag class="m-2" severity="info">{{ slotProps.data.preferences?.gender }}</Tag>
                        <Tag class="m-2" severity="info">{{ slotProps.data.preferences?.religion }}</Tag>
                        <Tag class="m-2" severity="info">{{ slotProps.data.preferences?.start_age }}-
                        {{ slotProps.data.preferences?.end_age }}</Tag>
                    </div>
                </div>
            </div>
            <div>
                
                </div>
            <div class="flex sm:flex-col  justify-between pb-10 sm:py-20 w-1/8 px-4">
                <section class="absolute  sm:static  top-80 ">
                    <span >
                        <i 
                            class="pi pi-heart cursor-pointer" 
                            style="font-size: 2rem;" 
                            @click="like(slotProps.data.id)"
                        ></i>
                    </span>
                    <!-- <span v-else>
                        <i 
                            class="pi pi-heart-fill cursor-pointer text-red-700" 
                            style="font-size: 2rem;" 
                            :class="{ 'animate-like': isAnimating }"
                        ></i>
                    </span> -->
                </section>
            </div>
</div>

    </template>
</Carousel>

    </CheckedInLayout>
    
</template>
<script setup>
import Galleria from 'primevue/galleria';
import Toast from 'primevue/toast';

import { useToast } from 'primevue/usetoast';
const toast = useToast();

import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import { Link,usePage } from '@inertiajs/vue3';
const page = usePage();
  import CheckedInLayout from '@/Layouts/CheckedInLayout.vue';
  import {ref,onMounted} from 'vue'
  const participants = ref([]);
   const getParticipants = () => {
    axios.get('/auth/event/participants')
    .then((res)=>{
        participants.value = res.data.users;
        console.log(participants.value);

    })
   }
   onMounted(getParticipants);

//    const likedUserIds = ref([]);

//    const isLiked = (userId) => {
//   return likedUserIds.value.includes(userId);
// };
const like = (userId) => {
    
        // Like user

    axios.post('/like', { user_id: userId ,event_id: page.props.ticket.event_id})
        .then((res) => {
            
          toast.add({ severity: 'info', summary: 'Liked!', detail: 'You liked the user.', life: 3000 });
        
        })
        .catch((error) => {
            console.error('Error liking user:', error);
        })
        .finally(() => {
            setTimeout(() => {
                isAnimating.value = false;
                isLiked.value = false;
            }, 400);
        });

    }

const getProfilePictures = (pictures) => {
    const profilePictures = Array.isArray(pictures)
        ? pictures
        : JSON.parse(pictures || '[]');

    return profilePictures.map(pic => pic);
};
const responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3 },
    { breakpoint: '768px', numVisible: 2 },
    { breakpoint: '560px', numVisible: 1 }
];
</script>