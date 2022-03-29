// https://app.codility.com/programmers/lessons/12-euclidean_algorithm/ - ChocolatesByNumbers

function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    let results = 0;
    let X = 0;
    let visited = new Set();
    let checker = false;

    // (X+M)%N
    
    while(!checker){
        let next = (X +M) % N;
        if(visited.has(next)){
            checker = true;
        }else{
            visited.add(next);
            X = next;
            results++;
        }
    }    

    return results;
}