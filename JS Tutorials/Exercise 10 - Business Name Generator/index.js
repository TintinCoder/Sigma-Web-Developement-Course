let rand = (Math.random()*100).toFixed(100)

let first, second, third;
let first1, second1, third1;
let first2, second2, third2;

if(rand > 0 && rand <= 33){
    first = "Crazy"
    second = " Garments"
    third = " Store"

    console.log(first.concat(second).concat(third))
} else if(rand > 33 && rand<=66){
    first1 = "Amazing"
    second1 = " Gaming"
    third1 = " Palace"

    console.log(first1.concat(second1).concat(third1))
} else if(rand > 66 && rand <=100){
    first2 = "Brilliant"
    second2 = " Coffee"
    third2 = " House"

    console.log(first2.concat(second2).concat(third2))
}