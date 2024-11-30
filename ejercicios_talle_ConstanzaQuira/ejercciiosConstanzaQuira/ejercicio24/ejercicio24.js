let btn=document.querySelector("#btn");
let a=0;
btn.addEventListener("click", () => {
    let p=document.querySelector("#p");
    
    for (let i=0;i<=1;i++){
        a=a+i;
    }
    p.textContent=a;
});