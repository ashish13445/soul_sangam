<template>
  <Menu v-if="matches.length" :model="matches" class="">
            
            <template #item="{ item, props }" >
                <div class="flex items-center justify-between"  @click="selectUser(item.matched_user)">
                    <span >{{ item.matched_user.name }}</span>
                   
                </div>
            </template>

        </Menu>
        <Menu v-else>
          No matches yet!
        </Menu>
      
  
</template>
<script setup>
import { onMounted, ref } from 'vue';
import Menu from 'primevue/menu';
import axios from 'axios';
import { Link } from '@inertiajs/vue3';
import { useChatStore } from '@/stores/chatStore';
const chatStore = useChatStore();

const matches = ref([]);
const  fetchMatches = async()=> {
      try {
        const response = await axios.get('/api/dating/matches');
        matches.value = response.data;
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    }
    onMounted(fetchMatches);
    const selectUser = (user)=>{
      chatStore.selectedUser = user;
    }
</script>