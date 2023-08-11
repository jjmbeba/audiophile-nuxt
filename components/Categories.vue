<template>
    <div class="bg-[#FAFAFA] pt-[92px] flex flex-col md:flex-row md:justify-center lg:justify-between gap-[80px] md:gap-[10px] lg:gap-[30px]">
        <CategoryCard :category="category" v-for="category in categories"/>
    </div>
</template>

<script setup>
import headphonesThumbnail from '/assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphonesThumbnail from '/assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakersThumbnail from '/assets/shared/desktop/image-category-thumbnail-speakers.png'

const categories = [
    {
        text:'HEADPHONES',
        imageUri:headphonesThumbnail,
        link:'/'
    },
    {
        text:'SPEAKERS',
        imageUri:speakersThumbnail,
        link:'/'
    },
    {
        text:'EARPHONES',
        imageUri:earphonesThumbnail,
        link:'/'
    },
]
</script>

<style lang="scss" scoped>

</style>