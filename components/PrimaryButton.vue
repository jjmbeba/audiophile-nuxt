<template>
  <NuxtLink :to="link">
    <button :class="cn(buttonVariants({ background }))">
      {{ text }}
    </button>
  </NuxtLink>
</template>

<script setup>
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const { text, background, link } = defineProps(["text", "background", "link"]);

const buttonVariants = cva(
  "py-[15px] px-[30px] font-bold text-[13px] leading-normal tracking-[1px] uppercase relative",
  {
    variants: {
      background: {
        orange: "bg-[#D87D4A] text-white hover:bg-[#FBAF85]",
        black: "bg-black text-white hover:bg-[#4C4C4C]",
        white:'bg-white text-black border border-black'
      },
    },
  }
);
</script>
