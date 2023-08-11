<template>
    <div class="mt-[24px] md:mt-[33px] md:flex items-center gap-[11px] lg:gap-[30px]">
        <img class="rounded-[8px] md:hidden" :src="earphonesMobile" alt="earphones-image">
        <img class="rounded-[8px] hidden md:block w-[339px] h-[320px] lg:hidden" :src="earphonesTablet" alt="earphones-tablet">
        <img class="rounded-[8px] hidden lg:block w-[540] h-[320px]" :src="earphonesDesktop" alt="earphones-desktop">
        <div class="mt-[24px] md:mt-0 py-[41px] md:py-[101px] pl-[24px] md:pl-[42px] lg:pl-[95px] bg-[#F1F1F1] rounded-[8px] md:flex-1 md:h-[320px]">
            <h2 class="text-black text-[28px] leading-normal font-bold tracking-[2px] mb-[32px]">
                YX1 EARPHONES
            </h2>
            <PrimaryButton :link="'/'" :text="'SEE PRODUCT'" :background="'white'"/>
        </div>
    </div>
</template>

<script setup>
import earphonesMobile from '@/assets/home/mobile/image-earphones-yx1.jpg'
import earphonesTablet from '@/assets/home/tablet/image-earphones-yx1.jpg'
import earphonesDesktop from '@/assets/home/desktop/image-earphones-yx1.jpg'
</script>

<style lang="scss" scoped>

</style>