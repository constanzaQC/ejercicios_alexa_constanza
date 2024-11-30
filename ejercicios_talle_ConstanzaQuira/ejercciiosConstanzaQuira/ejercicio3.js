//3. Encuentra el número más grande en un array.

let numGrande=[4,6,8,10];

let max=numGrande[0];
numGrande.forEach((num)=>{
    if(num>max){
        max=num;
    } 
})
console.log(max);


