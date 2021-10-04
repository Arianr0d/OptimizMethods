<template>
  <div class="home">
    <buttonComp :buttonName="buttonName"></buttonComp>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '../components/Button.vue'

export default {
  name: 'Home',
  components: {
    'buttonComp': Button
  },
  data() {
     return {
         buttonName: 'Посчитать СЛАУ'
     }
  }
}
</script>
