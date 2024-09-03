<template>
    <div class="w-full h-auto  ">
        <div v-if="profile" class="bg-white border border-surface-200 dark:border-surface-700 rounded-lg m-2 sm:flex" data-aos="fade-right">
            <div class="p-0 w-full sm:w-2/3">
                <Galleria 
                    :value="getProfilePictures(profile.profile_pictures)" 
                    :responsiveOptions="true" 
                    :numVisible="1" 
                    :circular="false" 
                    containerStyle="max-width: 640px"
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
                    <div class="font-medium text-2xl sm:text-3xl">{{ profile.name }} , <span class="font-medium">{{ profile.age }}</span></div>
                    <div class="font-medium text-md py-2 bg-gray-100 my-2 p-4 rounded-lg">
                        <span class="pi pi-shopping-bag pr-3 text-red-600"></span>  
                        <span class="sm:text-lg">{{ profile.occupation }}</span>
                    </div>
                    <div class="font-medium text-md py-2 bg-gray-100 my-2 p-4 rounded-lg">
                        <span class="pi pi-book pr-3 text-red-600"></span>  
                        <span class="sm:text-lg">{{ profile.education }}</span>
                    </div>
                    <div class="font-medium text-md py-2 bg-gray-100 my-2 p-4 rounded-lg">
                        <span class="pi pi-home pr-3 text-red-600 "></span> 
                        <span class="sm:text-lg">{{ profile.city }}</span>
                    </div>
                    <div class="mt-0 font-medium text-md py-2">Looking for <br/>
                        <Tag class="m-2" severity="info">{{ profile.preferences?.gender }}</Tag>
                        <Tag class="m-2" severity="info">{{ profile.preferences?.religion }}</Tag>
                        <Tag class="m-2" severity="info">{{ profile.preferences?.start_age }}-
                        {{ profile.preferences?.end_age }}</Tag>
                    </div>
                </div>
            </div>

            <div class="flex sm:flex-col  justify-between pb-10 sm:py-20 w-1/8 px-4">
                <section class="absolute  sm:static  top-80 ">
                    <span v-if="!isLiked">
                        <i 
                            class="pi pi-heart cursor-pointer" 
                            style="font-size: 2rem;" 
                            @click="like(profile.id)"
                        ></i>
                    </span>
                    <span v-else>
                        <i 
                            class="pi pi-heart-fill cursor-pointer text-red-700" 
                            style="font-size: 2rem;" 
                            :class="{ 'animate-like': isAnimating }"
                        ></i>
                    </span>
                </section>

                <section class="absolute sm:static top-80 right-10">
                    <span>
                        <i 
                            class="pi pi-times cursor-pointer" 
                            style="font-size: 2rem;" 
                            @click="skip(profile.id)"
                        ></i>
                    </span>
                </section>
            </div>
        </div>

        <div v-if="profile" class="bg-green-100 p-5">
            <h1 class="text-xl font-bold mb-5">Bio</h1>
            <p class="font-medium">{{ profile.bio }}</p>
        </div>
    </div>
</template>

<script setup>
import Galleria from 'primevue/galleria';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Tag from 'primevue/tag';

const profile = ref(null);

const getDatingProfile = () => {
    axios.get('dating/profiles')
        .then((res) => {
            profile.value = res.data;
        });
};

onMounted(getDatingProfile);

const isLiked = ref(false);
const isAnimating = ref(false);

const like = (userId) => {
    isLiked.value = true;
    isAnimating.value = true;

    axios.post('/like', { user_id: userId })
        .then(() => {
            getDatingProfile();
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
};

const skip = (userId) => {
    axios.post('/skip', { user_id: userId })
        .then(() => {
            getDatingProfile();
        })
        .catch((error) => {
            console.error('Error skipping user:', error);
        });
};

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

<style scoped>
@keyframes likeAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
}

.animate-like {
    animation: likeAnimation 0.4s ease;
}
</style>
