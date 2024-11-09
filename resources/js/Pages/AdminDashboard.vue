<template>
    <div class="">
      <q-layout view="hHh Lpr lff" container style="min-height: 100vh" class=" w-screen">
        <q-header class="header">
          <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
            <q-toolbar-title><h1 class="text-2xl font-extrabold">Admin Panel</h1></q-toolbar-title>
          </q-toolbar>
        </q-header>
  
        <q-drawer
          v-model="drawer"
          show-if-above
  
          :mini="miniState"
          @mouseover="miniState = false"
          @mouseout="miniState = true"
          mini-to-overlay
  
          :width="200"
          :breakpoint="500"
          bordered
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
        >
          <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
            <q-list padding>
              <q-item clickable v-ripple :active="activeItem === 'customers'" @click="activeItem = 'customers'">
                <q-item-section avatar>
                  <q-icon name="person" />
                </q-item-section>
  
                <q-item-section>
                  Users
                </q-item-section>
              </q-item>
  
              <q-item  clickable v-ripple :active="activeItem === 'events'" @click="activeItem = 'events'">
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>
  
                <q-item-section>
                  Events
                </q-item-section>
              </q-item>

              <q-item  clickable v-ripple :active="activeItem === 'manageEvents'" @click="activeItem = 'manageEvents'">
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>
  
                <q-item-section>
                  Manage Events
                </q-item-section>
              </q-item>
  
  
              
  
              <q-separator />
  
              <q-item clickable v-ripple  >
                <Link :href="route('logout')" method="post" class="flex">
                <q-item-section avatar>
                  <q-icon name="logout" />
                </q-item-section>
  
                <q-item-section>
                  Logout
                </q-item-section>
            </Link>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-drawer>
  
        <q-page-container>
          <q-page padding>
            <div v-if="activeItem === 'events'">
            <Events/>
            </div>
            <div v-if="activeItem === 'customers'">
            <Customers/>
            </div>
            <div v-if="activeItem === 'manageEvents'">
            <ManageEvents/>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </template>
  <script setup>
import { ref } from 'vue';
import 'quasar/src/css/index.sass'; // Quasar CSS
import Events from '@/Pages/Admin/Events.vue';
import Customers from '@/Pages/Admin/Customers.vue';

const drawer = ref(false);
const miniState = ref(true);
import { QPage, QList, QItem, QItemSection, QIcon } from 'quasar';
import { Link } from '@inertiajs/inertia-vue3';
import ManageEvents from './Admin/ManageEvents.vue';
const activeItem = ref('events'); // Default active item
</script>

<style>
.header {
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9));}
</style>