<template>
<AuthenticatedLayout>
    <div class="w-screen py-12 px-8">
        <UpdatePreference/>

    </div>

</AuthenticatedLayout>    
</template>
<script setup>
    import UpdatePreference from './Partials/UpdatePreference.vue';
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

</script>