
<template>
    <DatingLayout class="h-screen">
        
        <template v-slot="{ currentContent }">
            <!-- Render content based on currentContent -->
            <div v-if="currentContent === 'home'" class="max-h-2/3">
                <Home/>
            </div>
            <div v-if="currentContent === 'matches'">
                <h1>Likes or Matches Content</h1>
                <p>This is the content for Likes or Matches.</p>
            </div>
            <div v-if="currentContent === 'chat'">
                <Chat/>
            </div>
            <div v-if="currentContent === 'settings'" class="mt-10 max-h-2/3">
                <Preference/>
            </div>
        </template>

        
        
    </DatingLayout>
</template>


<script setup>
import DatingLayout from '@/Layouts/DatingLayout.vue';
import Chat from '@/Components/Chat.vue'
import Home from './Home.vue';
import Preference from '../Profile/Partials/UpdatePreference.vue' 

</script>
