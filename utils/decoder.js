const alphabet = "abcdefghijklmnopqrstuvwxyz";
const letters = alphabet.split('')


const decoder = (str,s) => {
    let result = '';
    let shift = (s > 25 || s < 0) ? s % 26 : s

        for(let j=0; j<letters.length; j++){
            if(letters[j]===str){
                        if((j - shift) >= 0) {
                    result += letters[j - shift];
                } else if ((j - shift) < 0 ) {
                    result += letters[j + (26 - shift)];
                } else {
                    result += letters[j + (shift - 26)];
                }   
            } 
        }
return result;
}

const decodeAny = (str, number) => {
    let result = '';
   
    for(let i = 0; i < str.length; i++){
        if(/[a-zA-Z]+/g.test(str[i])){
            if(str[i] === str[i].toLowerCase()) {
                result +=decoder(str[i], number);
            } else if(str[i] === str[i].toUpperCase()) {
                let makeLower = str[i].toLowerCase();
                result += decoder(makeLower, number).toLocaleUpperCase();
            } 
        } else {
            result += str[i];
        }
    }
   
   return result;
}

module.exports = decodeAny;


