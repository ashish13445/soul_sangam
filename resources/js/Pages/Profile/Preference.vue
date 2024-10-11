<template>
<AuthenticatedLayout>
    <div class=" py-12 px-8 bg-primary-radial">
        <UpdatePreference/>

    </div>

</AuthenticatedLayout>    
</template>
<script setup>
    import UpdatePreference from './Partials/UpdatePreference.vue';
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

</script>