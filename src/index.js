const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
let string='';
for(let i = 0; i < expr.length; i++){
    if (i%10==0 && i!=0){
        string+=' ';
    }

    if(expr[i]=='*' && expr[i+9]=='*'){
        string+="*";
        i+=9;
        continue;
    }
    else if(expr[i]=='1' && expr[i+1]=='1'){
        string+='-';
        i++;
        continue;
    }
    else if(expr[i]=='1' && expr[i+1]=='0'){
        string+='.';
        i++;
        continue;
    }
    else if(expr[i] == '0'){
        string+='';
    }
}

let answer = '';
let arr = string.split(' ');

for(let i=0;i<arr.length;i++){
    for(var key in MORSE_TABLE){
        if(arr[i] == key){
            answer+=MORSE_TABLE[key];
        }
    }
    if(arr[i] == "*"){answer+=" ";};
}
return answer;
}

module.exports = {
    decode
}