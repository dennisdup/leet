// https://coderbyte.com/editor/Tree%20Constructor:JavaScript

function TreeConstructor(strArr) { 

    // code goes here  
    let child = {};
    let parent = {};
    for (let i = 0; i < strArr.length; i++){
        let str = strArr[i].split('');
        str.pop();
        str.shift();
        let pair = str.join('').replace(", ", ",").split(',');
        child[pair[0]] = (child[pair[0]] || 0) + 1;
        if (child[pair[0]] > 1) return false;
        parent[pair[1]] = (parent[pair[1]] || 0) + 1;
        if (parent[pair[1]] > 2) return false;
    }
    return true; 
  }
     
  // keep this function call here 
  console.log(TreeConstructor(readline()));