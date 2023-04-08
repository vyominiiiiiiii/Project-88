var k=0;
var x=k+" is positive";
var y=k+" is negative";
var z=k+" is equal to 0";


if(k>0){
console.log(k+" is positive");
document.getElementById("greaterThan").innerHTML=x;
}
else if(k===0) {
console.log(k+" is equal to 0");
document.getElementById("greaterThan").innerHTML=z;
}

else{
console.log(k+" is negative")
document.getElementById("greaterThan").innerHTML=y;
}

var num1=9;
var num2=2;
var num3=17;

if(num1>num2){
   if(num1>num3){
    console.log(num1+" is greater than "+num2+ " and "+num3);
   }
   else{
    console.log(num3+" is greatest");
   }
}

else{
    if(num2>num3){
        console.log(num2+" is greater than "+num3);
    }

    else{
        console.log(num3+" is the greatest");
    }
}

