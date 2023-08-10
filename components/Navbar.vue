<template>
  <div
    :class="
      cn(
        `w-full flex items-center justify-between px-6 py-[32px] md:px-[40px] bg-transparent md:justify-start lg:justify-between lg:px-[165px] relative z-50 after:absolute after:content-[''] after:bottom-0 after:left-0 md:after:left-[40px] lg:after:left-[165px] after:w-full md:after:w-[calc(100%-80px)] lg:after:w-[calc(100%-330px)] after:bg-white after:h-[1px] after:opacity-10`
      )
    "
  >
    <img :src="menu" class="lg:hidden" />
    <NuxtLink to="/" class="ml-[42px] lg:ml-0 flex-1 lg:flex-none">
      <img :src="logo" />
    </NuxtLink>
    <div class="hidden lg:block">
      <NavLinks/>
    </div>
    <img :src="cart" />
  </div>
</template>

<script setup>
import menu from "../assets/shared/tablet/icon-hamburger.svg";
import cart from "../assets/images/cart.svg";
import logo from "../assets/images/logo.svg";
import { cn } from "@/utils";

const links = [
  {
    link: "/",
    text: "HOME",
  },
  {
    link:'/headphones',
    text:'HEADPHONES'
  },
  {
    link:'/speakers',
    text:'SPEAKERS'
  },
  {
    link:'/earphones',
    text:'EARPHONES',
  }
];

//'HEADPHONES', 'SPEAKERS','EARPHONES'
</script>

<style lang="scss" scoped></style>
