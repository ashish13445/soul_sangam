<template>
<AuthenticatedLayout>
    <div class="py-5 md:py-12 px-5 md:px-60 bg-primary-radial">
        <UpdatePreference/>

    </div>

</AuthenticatedLayout>    
</template>
<script setup>
    import UpdatePreference from './Partials/UpdatePreference.vue';
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

</script>