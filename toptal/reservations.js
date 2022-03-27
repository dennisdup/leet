// Toptal
function solution(N, S){
    let seatMapper = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
  
    let result = 0;
    // Loop through the rows
    for(let i = 0; i< N; i++){
        // Loop through the 10 seats in row i to find out the reserved seats     
        
        let first = '';
        let second = '';
        let third = '';
        for(let seats = 0; seats < 10; seats ++){
            let seat = String (i+1)+seatMapper[seats];

            
            // Check first sequence
            if(seats > 0 && seats < 5){
                if(S.indexOf(seat) == -1 ){
                    first += seat;
                }               
            }      
            //  Check second sequence
            if(seats > 2 && seats < 7){
                if(S.indexOf(seat) == -1 ){
                    second += seat;
                }               
            } 
            //  Check third sequence
            if(seats > 4 && seats < 9){
                if(S.indexOf(seat) == -1 ){
                    third += seat;
                }               
            }             
        }
        let firstStatus = firstPair(i+1) === first;
        let secondStatus = secondPair(i+1) === second;
        let thirdStatus = thirdPair(i+1) === third;
        // Best scenario is first and third true
        if(firstStatus && thirdStatus){
            result += 2;
        }else{
            if(firstStatus | secondStatus | thirdStatus){
                result += 1;
            }
        }        
        
    }
    console.log(result);
}

function firstPair(i){
    const expected = i+'B'+i+'C'+i+'D'+i+'E';

    return expected;
}

function secondPair(i){
    const expected = i+'D'+i+'E'+i+'F'+i+'G';
   
    return expected;
}

function thirdPair(i){
    const expected = i+'F'+i+'G'+i+'H'+i+'J';

    return expected;
}

solution(4, "1A 2F 1C 3F");