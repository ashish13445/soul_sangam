



<template>
    <DatingLayout>
        <!-- <div v-for="participant in participants" class="bg-white m-10 rounded sm:flex">
            <div class="border-2 sm:w-1/3 p-10">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png">
            </div>
            <div class="border-2 sm:w-2/3">
                {{participant.name}}
             </div>
        </div> -->
        <div class="w-full">

        <Carousel :value="profiles" :numVisible="1" :numScroll="1"  containerClass="">
    <template #item="slotProps">
        <div class="bg-white border border-surface-200 dark:border-surface-700 rounded m-2 md:flex ">
            <div class="mb-4 p-0 w-2/3">
               
                <div class="h-full overflow-hidden ">
    <Image :src="`storage/profile_pictures/${slotProps.data.profile_picture}`" 
           alt="Profile Picture" 
           class="w-full h-full object-contain" 
           preview
          />
</div>
            </div>
           
            
            <div class="w-2/3 h-full">
            
            <div class="  p-10">
                <div class=" font-medium">Name:{{ slotProps.data.name }}</div>
                <div class=" font-medium text-md py-2">Age: {{ slotProps.data.age }}</div>
                <div class=" font-medium text-md py-2">Occupation: {{ slotProps.data.occupation }}</div>
                <div class="mt-0 font-medium text-md py-2">Education: {{ slotProps.data.education }}</div>
                <div class="mt-0 font-medium text-md py-2">City: {{ slotProps.data.city }}</div>
                <div class="mt-0 font-medium text-md py-2">Partner preference: {{ slotProps.data.preference }}</div>

            </div>
            
            </div>
           
            
        </div>
        <div class=" bg-green-100 p-5 ">
                <h1 class="text-xl font-bold mb-5 ">Bio</h1>
                <p class="font-medium">
                    {{ slotProps.data.bio }}
                </p>
            </div>
        <div class="flex justify-center pt-10">
            <span v-if="isLiked(slotProps.data.id)"><i class="pi pi-heart-fill cursor-pointer" style="font-size: 2rem;color: red;" @click="toggleLike(slotProps.data.id)"></i></span>
            <span v-else><i class="pi pi-heart cursor-pointer" style="font-size: 2rem;" @click="toggleLike(slotProps.data.id)"></i></span>
        </div>
    </template>
</Carousel>
</div>
    </DatingLayout>
    
</template>
<script setup>

import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Button from 'primevue/button';

import Image from 'primevue/image';

import DatingLayout from '@/Layouts/DatingLayout.vue';
  import {ref,onMounted} from 'vue'
  const profiles = ref([]);
   const getDatingProfiles = () => {
    axios.get('dating/profiles')
    .then((res)=>{
        profiles.value = res.data;

    })
   }
   onMounted(getDatingProfiles);

   const likedUserIds = ref([]);

   const isLiked = (userId) => {
  return likedUserIds.value.includes(userId);
};
const toggleLike = (userId) => {
    if (isLiked(userId)) {
        // // Unlike user
        // axios.post('/like/unlike', { user_id: userId })
        //     .then(response => {
        //         likedUserIds.value = likedUserIds.value.filter(id => id !== userId);
        //     })
        //     .catch(error => {
        //         console.error('Error unliking user:', error);
        //     });
    } else {
        // Like user
        axios.post('/like/like', { user_id: userId })
            .then(response => {
                likedUserIds.value.push(userId);
            })
            .catch(error => {
                console.error('Error liking user:', error);
            });
    }
}; 

</script>