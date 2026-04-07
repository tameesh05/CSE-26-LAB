function checkPrime() {
    let num = parseInt(document.getElementById("number").value);
    let isPrime = true;

    if(num<=1){
        isPrime = false;
    }else{
        for(leti=2;i<num;i++) {
            if(num%i===0) {
                isPrime=false;
                break;
            } }
    }

    let result=document.getElementById("result");

    if(isPrime){
        result.innerText=num+"is a Prime Number";
        result.style.color="green";
    }else{
        result.innerText=num+"is NOT a Prime Number";
        result.style.color="red";
    }
}