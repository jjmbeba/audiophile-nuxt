<template>
  <div class="py-[120px] md:py-[96px] lg:flex flex-row-reverse items-center gap-[125px]">
    <div>
      <img
        :src="aboutMobile"
        class="rounded-[8px] md:hidden"
        alt="about-image"
      />
      <img
        :src="aboutTablet"
        class="rounded-[8px] hidden md:block md:max-h-[300px] lg:hidden"
        alt="about-image"
      />
      <img
        :src="aboutDesktop"
        class="rounded-[8px] hidden lg:block lg:w-[540px]"
        alt="about-image"
      />
    </div>
    <div class="lg:max-w-[445px]">
      <h2
        class="text-black text-[28px] md:text-[45px] leading-normal md:leading-[44px] tracking-[1px] md:tracking-[1.5px] font-bold text-center lg:text-left mt-[40px] md:mt-[63px] uppercase"
      >
        Bringing you the <span class="text-[#D87D4A]">best</span> audio gear
      </h2>
      <p
        class="mt-[32px] text-black/50 text-[15px] leading-[25px] font-medium text-center lg:text-left"
      >
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  </div>
</template>

<script setup>
import aboutMobile from "@/assets/shared/mobile/image-best-gear.jpg";
import aboutTablet from "@/assets/shared/tablet/image-best-gear.jpg";
import aboutDesktop from "@/assets/shared/desktop/image-best-gear.jpg";
</script>
