<template>
  <div
    class="mt-[48px] md:mt-0 flex items-center justify-center gap-[16px]"
  >
    <img class="w-[24px] h-[24px] cursor-pointer !hover:fill-[#D87D4A]" :src="facebook" alt="facebook-icon" />
    <img class="w-[24px] h-[24px] cursor-pointer !hover:fill-[#D87D4A]" :src="twitter" alt="twitter-icon" />
    <img class="w-[24px] h-[24px] cursor-pointer !hover:fill-[#D87D4A]" :src="instagram" alt="instagram-icon" />
  </div>
</template>

<script setup>
import facebook from "@/assets/images/facebook.svg";
import twitter from "@/assets/images/twitter.svg";
import instagram from "@/assets/images/instagram.svg";
</script>

<style lang="scss" scoped></style>
