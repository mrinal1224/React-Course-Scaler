function outer() {
    let arrFn = [];
    let i;
    for (i = 0; i < 3; i++) {
      arrFn.push(function fn() {
        console.log(i);
      });
    }
    return arrFn;
   }
   let arrFn = outer();
   
   console.log(arrFn)
   
   
   arrFn[0]();
   arrFn[1]();
   arrFn[2]();