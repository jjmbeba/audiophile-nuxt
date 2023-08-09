<template>
    <ul class="flex items-center flex-col md:flex-row gap-[16px] md:gap-[34px]">
      <li
        v-for="link in links"
        class="text-white font-bold text-[13px] leading-[25px] tracking-[2px] cursor-pointer hover:text-[#D87D4A]"
      >
        <NuxtLink :to="link.link">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
</template>

<script setup>

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

// const linkVariants = cva('flex items-center',{
//     variants:{
        
//     }
// })

</script>