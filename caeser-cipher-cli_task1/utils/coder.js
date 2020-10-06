const alphabet = "abcdefghijklmnopqrstuvwxyz";
const letters = alphabet.split('')


const encoder = (str,s) => {
    let result = '';
    let shift = (s > 25 || s < 0) ? s % 26 : s

        for(let j=0; j<letters.length; j++){
            if(letters[j]===str){
                    if(j<=25 && (j+shift) <= 25 && (j+shift) >= 0) {
                    result += letters[j + shift];
                } else if ((j+shift) < 0 ) {
                    result += letters[j + (shift + 26)];
                } else {
                    result += letters[j + (shift - 26)];
                }
                
            } 
        }
return result;
}

const encodeAny = (str, number) => {
    let result = '';
   
    for(let i = 0; i < str.length; i++){
        if(/[a-zA-Z]+/g.test(str[i])){
            if(str[i] === str[i].toLowerCase()) {
                result +=encoder(str[i], number);
            } else if(str[i] === str[i].toUpperCase()) {
                let makeLower = str[i].toLowerCase();
                result += encoder(makeLower, number).toLocaleUpperCase();
            } 
        } else {
            result += str[i];
        }
    }
   
   return result;
}

module.exports = encodeAny;
