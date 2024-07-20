<template>
    <CheckedInLayout>
        <!-- <div v-for="participant in participants" class="bg-white m-10 rounded sm:flex">
            <div class="border-2 sm:w-1/3 p-10">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png">
            </div>
            <div class="border-2 sm:w-2/3">
                {{participant.name}}
             </div>
        </div> -->
        <Carousel :value="participants" :numVisible="1" :numScroll="1"  containerClass="flex items-center justify-between w-max-screen">
    <template #item="slotProps">
        <div class="bg-white border border-surface-200 dark:border-surface-700 rounded m-2  md:p-0 md:flex items-center">
            <div class="mb-4 md:p-5 w-1/3 ">
                <div class="flex justify-center border-4 border-black ">
                    
     <img
     :src="`storage/profile_pictures/${slotProps.data.profile_picture}`"   
        />
        <!-- <img :src="`storage/profile_pictures/${slotProps.data.profile_picture}`" :alt="slotProps.data.name" class="rounded-full" /> -->
    
                </div>
            </div>
            
            <div class="md:p-10 w-2/3 md:flex justify-evenly">
            <div class=" bg-green-100 p-5 w-1/3">
                <h1 class="text-xl font-bold mb-5 ">summary</h1>
                <p class="font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus quia beatae sapiente quam suscipit temporibus molestiae, facilis, optio harum aut error est adipisci dolor deserunt inventore quo earum voluptate.
                </p>
            </div>
            <div class=" flex flex-col justify-between p-10 w-1/3">
                <div class="mb-4 font-medium">Name:{{ slotProps.data.name }}</div>
                <div class="mt-0 font-medium text-md py-5">Age: {{ slotProps.data.name }}</div>
                <div class="mt-0 font-medium text-md py-5">Occupation: {{ slotProps.data.name }}</div>
                <div class="mt-0 font-medium text-md py-5">Education: {{ slotProps.data.name }}</div>
                <div class="mt-0 font-medium text-md py-5">Education: {{ slotProps.data.name }}</div>
                <div class="mt-0 font-medium text-md py-5">Partner preference: {{ slotProps.data.name }}</div>

            </div>
            
            </div>
            
        </div>
        <div class="flex justify-center">
            <span v-if="isLiked(slotProps.data.id)"><i class="pi pi-heart-fill cursor-pointer" style="font-size: 2rem;color: red;" @click="toggleLike(slotProps.data.id)"></i></span>
            <span v-else><i class="pi pi-heart cursor-pointer" style="font-size: 2rem;" @click="toggleLike(slotProps.data.id)"></i></span>
        </div>
    </template>
</Carousel>

    </CheckedInLayout>
    
</template>
<script setup>

import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Button from 'primevue/button';

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