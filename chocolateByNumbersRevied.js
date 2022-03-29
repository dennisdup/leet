// The strategy is to divide N by the greatest common divisor of N and M.

function solution(N, M) {
    return N / gcd(N, M);
}

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