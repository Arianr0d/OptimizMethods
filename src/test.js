   function MethodFadeeva(matrixA) {
      let a = matrixA;
      let aT = transpose(a);
      let aTa = multiply(aT, a);
      let I = diag(row(aTa));
      let F = mtrcopy(I);
      let mu = tr(aTa);
      let i = 2;
      let _mu = 0, _F = 0;
      while (Math.abs(mu) > Math.exp(-20)){
          let dF = sum(multi(I,mu),multiply(aTa,F),-1);
          let dmu = tr(multiply(aTa,dF))/i;
         _mu = mu;
         _F = F;
          mu = dmu;
          F = dF;
          i++;
      }
      let Aobr = multi(multiply(_F,aT),1/_mu);
      return Aobr;
  }

  // matrix helpers
  function MNK(B, A){
      return multiply(transpose(sum(A,B,-1)),sum(A,B,-1))[0][0];
  }

  function row(matrix){
      return matrix.length;
  }
  function col(matrix){
      return matrix[0].length;
  }
  function diag(d){
      let rows = d;
      let columns = d;
      let arr = [];
      for(let i=0; i<rows; i++){
          arr[i] = [];
          for(let j=0; j<columns; j++){
              arr[i][j] = 0;//
              if (i == j) arr[i][j]=1;
          }
      }
      return arr;
  }

  function transpose(A)       //На входе двумерный массив
  {
      var m = A.length, n = A[0].length, AT = [];
      for (var i = 0; i < n; i++)
      { AT[ i ] = [];
          for (var j = 0; j < m; j++) AT[ i ][j] = A[j][ i ];
      }
      return AT;
  }

  function multiply(A,B)
  {
      var rowsA = A.length, colsA = A[0].length,
          rowsB = B.length, colsB = B[0].length,
          C = [];

      if (colsA != rowsB) return false;

      for (var i = 0; i < rowsA; i++) C[i] = [];

      for (var k = 0; k < colsB; k++)
      { for (var i = 0; i < rowsA; i++)
      { var temp = 0;
          for (var j = 0; j < rowsB; j++) temp += A[i][j]*B[j][k];
          C[i][k] = temp;
      }
      }

      return C;
  }

  function multi(Matrix, scalar){
      let newMatr = mtrcopy(Matrix);
      for(let i = 0; i < row(newMatr); i++){
          for(let j = 0; j < col(newMatr); j++){
              newMatr[i][j] = newMatr[i][j]*scalar;
          }
      }
      return newMatr;
  }

  function sum(A, B, m=1){
      let ans = mtrcopy(A);
      ans.forEach(function (item, i, arr1){
          item.forEach(function (item, j, arr2){
              ans[i][j] = ans[i][j] + m*B[i][j];
          })
      })
      return ans;
  }

  function tr(matrix){
      let ans = 0;
      for (let i = 0; i < row(matrix); i++){
          ans += matrix[i][i];
      }
      return(ans);
  }

  function diag2(n) {
      return (new Array(n).fill(0)).map(
          function (a, i){
              return (new Array(n)).fill(0).map(function (b,j){return (i==j)?1:0;});
          }
      )
  }

  function mtrcopy(matrix){
      let newArray = matrix.map(function(arr) {
          return arr.slice();
      });
      return newArray;
  }

export {MethodFadeeva, multiply, MNK}