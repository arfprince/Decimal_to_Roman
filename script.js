const number=document.querySelector("#number");
const convertBtn=document.querySelector("#convert-btn");
const output=document.querySelector("#output");
function doRoman(x) {
    let ans="";

    let thousand=Math.floor(x/1000); 
    for(let i=0;i<thousand;i++)
        ans+="M";
    x-=(thousand*1000);

    if(x>=900){
        x-=900;
        ans+="CM";
    }
    else{
        let fiveHundred = Math.floor(x/500);
        for(let i=0;i<fiveHundred;i++)
            ans+="D";
        x-=(fiveHundred*500);
    }

    let hundred=Math.floor(x/100);
    for(let i=0;i<hundred;i++)
        ans+="C";
    x-=(hundred*100);

    if(x>=90){
        x-=90;
        ans+="XC";
    }
    else{
        let fifty = Math.floor(x/50);
        for(let i=0;i<fifty;i++)
            ans+="L";
        x-=(fifty*50);
    }

    if(x>=40){
        x-=40;
        ans+="XL";
    }
    else{
        let tens = Math.floor(x/10);
        for(let i=0;i<tens;i++)
            ans+="X";
        x-=(tens*10);
    }

    if(x===9){
        ans+="IX";
        x-=9;
    }
    else{
        let five = Math.floor(x/5);
        for(let i=0;i<five;i++)
            ans+="V";
        x-=(five*5);
    }
    
    if(x===4){
        x-=4;
        ans+="IV";
    }
    else{
        for(let i=0;i<x;i++)
            ans+="I";
    }

    return ans;
}
function showOutput(currentNumber)
{
    if(!currentNumber){
        output.innerHTML=`Please enter a valid number`;
        output.classList.add("wrongBox");
        output.classList.remove("hidden");
    }
    else if(currentNumber<=0){
        output.innerHTML=`Please enter a number greater than or equal to 1`;
        output.classList.add("wrongBox");
        output.classList.remove("hidden");
    }
    else if(currentNumber>9999){
        output.innerHTML=`Please enter a number less than or equal to 9999`;
        output.classList.add("wrongBox");
        output.classList.remove("hidden");
    }
    else{
        const roman=doRoman(currentNumber);
        output.innerHTML=`${roman}`;
        output.classList.add("rightBox");
        output.classList.remove("hidden");
    }

}
let state=0;
number.addEventListener("keyup", e => {
    if(state)
        convertBtn.click();
});
convertBtn.addEventListener("click", () => {
    output.classList.add("hidden");
    output.classList.remove("wrongBox");
    output.classList.remove("rightBox");
    showOutput(Number(number.value));
    state=1;
});