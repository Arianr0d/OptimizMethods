<template>
  <div class="home">
     <div v-if="!openCalculate">
      <button v-if="!openForm" @click="openForm = !openForm">Задать СЛАУ</button>
      <form v-if="openForm">
         <div>
            <p>Введите количество строк m:</p>
            <input v-model="m_value" type="text">
         </div>
         <div>
            <p>Введите количество столбцов n:</p>
            <input v-model="n_value" type="text">
         </div>
         <div>
            <button type="submit" @click="Initializate()">Сформировать систему</button>
         </div>
      </form> 
     </div>
     <div v-else>
       <formcalculate></formcalculate>
     </div>
  </div>
</template>

<script>
import FormCalculate from '../components/FormCalculate.vue'

export default {
  name: 'Home',
  components: {
     'formcalculate': FormCalculate
  },
  data() {
     return {
         openForm: false,
         openCalculate: false,
         m_value: '',
         n_value: ''
     }
  },
  methods: {
      Initializate() {
         localStorage.m = this.m_value
         localStorage.n = this.n_value

         this.openCalculate = !this.openCalculate
     }
  }
}
</script>

<style scoped lang="scss">
   @import "/src/assets/css/function.scss";

   .home {
      justify-content: center;
      font-size: vw(18);
   }

   form {
      margin-top: vw(100);
      text-align: center;
   
      div {
         margin-bottom: vw(25);

         display: flex;
         flex-direction: row;
         justify-content: center;

         p {
            width: vw(300);
            text-align: right;
            margin-right: vw(15);
         }

         input {
            width: vw(40);
            border-bottom: 1px solid #7B9299;
            padding: vw(2) vw(10);
         }
         input:focus {
            box-shadow: none;
            border-bottom: 2px solid #7B9299;
            outline-width: 0;
         }
         input:hover {
            border-color: #7B9299;
         }
      }
   }

   button {
      font-size: vw(18);
      margin: vw(20);
      box-shadow: none;
      background: transparent;
      padding: vw(10) vw(20);
      border: 1px solid black;
   }

   button:hover {
      background: #7B9299;
      color: white;
      border-color: #7B9299;
   }
</style>