let string1="How are you";
count=0;
for(let i=1;i<string1.length;i++){
    str=string1[i];
    if(str=='a'|| str=='A'||str=='E'||str=='e'||str=='i'||str=='I'||str=='i'||str=='o'||str=='O'||str=='u'||str=='U')
        count++;
}
console.log(count);