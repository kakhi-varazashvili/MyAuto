// class Car{
//     constructor(mark,model,year){
//         this.mark = mark;
//         this.model = model;
//         this.year = year;
//     }
// }


// var arr = [
//   new Car("bmw","550",2010),
//   new Car("bmw","550",2012),
//   new Car("bmw","550",2015),
//   new Car("bmw","330",2010),
//   new Car("bmw","330",2011),
//   new Car("bmw","335",2020),
//   new Car("bmw","325",2010),
//   new Car("bmw","330",2011),
//   new Car("bmw","330",2012),
//   new Car("bmw","335",2021),
//   new Car("bmw","325",2010),
//   new Car("mercedes","c63",2020),
//   new Car("mercedes","c63",2012),
//   new Car("mercedes","c63",2015),
//   new Car("mercedes","c63",2021),
//   new Car("mercedes","e63",2020),
//   new Car("mercedes","e63",2020),
//   new Car("mercedes","e63",2012),
//   new Car("mercedes","e63",2009),
//   new Car("mercedes","e63",2012),
//   new Car("mercedes","e63",2013),
// ]


var arr = [
    {
        mark:"bmw",
        model:"550",
        category: "sedan",
        year:2010,
        price: 5000
    },
    {
        mark:"bmw",
        model:"550",
        category: "jeep",
        year:2012,
        price: 5000
    },
    {
        mark:"bmw",
        model:"550",
        category: "sedan",
        year:2011,
        price: 5000
    },
    {
        mark:"bmw",
        model:"550",
        category: "jeep",
        year:2012,
        price: 5000
    },
    {
        mark:"bmw",
        model:"330",
        category: "sedan",
        year:2014,
        price: 5000
    },
    {
        mark:"bmw",
        model:"330",
        category: "sedan",
        year:2012,
        price: 5000
    },
    {
        mark:"bmw",
        model:"320",
        category: "sedan",
        year:2011,
        price: 5000
    },
    {
        mark:"bmw",
        model:"320",
        category: "sedan",
        year:2012,
        price: 5000
    },
    {
        mark:"bmw",
        model:"320",
        category: "sedan",
        year:2011,
        price: 3000
    },
    {
        mark:"bmw",
        model:"330",
        category: "sedan",
        year:2015,
        price: 5000
    },
    {
        mark:"audi",
        model:"a4",
        category: "jeep",
        year: 2015,
        price: 5000
    },
    {
        mark:"audi",
        model:"a4",
        category: "jeep",
        year: 2015,
        price: 6000
    },
    {
        mark:"audi",
        model:"a4",
        category: "sedan",
        year: 2017,
        price: 5000
    },
    {
        mark:"audi",
        model:"a4",
        category: "sedan",
        year:2014,
        price: 4000
    },
    {
        mark:"audi",
        model:"a4",
        category: "jeep",
        year:2017,
        price: 7000
    },
    {
        mark:"audi",
        model:"a4",
        category: "sedan",
        year:2018,
        price: 7000
    },
    {
        mark:"audi",
        model:"a7",
        category: "jeep",
        year:2017,
        price: 5000
    },
    {
        mark:"audi",
        model:"a7",
        category: "sedan",
        year:2014,
        price: 5000
    },
    {
        mark:"audi",
        model:"a7",
        category: "jeep",
        year:2017,
        price: 5000
    },
    {
        mark:"audi",
        model:"a7",
        category: "sedan",
        year:2018,
        price: 5000
    },
]


var mark = document.querySelector(".mark")
var model = document.querySelector(".model")
var year = document.querySelector(".year")
var category = document.querySelector(".category")
var search = document.querySelector(".search")
var markarr = []
var modelarr = []
var categoryarr = []
for(var i of arr){
    markarr.push(i.mark)
}
for(var i of arr){
    modelarr.push(i.model)
}
for(var i of arr){
    categoryarr.push(i.category)
}
markarr = [...new Set(markarr)]
modelarr = [...new Set(modelarr)]
categoryarr = [...new Set(categoryarr)]
console.log(markarr,modelarr,categoryarr)

for(var i of markarr){
    var markopt = document.createElement('option')
    markopt.innerText = i
    mark.appendChild(markopt)
}
for(var i of categoryarr){
    var categoryopt = document.createElement('option')
    categoryopt.innerText = i
    category.appendChild(categoryopt)
}

mark.addEventListener("change",function(){
    model.innerHTML = " <option value=''>choose model</option>"
    var x = arr.filter(i=> i.mark == mark.value)
    x = [... new Set(x.map(i=> i.model))]
    for(var i of x){
        var modelopt = document.createElement('option')
        modelopt.innerText = i
        model.appendChild(modelopt)
    }

    // kv

})
var dt = new Date()
var newarr = arr
console.log(newarr)
for(var i = 1990; i <=dt.getFullYear(); i++){
    var yearopt = document.createElement('option')
    yearopt.innerText = i
    year.appendChild(yearopt)
}




search.addEventListener("click",function(){
   // console.log(arr.filter(i=> i.mark == mark.value && i.model == model.value && i.year == year.value))
   //console.log(arr.filter(i=> i.mark == mark.value))
   newarr = arr
   if(mark.value == ""){
    newarr = arr
   }
   else{
    newarr = newarr.filter(i=> i.mark == mark.value)
   }
   if(model.value != ""){
    newarr = newarr.filter(i=> i.model == model.value)
   }
   if(year.value !=""){
    newarr = newarr.filter(i=> i.year == year.value)
   }
   if(category.value !=""){
    newarr = newarr.filter(i=> i.category == category.value)
   }
   console.log(newarr)
})