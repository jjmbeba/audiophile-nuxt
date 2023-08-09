<template>
  <div
    class="bg-[#101010] w-full px-6 md:px-[40px] lg:px-[165px] pt-[52px] md:pt-[60px] lg:pt-[75px] pb-[38px] md:pb-[46px] flex flex-col items-center md:items-start text-white relative before:content-[''] before:absolute before:w-[101px] before:h-[4px] before:bg-[#D87D4A] before:top-0 before:left-1/2 before:-translate-x-1/2"
  >
    <div class="w-full lg:flex items-center justify-between">
      <img :src="logo" alt="logo" />
      <div class="hidden lg:block">
        <NavLinks />
      </div>
    </div>
    <div class="mt-[48px] md:mt-[32px] lg:hidden">
      <NavLinks />
    </div>
    <div
      class="mt-[48px] w-full md:mt-[32px] lg:mt-[36px] text-[15px] leading-[25px] opacity-50 text-center md:text-left lg:flex items-end justify-between"
    >
      <p class="lg:max-w-[540px]">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div class="hidden lg:block">
        <SocialLinks/>
      </div>
    </div>
    <div
      class="mt-[48px] lg:mt-[56px] w-full mx-auto md:flex items-center justify-between"
    >
      <p class="opacity-50 text-center md:text-left">
        Copyright {{ year }}. All Rights Reserved
      </p>
      <div class="lg:hidden">
        <SocialLinks/>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/images/logo.svg";


const links = [
  {
    link: "/",
    text: "HOME",
  },
  {
    link: "/headphones",
    text: "HEADPHONES",
  },
  {
    link: "/speakers",
    text: "SPEAKERS",
  },
  {
    link: "/earphones",
    text: "EARPHONES",
  },
];

const date = new Date();
const year = date.getFullYear();
</script>

<style lang="scss" scoped></style>
