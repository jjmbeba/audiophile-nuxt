<template>
    <div class="bg-[#FAFAFA] px-[24px] md:px-[39px] lg:px-[165px] pt-[92px] pb-[120px] flex flex-col md:flex-row md:justify-center gap-[80px] md:gap-[10px] lg:gap-[30px]">
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
        imageUri:headphonesThumbnail
    },
    {
        text:'SPEAKERS',
        imageUri:speakersThumbnail
    },
    {
        text:'EARPHONES',
        imageUri:earphonesThumbnail
    },
]
</script>

<style lang="scss" scoped>

</style>