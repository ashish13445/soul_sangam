<template>
    <main class="h-full bg-primary sm:flex sm:bg-primary-radial sm:my-20">
        <div class="">
            <Matches/>
        </div>
            
                <slot />

         
        </main>
</template>
<script setup>
import Matches from '@/Components/Matches.vue';


</script>