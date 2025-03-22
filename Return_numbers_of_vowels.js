let string1="How are you";
let count=0;
let vowel=new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
for(let i=0;i<string1.length;i++){
    if(vowel.has(string1[i])){
        count++;
    }
}
console.log(count);
