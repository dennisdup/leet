function cesar(str, amount) {
    let result = '';
    let alphabet = generateAlphabet();

    for (var i = 0; i < str.length; i++) {
        let position = alphabet
    }

    return result;

}

function generateAlphabet(){
    let alphabet = new Set();

    for(i = 65; i<=90; i++){
        alphabet.add( String.fromCharCode(i) );
    }
    console.log(alphabet);
    return alphabet;
}

console.log(cesar("aBCD*", 10))