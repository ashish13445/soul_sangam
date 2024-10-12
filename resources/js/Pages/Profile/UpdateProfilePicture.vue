<template>
    <AuthenticatedLayout >
        <div class="w-full pt-20 flex flex-col items-center  bg-primary-radial">
            <div class=" w-full flex justify-center sm:w-1/2 bg-white rounded-lg">
            <ProfilePicture/>
        </div>
        <hr/>
        <div class=" sm:w-1/2 px-10 p-5 bg-white rounded-lg m-5 h-content ">
            <h2 class="text-2xl font-semibold mb-4">Profile Picture Upload Guidelines</h2>
    <ul class="list-disc pl-5 space-y-2">
        <li class="text-gray-700">
            <span class="font-bold">Clear, High-Quality Photos:</span> Upload a clear photo where your face is easily visible. Avoid blurry or pixelated images.
        </li>
        <li class="text-gray-700">
            <span class="font-bold">Recent Photos:</span> Make sure your photo is recent, preferably within the last 6 months.
        </li>
        <li class="text-gray-700">
            <span class="font-bold">No Group Photos:</span> Upload solo pictures to avoid confusion.
        </li>
        <li class="text-gray-700">
            <span class="font-bold">Appropriate Attire:</span> Dress in a way that reflects your personality but keep it respectful.
        </li>
        <li class="text-gray-700">
            <span class="font-bold">No Filters or Heavy Edits:</span> Show your authentic self by avoiding excessive filters.
        </li>
        <li class="text-gray-700">
            <span class="font-bold">Variety of Angles and Expressions:</span> Upload multiple photos showing different angles or expressions.
        </li>
        <li class="text-gray-700">
            <span class="font-bold">Avoid Obscuring Your Face:</span> Avoid sunglasses, hats, or masks that cover your face.
        </li>
        <li class="text-gray-700">
            <span class="font-bold">Respectful and Safe Content:</span> Ensure the photo complies with community guidelines.
        </li>
        <li class="text-gray-700">
            <span class="font-bold">Outdoor or Natural Lighting:</span> Photos taken in natural light look more authentic.
        </li>
    </ul>
        </div>
        </div>
        
    
    </AuthenticatedLayout>    
    </template>
    <script setup>
        import ProfilePicture from '@/Components/ProfilePicture.vue';
        import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    
    </script>