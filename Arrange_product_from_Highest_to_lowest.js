let array1=[
    {"name": "I Phone 13 Pro", "price": 899, "brand": "iphone", "rating": {"average": "4.2", "user_count": 200}, "discount": "20%"},
    {"name": "I Phone 7", "price": 399, "brand": "iphone", "rating": {"average": "3.9", "user_count": 600}, "discount": "0%"},
    {"name": "I Phone sr", "price": 599, "brand": "iphone", "rating": {"average": "4.24", "user_count": 450}, "discount": "20%"},
    {"name": "I Phone 12", "price": 599, "brand": "iphone", "rating": {"average": "4.3", "user_count": 167}, "discount": "14%"},
    {"name": "Samsung Note 10", "price": 699, "brand": "samsung", "rating": {"average": "3.2", "user_count": 154}, "discount": "0%"},
    {"name": "Samsung Note 11", "price": 799, "brand": "samsung", "rating": {"average": "4.7", "user_count": 312}, "discount": "5%"},
    {"name": "A52s", "price": 499, "brand": "samsung", "rating": {"average": "4.6", "user_count": 180}, "discount": "6%"},
    {"name": "A52s 5G", "price": 599, "brand": "samsung", "rating": {"average": "4.4", "user_count": 61}, "discount": "0%"},
    {"name": "I Phone 14", "price": 800, "brand": "iphone", "rating": {"average": "4.8", "user_count": 20}, "discount": "0%"},
    {"name": "I Phone 14 pro max", "price": 1200, "brand": "iphone", "rating": {"average": "5", "user_count": 1}, "discount": "50%"},
    {"name": "Xiaomi Poco M5", "price": 267, "brand": "xiaomi", "rating": {"average": "2.3", "user_count": 5}, "discount": "10%"},
    {"name": "Xiaomi A1", "price": 199, "brand": "xiaomi", "rating": {"average": "2.1", "user_count": 9}, "discount": "23%"},
    {"name": "Vivo Y75s", "price": 256, "brand": "vivo", "rating": {"average": "4.1", "user_count": 43}, "discount": "16%"},
    {"name": "Vivo iQOO 9T", "price": 476, "brand": "vivo", "rating": {"average": "4.5", "user_count": 134}, "discount": "20%"}
  ];
  let array2=[];
  for(let i=0;i<array1.length;i++){
    array2.push(array1[i].price);
  }
  array2.sort((a, b) => b-a);
  console.log(array2);
  for(let j=0;j<array2.length;j++){
    for(let i=0;i<array1.length;i++){
        if(array1[i].price==array2[j]){
            console.log(array1[i].name);
        }
  }
  
    
  }