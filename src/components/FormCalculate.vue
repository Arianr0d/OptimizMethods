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
      <button v-if="!openResult" @click="func()">Рассчитать</button>
      <p v-if="openResult" style="margin-top: 5vw">Ответ:</p>
      <div v-if="openResult">
         <p>A</p>
         <p style="margin-left: 0">+<br><br></p>
         <p style="margin-left: 0">=</p>
         <form>
            <div v-for="(option, index1) in MatrixAObr" :key="index1">
               <input type="text" readonly v-for="(option, index2) in MatrixAObr[index1]" :key="index2" :placeholder="option" maxlength="10">
            </div>
         </form>
         <p>X =</p>
         <form>
            <div v-for="(option, index1) in MatrixX" :key="index1">
               <input type="text" readonly v-for="(option, index2) in MatrixX[index1]" :key="index2" :placeholder="option" maxlength="10">
            </div>
         </form>
      </div>
      <div v-if="openResult">
         <p style="margin-top: 3vw">Невязка: {{ resultMNK }}</p>
      </div>
   </div>
</template>

<script>
import {MethodFadeeva, multiply, MNK} from '../test.js'

export default {
   name: 'FormCalculate',
   data() {
      return {
         n: localStorage.n,
         m: localStorage.m,
         MatrixA: [],
         MatrixB: [],
         MatrixAObr: [],
         MatrixX: [],
         resultMNK: 0,
         openResult: false
      }
   },
   methods: {
      func() {
         this.MatrixAObr = MethodFadeeva(this.MatrixA)
         this.MatrixX = multiply(this.MatrixAObr, this.MatrixB)
         this.resultMNK = MNK(this.MatrixB, multiply(this.MatrixA, this.MatrixX))

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
            margin: auto vw(10) auto vw(40);
         }

         form {
            div {
               display: flex;

               input {
                  font-size: vw(18);
                  border: 1px solid black;
                  align-items: center;
                  text-align: center;
                  padding: vw(10);
               }
               input:focus {
                  box-shadow: none;
                  outline-width: 0;
               }

               input::-webkit-input-placeholder { 
                  color: black;
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