// Codility - Lesson 7
// Stacks and Queues

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)   
    let specialCases = true;
    let stack = [];

    for(let i = 0; i < S.length; i++){
        if(i==0){
            if(S[i] === ')'){
                specialCases = false;
                break;
            }
            stack.push(S[i]);
        }else{
            if( isProperlyNested(stack[stack.length - 1], S[i]) ){
                stack.pop();
            }else{      
                if(S[i] === ')'){
                    specialCases = false;
                    break;
                }

                stack.push(S[i]);
            }
        }     
    }
    
    if(stack.length === 0 && specialCases){
        return 1;
    }else return 0;
        
}

function isProperlyNested(lastStackValue, newValue){
    if( lastStackValue === '(' && newValue === ')' ){
        return true;
    }else{
        return false;
    } 
}