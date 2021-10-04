<template>
   <div>
      <button>{{ buttonName }}</button>
   </div>
</template>

<script>

export default {
   name: 'Button',
   props: {
      buttonName: { type: String }
   }
}
</script>

