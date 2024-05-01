 const findMaxValue=(num:number[]):number[] =>{
  return num.filter((findMax)=>findMax>15)    
 };
 
 const numbersArray= [2,5,9,12,15,30,40,50];
 let findMaxval = findMaxValue(numbersArray);
 console.log("FIND_MAX_VALUE",findMaxval);
 