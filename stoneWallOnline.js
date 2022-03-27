// http://straightdeveloper.com/how-to-get-100-score-on-the-stonewall-exercise-on-codility/
function solution(H) {
    var blocks=1
    var previousWall=[H[0]]
    var previousHeight=H[0];
    for(var i=1;i<H.length;i++){
        var currentHeight=H[i];
        var heightDiff=currentHeight-previousHeight;
        if(heightDiff>0){ //current wall heighter
            blocks++
            previousHeight+=heightDiff
            previousWall.push(heightDiff)
        }else{
            while(previousHeight>currentHeight){
            var lastBlock=previousWall.pop()
            previousHeight-=lastBlock;
            }
            heightDiff=currentHeight-previousHeight;
            if(heightDiff>0){ //current wall is highter
            blocks++
            previousWall.push(heightDiff)
            previousHeight+=heightDiff
            }
        }
    }
    return blocks
}