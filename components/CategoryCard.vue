<template>
    <div class="pt-[88px] pb-[22px] bg-[#F1F1F1] rounded-[8px] max-w-[327px] md:w-[223px] lg:w-[350px] flex flex-col items-center relative">
        <img :src="category.imageUri" class="absolute -top-[52px] h-[150px]" alt="category-thumbnail">
        <h3 class="text-black font-bold text-[15px] leading-normal tracking-[1.071px]">{{ category.text }}</h3>
        <div class="pt-[17px] flex items-center gap-[13px]">
            <span class="text-[13px] leading-normal tracking-[1px] font-bold opacity-50">SHOP</span>
            <img :src="arrow" alt="arrow-icon">
        </div>
    </div>
</template>

<script setup>
import arrow from '@/assets/shared/desktop/icon-arrow-right.svg'
import img from '/assets/shared/desktop/image-category-thumbnail-headphones.png'

const {category} = defineProps(['category']) 
</script>