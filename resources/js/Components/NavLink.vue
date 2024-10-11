<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});
    
const classes = computed(() =>
    props.active
        ? 'inline-flex items-center px-1 pt-1  text-lg font-bold leading-5 text-secondary leading-10 transition duration-150 ease-in-out'
        : 'inline-flex text-blossomPink items-center px-1 pt-1 border-b-2 border-transparent text-lg font-bold  transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
