<template>
   <div class="mainform">
      <p>СЛАУ</p>
      <div>
         <p>A = </p>
         <form>
            <div v-for="(option, indexM) in funcRange(m)" :key="indexM">
               <input :v-model="Matrix[indexM][indexN]" v-for="(option, indexN) in funcRange(n)" :key="indexN" type="text">
            </div>
         </form>
         <p>B =</p>
         <form>
            <div v-for="(option, indexm) in funcRange(m)" :key="indexm">
               <input v-for="(option, index1) in funcRange(1)" :key="index1" type="text">
            </div>
         </form>
      </div>
      <button @click="func()">Рассчитать</button>
   </div>
</template>

<script>
import MethodFadeeva from '../test.js'

export default {
   name: 'CalculateMatrix',
   data() {
      return {
         n: localStorage.n,
         m: localStorage.m,
         Matrix: []
      }
   },
   methods: {
      funcRange(value) {
         var mass = []
         for (let i = 0; i < value; i++) {
            mass.push(i)
         }
         return mass
      },
      func() {
         console.log(Matrix)
      }
   },
   created() {
      this.Matrix = new Array(localStorage.m)
         for (let i = 0; i < localStorage.m; i++) {
            for(let j = 0; j < localStorage.n; j++) {
               this.Matrix[i] = new Array(localStorage.n)
            }
         }
   }
}
</script>

<style scoped lang="scss">
   @import "/src/assets/css/function.scss";

   .mainform {
      font-size: vw(18);

      p {
         font-size: vw(30);
         font-weight: bold;
         margin-bottom: vw(30);
      }

      div {
         display: flex;
         flex-direction: row;
         justify-content: center;

         p {
            margin: vw(70) vw(10) auto vw(10);
         }

         form {
            div {
               display: flex;

               input {
                  border: 1px solid black;
                  align-items: center;
                  text-align: center;
                  padding: vw(10);
               }
               input:focus {
                  box-shadow: none;
                  outline-width: 0;
               }
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
         margin-top: vw(50);
      }

      button:hover {
         background: #7B9299;
         color: white;
         border-color: #7B9299;
      }
   }
</style>