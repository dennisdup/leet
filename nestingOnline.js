// Codility - Lesson 7
// Stacks and Queues

function solution(S) {
    let index = 0
    let stack = []
    
    while (index < S.length) {
        if (stack.length === 0) {
            if (S[index] === ')' ) {
                 return 0
            } else {
                stack.push(S[index])
            }
        }
        else if (is_properly_nested(stack[stack.length-1],S[index])) {
            stack.pop(stack[stack.length-1])
        } else {
            if (S[index] === ')' ) {
                return 0
            }
            else {
                stack.push(S[index])
            }
        }
        index ++
    }

    if (stack.length === 0) {
        return 1
    } else {
        return 0
    }
}

function is_properly_nested(a,b){
    if  (a === '(' && b === ')')  {
        return true
    }
    else {
        return false
    }
}