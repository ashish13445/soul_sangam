
<template>
    <DatingLayout class="h-screen">
        
        <template v-slot="{ currentContent }">
            <!-- Render content based on currentContent -->
            <div v-if="currentContent === 'home'" class="max-h-2/3">
                <Home/>
            </div>
            <div v-if="currentContent === 'matches'">
                <div class="mt-10 bg-white">
                   
    <div class="card">
        <Tabs value="0">
            <TabList class="w-full">
                <Tab value="0" class="w-1/2">Notification</Tab>
                <Tab value="1" class="w-1/2">Matches</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <p class="m-0">
                       <Notifications/>
                    </p>
                </TabPanel>

            </TabPanels>
        </Tabs>
    </div>


    
                </div>
                
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
import Chat from '@/Components/Chat.vue';
import Notifications from '@/Components/Notifications.vue';
import Matches from '@/Components/Matches.vue';

import Home from './Home.vue';
import Preference from '../Profile/Partials/UpdatePreference.vue' ;
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
</script>
