<template>
  <div>
    <Navbar />
    <div>
      <slot />
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Manrope:wght@400;500;600;700&display=swap');

*{
    font-family: 'Manrope';
}
</style>