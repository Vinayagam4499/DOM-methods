let total = ["10%","1000","5%","2000"]

let percentage = total.filter(function(items){
    return typeof items == 'string' && items.includes('%');
});

console.log(percentage)

let absolute = total.filter(function(items){
    return typeof items == 'number' && !isNaN(items);
});

console.log(absolute);


let total1 = ["10%", 1000, "5%", 2000];

let percents = total1.filter(item => item.toString().includes('%'));
let numbers = total1.filter(item => !item.toString().includes('%'));
console.log(percents, numbers);

let total = ["10%", 1000, "5%", 2000];
var percentage = total.filter(e => isNaN(e));
var absolute = total.filter(e => !isNaN(e));
console.log({percentage , absolute});


total.filter(function(element){
    return /^[0-9]+\%$/gi.test(element);
});


total.filter(function(element){
    return /^[0-9]+$/gi.test(element);
});