<template>
  <div
    class="w-full rounded-[8px] bg-[#D87D4A] px-[24px] py-[55px] lg:pt-[133px] lg:pl-[117px] lg:pr-[96px] text-white text-center relative lg:flex items-center justify-between"
  >
    <div class="max-h-[207px] md:max-h-[237px]">
      <img class="mx-auto lg:hidden" :src="speakersThumbnail" alt="speaker" />
      <img class="absolute w-[410px] bottom-0 z-10 hidden lg:block" :src="speakerImage" alt="speaker-image">
      <img class="z-0 absolute top-0 md:-top-[7%] left-0 right-0 md:left-1/2 md:-translate-x-[50%] w-[550px] lg:left-[52px] lg:translate-x-0 lg:top-[20%]" :src="circlesPatterns" alt="circles-pattern">
    </div>
    <div>
      <h2
      class="mt-[32px] md:mt-[99px] text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] tracking-[1.286px] md:tracking-[2px] font-bold px-[25px] md:max-w-[261px] mx-auto md:px-0 lg:mx-0 lg:text-left "
    >
      ZX9 SPEAKER
    </h2>
    <p class="mt-[24px] text-[15px] leading-[25px] font-medium opacity-75 md:max-w-[350px] mx-auto lg:text-left">
      Upgrade to premium speakers that are phenomenally built to deliver truly
      remarkable sound.
    </p>
    <div class="mt-[49px] lg:text-left">
      <PrimaryButton
        :link="'/products/'"
        :background="'black'"
        :text="'SEE PRODUCT'"
      />
    </div>
    </div>
  </div>
</template>

<script setup>
import speakersThumbnail from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import speakerImage from "assets/home/desktop/image-speaker-zx9.png";
import circlesPatterns from '@/assets/images/pattern.svg'
</script>

<style lang="scss" scoped></style>
