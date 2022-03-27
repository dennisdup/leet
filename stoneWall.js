// Codility - Lesson 7
// Stacks and Queues

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    // console.log(H);
    let blocks = 0;
    let previousBlock = [];
    // If the same, share block
    // If greater, add Previous block
    // If smaller, end previous block

    for(let i = 0; i < H.length; i++ ){
        if(i == 0 ){
            blocks ++;
            previousBlock.push(H[i]);
        }else{

            if(H[i] == H[i-1] ){
                continue;    
            }
            
            if(H[i] > H[i-1]){

                if( previousBlock.indexOf(H[i]) !== -1 ){
                    continue;
                }

                blocks ++;
                previousBlock.push(H[i]);
            
                 
            }else{
                if(previousBlock.length === 0){
                    blocks ++;
                    previousBlock.push(H[i]);
                }else{
                    // Same block
                    if( previousBlock.indexOf(H[i]) !== -1 ){
                        continue;
                    }
                    // Check if block is smallest, if so, Clear previousblock
                    if(H[i] < Math.min.apply(Math, previousBlock)){
                        blocks ++;
                        previousBlock = [H[i]];
                    }else{
                        blocks ++;
                        previousBlock.push(H[i]);
                    }
                    
                }
            }

        }
        
    }

    return blocks;
}