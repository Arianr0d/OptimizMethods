<template>
   <div class="mainform">
      <p>СЛАУ</p>
      <div>
         <p>A = </p>
         <form>
            <div v-for="(option, indexM) in MatrixA" :key="indexM">
               <input v-model="MatrixA[indexM][indexN]" v-for="(option, indexN) in MatrixA[indexM]" :key="indexN" type="text">
            </div>
         </form>
         <p>B =</p>
         <form>
            <div v-for="(option, indexm) in MatrixB" :key="indexm">
               <input v-model="MatrixB[indexm][index1]" v-for="(option, index1) in MatrixB[indexm]" :key="index1" type="text">
            </div>
         </form>
      </div>
      <button @click="func()">Рассчитать</button>
      <p v-if="openResult">Ответ:</p>
      <div v-if="openResult">
         <p>A+ =</p>
         <form>
            <div v-for="(option, index1) in MatrixAObr" :key="index1">
               <label v-for="(option, index2) in MatrixAObr[index1]" :key="index2">{{ option }}</label>
            </div>
         </form>
         <p>X =</p>
         <form>
            <div v-for="(option, index1) in MatrixX" :key="index1">
               <label v-for="(option, index2) in MatrixX[index1]" :key="index2">{{ option }}</label>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import {MethodFadeeva, multiply} from '../test.js'

export default {
   name: 'CalculateMatrix',
   data() {
      return {
         n: localStorage.n,
         m: localStorage.m,
         MatrixA: [],
         MatrixB: [],
         MatrixAObr: [],
         MatrixX: [],
         openResult: false
      }
   },
   methods: {
      func() {
         this.MatrixAObr = MethodFadeeva(this.MatrixA)

         this.MatrixX = multiply(this.MatrixAObr, this.MatrixB)
         this.openResult = !this.openResult
      }
   },
   created(){
      this.MatrixA, this.MatrixB = []
         for(let i = 0; i < this.m; i++) {
            this.MatrixA[i] = []
            for(let j = 0; j < this.n; j++) {
               this.MatrixA[i].push(null)
            }
         }

         for(let i = 0; i < this.m; i++) {
            this.MatrixB[i] = []
            this.MatrixB[i].push(null)
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
                  font-size: vw(18);
                  border: 1px solid black;
                  width: vw(100);
                  align-items: center;
                  text-align: center;
                  padding: vw(10);
               }
               input:focus {
                  box-shadow: none;
                  outline-width: 0;
               }

               label {
                  font-size: vw(18);
                  border: 1px solid black;
                  min-width: vw(100);
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
         margin: vw(50) auto vw(80) auto;
      }

      button:hover {
         background: #7B9299;
         color: white;
         border-color: #7B9299;
      }
   }
</style>