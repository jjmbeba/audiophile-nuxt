<template>
  <div
    class="py-[97px] md:py-[101px] pl-[24px] md:pl-[62px] lg:pl-[96px] rounded-[8px] flex flex-col gap-[32px] relative"
  >
    <img :src="bgMob" alt="bg-mobile" class="absolute inset-0 rounded-[8px] md:hidden" />
    <img :src="bgTab" alt="bg-tablet" class="absolute inset-0 rounded-[8px] hidden md:block lg:hidden" />
    <img :src="bgDestop" alt="bg-tablet" class="absolute inset-0 rounded-[8px] hidden lg:block" />
    <h2 class="text-black text-[28px] leading-normal tracking-[2px] font-bold relative">
      ZX7 SPEAKER
    </h2>
    <PrimaryButton :link="'/'" :text="'SEE PRODUCT'" :background="'white'" />
  </div>
</template>

<script setup>
import bgMob from "@/assets/home/mobile/image-speaker-zx7.jpg";
import bgTab from "@/assets/home/tablet/image-speaker-zx7.jpg";
import bgDestop from "@/assets/home/desktop/image-speaker-zx7.jpg";
</script>

<style lang="scss" scoped></style>
