let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
for(let i=1;i<$numbers.length;i++){
    if($numbers[i]%10==0 && $numbers[i]!==0)
        console.log($numbers[i]);
}