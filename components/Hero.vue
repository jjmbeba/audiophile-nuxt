<template>
  <div
    class="pt-[108px] md:pt-[126px] pb-[112px] md:pb-[167px] lg:pb-[158px] text-center lg:text-left px-[24px] md:px-[39px] lg:px-[165px] text-white"
  >
    <img
      :src="bgMobile"
      class="absolute -top-[10px] w-full left-0 z-0 md:hidden"
      alt="background-image-mobile"
    />
    <img
      :src="bgTablet"
      class="absolute top-[0px] h-[740px] w-full left-0 z-0 hidden md:block lg:hidden"
      alt="background-image-tablet"
    />
    <img
      :src="bgDesktop"
      class="absolute top-[0px] left-0 h-[723px] z-0 hidden lg:block"
      alt="background-image-tablet"
    />
    <h3
      class="text-[14px] leading-normal tracking-[10px] font-normal opacity-[0.4964]"
    >
      NEW PRODUCT
    </h3>
    <h1
      class="text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] tracking-[1.286px] md:tracking-[2px] font-bold uppercase mt-[16px] md:mt-[24px] lg:max-w-[396px] text-white relative"
    >
      XX99 Mark II HeadphoneS
    </h1>
    <p
      class="text-[15px] leading-[25px] font-medium opacity-75 mt-[24px] md:max-w-[350px] mx-auto lg:mx-0"
    >
      Experience natural, lifelike audio and exceptional build quality made for
      the passionate music enthusiast.
    </p>
    <div class="mt-[43px] md:mt-[40px] relative">
      <PrimaryButton :text="'see product'" />
    </div>
  </div>
</template>

<script setup>
import bgMobile from "@/assets/home/mobile/image-header.jpg";
import bgTablet from "@/assets/home/tablet/image-header.jpg";
import bgDesktop from "@/assets/home/desktop/image-hero.jpg";
</script>
