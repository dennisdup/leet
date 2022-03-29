// Euclidean algorithm - GCD

function gcd(a, b){
    if(a === 0 || b === 0){
        return 0;
    }

    if(a === b){
        return a;
    }

    if(a > b){
        let mod = a%b;
       
        if(mod === 0){            
            return b;
        }
        
        return gcd(b, mod);
    }else{
        let mod = b%a;
        
        if(mod === 0){           
            return a;
        }

        return gcd(a, b%a);
    }
  
}

console.log( gcd(196, 27) );
console.log( gcd(10, 4) );