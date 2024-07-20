<template>
   <CheckedInLayout>
    <div >
        <div v-for="notification in notifications" class="bg-white p-10 m-10">
        {{notification.data.message}}
    </div>
    </div>

    
   </CheckedInLayout> 
</template>
<script setup>
  import CheckedInLayout from '@/Layouts/CheckedInLayout.vue';
import axios from 'axios';
import { onMounted,ref } from 'vue';
const notifications = ref(null);
  const fetchNotifications = () =>{
    axios.get(`/notifications/${page.props.ticket.event_id}`)
    .then((res)=>{
        notifications.value = res.data.notifications;
    })
  }
  onMounted(fetchNotifications);
</script>