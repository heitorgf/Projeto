var json = '{cities: ["São Paulo", "Rio de Janeiro" , "Belo Horizonte"]}';
console.log(json);
console.log(typeof json);

var obj = JSON.parse(json);
console.log(obj);
console.log(typeof obj);
