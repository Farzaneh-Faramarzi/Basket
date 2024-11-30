//var str1 = "sabz"
//var str2 = "java script"

/*var num1 = 12
var num2 = 3
var num3 = 4*/

//alert(num3*num2==num1)
/*if (num2*num3 === 10 || num1 * num3 === 11){
    alert("ya 10 ya 11")
}
else if(num2 * num3 === 13 || num1*num3 === 15){

    alert("ya13ya15")

}
else if(num2 * num3 === 14|| num2*num3===12){
    alert("ya14ya12")
}*/
    
//////////////////////////////////////////////////زوج و فرد بودن

  /* var userNum = prompt("adad vard kon")
      if ( userNum % 2 == 0)
        {
        alert("zoj")
      }
else 
{
    alert("fard")}*/
    /////////////////////////////////////////////میانگین 3 عدد

/*var userFirstNum =Number( prompt("enter First number:"))
var userSecondNum = Number(prompt("enter Second number:"))
var userThirdNum = Number(prompt("enter Third number:"))

var average = (userFirstNum + userSecondNum + userThirdNum ) / 3

alert(average)*/
/////////////////////////////////////////////////////

/*var userBirth = prompt ("Enter your birthday:")محاسبه ی سن کاربر 

var userAge = 1403 - userBirth

//alert("your age is :" + userAge )

if (isNaN(userAge)){
    alert ("معتبر نیست")
}
else {
alert ("your age is:" + userAge)*/
/////////////////////////////////////////////تبدیل دقیقه به ساعت

/*var minutes = prompt("enter your time (min)")

var minutesToHours = minutes / 60 

if(isNaN(minutesToHours)){
    alert("معتبر نیست")
}
else {
    alert(minutesToHours + "Hours")
}
//alert (minutesToHours + "Hours")*/
/////////////////////////////////////////////////////اجازه ی ورود

/*var userAge = prompt ("سن خود را وارد کنید")
var userSex = prompt ("جنسیت خود را وارد کنید")

if(userSex=== 'femal' || userAge < 18){
    alert("mojaz be vrood nisti")
}
else {
    alert("mojaz be voorood hasti")}*/
//////////////////////////////////////////////////////////

//var num1 = 3
//var num2 = 4
//var num3 = num1 * num2

/*if (num2 * num3 === 12) { 
    alert("are")
}
else {
    alert("na")*/
////////////////////

//num2 * num3 === 12 ? alert("yes") : alert("no")
 ///////////////////////////

 /*switch(num3) {

    case 10 :
        alert("10")
        break;
    case 11 :
    alert("11") 
    break ; 
    case 12 :
    alert("12") 
    break;
    case 13 :
        alert("13")
        break;
        default :
        alert("noooooo")
 }*/
//////////////////////////////////////////////تعیین سطح 
/*var userScore = prompt("enter your score please")
var userNnmberScore = Number(userScore)
 switch (userScore){
    case "18" :
    case '19' :
    case '20' :
        alert("A") 
        break;   
    case '15' :
    case '16' :  
    case '17' :
        alert ("B")   
        break;
        case' 12' : 
        case '13 ':
        case '14' :   
        alert ("c") 
        break ;
        default : 
        alert ("مشروط")
 }*/
///////////////////////////////////////////////////////////////////////
/*function showValue(){
    var num1 = 2
    var num2 = 8
    var resultNumber = num1 + num2
    alert ("resulte:" + resultNumber)
}
showValue()
showValue()
showValue()*/
/////////////////////////////////////////
/*var showValue = function () { 
    var num1 = 2
    var num2 = 8
    var resultNumber = num1 + num2
    alert ("result:" + resultNumber)
}
showValue()
///////////////////////////////////////////////////
var seyHi = function (){

    alert("Hi")
}
seyHi()*/
//////////////////////////////////////////

/*function showText (userText) {
 alert("Your Parameter :" + userText)
}
showText("farzanehhhhhhh")*/
//////////////////////////////////////////////////////
/*function showTwoNumbers (first  , second) {
    alert("first:" + first)
    alert("second:" + second)
}
 showTwoNumbers (34 , 18)*/
 //////////////////////////////////////////////
 /*function isEvenOrOdd (number){
    if (number % 2 == 0 ){
        alert(number + " is even")}
        else
      alert (number +" is odd")
     }

 isEvenOrOdd (13)
 isEvenOrOdd (356)
 isEvenOrOdd(3456)*/
 ////////////////////////////////////////////////
 /*function averageCalculator (num1 , num2, num3){
    var sum = num1 + num2 + num3
   var average = sum / 3
   alert ("average is: " + average)

 }
 averageCalculator (3 , 3 , 3)
 averageCalculator (54 , 98 , 28)*/

/////////////////////////////////////////////////

/*function sumValue (num1= 1 , num2= 2){
   /* if (num1 == undefined){
        num1=1
    }

    if (num2 == undefined){
        num2= 2
    }*/
/*var result = num1+num2
alert("resalt  is: " + result)

sumValue()*/
////////////////////////////////////////////////////
/*function sumNumbers (num1 , num2){
    var result = num1 + num2
    //alert ("result =" + result)
    return result
}
var sumResult = sumNumbers (2 , 8)
alert("sumResult="+ sumResult)*/
/////////////////////////////////////////////////////////
/*var number1 = prompt("enter first number:")
var number2 = prompt("enter second number:")
function showPower (num1,num2){
    return num1**num2

}
var powerResult=showPower(number1,number2)
alert("power result =" + powerResult)*/
///////////////////////////////////////////////////////////////
/*var userName = "farzaneh"
var firstIndex = userName[0]
alert(firstIndex)*/
//////////////////////////////////////////////////////////
/*var userName = "Farzaneh"
alert(userName.length)*/
//////////////////////////////////////////////////////////
/*var userName = prompt("Enter your userName:")
var password = prompt("Enter your password:")
if(userName.length < 3 || password.length < 8 ){
    alert ("یوزرنیم حداقل باید 3 کاراکتر و پسورد حداقل باید 8 کاراکتر داشته باشد")
}
else {
    alert ("ثبت نام شما با موفقیت انجام شد")
}*/
////////////////////////////////////////////////////////
//var text = " I Love Java Script  "
//console.log(text.charAt(3))
//console.log (text. charCodeAt(0))
//console.log (text + " & you")
//console.log(text.concat(" & you"))
//console.log(text.trim())
//console.log(text.toLocaleLowerCase ())
//console.log(text.toUpperCase())
//console.log(text.search("Java"))
//console.log(text.indexOf("I"))
//console.log(text.includes("Love"))
////////////////////////////////////////////////////
/*var userName = prompt("Enter your username:" , "")
if(userName.toLocaleLowerCase() == "ali") {
    alert("Ok")
}
else{
    alert ("No")
}*/
////////////////////////////////////////////////
//var text = "I Love JavaScript & React"
//console.log(text.slice(7 , 17))
//console.log(text.substr(7 , 10))
//console.log(text.substring(7 , 17))
///////////////////////////////////////////////////
/*console.log (Math.PI)
console.log(Math.pow(2,4))
console.log(Math.sqrt(49))
console.log(Math.abs(-34))
console.log(Math.min(1,8,5,9))
console.log(Math.max(7,6,1,9,0))
console.log(Math.floor(12.9))
console.log(Math.trunc(12.9))
console.log(Math.round(12.9))
console.log(Math.ceil(12.1))
console.log(Math.random())*/
//////////////////////////////////////////////////////////////
/*var firstRandomNumber = Math.random()*100000
var finalCaptchaCode = Math.floor(firstRandomNumber)
console.log("Your Captcha Code:", finalCaptchaCode )*/
///////////////////////////////////////////////////////////////
/*var number = 10
//number += 5 //number = number + 5 
//number -= 4 //number = number - 4
//number *= 3 //number = number *3
//number /= 2 //number= number/2
//number **= 2//number= number ** 2
//number++
//++number
//number--
//--number
console.log(number)*/
//////////////////////////////////////////////////
/*var number1 = 0
 //++number1
 //number1++
//var number2 = number1++
//var number2 = ++number1
//var number2 = number1--
//var number2 = --number1
 console.log ("number1:", number1)
 console.log ("number2:", number2)*/
 ////////////////////////////////////////////////////
 /*for(var i = 0; i<5; i++ ){
//alert("Yesssss")
console.log(i , "yessss")
 }*/
////////////////////////////////////////
/*var username = "Amir Hossein"
//console.log(username[0])
for(var i = 0; i<username.length ; i++){
    console.log(i, "=>", username[i])
}*/
////////////////////////////////////////
/*for(var i = 1; i<100; i+=2 ){
    console.log(i)
}*/
///////////////////////////////////////// Trace
/*var name = "Amir Hossein"
for(var i = 0 ; i<name.length; i++){

    console.log(name[i])
}*/
///////////////////////////////////سبد خرید 
/*var allPrices = 0 
for(var i=0; i<5; i++ ){
    allPrices = allPrices+ Number(prompt("Enter The Prodoct Price:"))
     
}
alert ("All Price Of Your Basket: " + allPrices)*/
//////////////////////////////////////////////////////////میانگین با حلقه فور
/*var userNumber = 0
var sum = 0
for(var i= 0 ; i<5 ; i++){
   userNumber = Number(prompt("Enter the " + (i+1) + " Number: "))
   sum=sum + userNumber
   
}
console.log("Average:" + sum/5)*/

//////////////////////////////////////////////////////////////////////
/*for(var i =0 ; i<10; i++){
    var b = [i]
    console.log(b);
    
}*/
/////////////////////////////////////////////////
/*var username = prompt("enter your name");
for (var i=0 ;i<username.length ;i++ ){
    console.log( i ,  "=>" ,  username [i]);
    
}*/
////////////////////////////////////////////////
/*var num = 'FARZANE';
num =+ num;
alert(typeof num)*/
///////////////////////////////////////////////
/*var username = Number (prompt("enter your name :"))
//username =+ username
console.log(typeof username);*/
////////////////////////////////////////////////////////محاسبه مجموع ارقام عدد ورودی
/*var userNumber = Number(prompt("enter the number:" , 0)) //142
var sum = 0
for(var i = 0 ;(userNumber/10) !=0 ; i++){
   sum = sum + (userNumber %10)
 userNumber = Math.floor(userNumber/10)

}
console.log("sum of digits:", sum)*/
////////////////////////////////////////////////////////////محاسبه تعداد ارقام عدد ورودی
/*var userNumber = prompt("enter your number:" , 0)  //142
var counter = 0 
for(var i = 0 ; userNumber / 10 !=0 ; i++){
    counter ++
    console.log(i+1)
    userNumber = Math.floor(userNumber/10)
    
}*/
//////////////////////////////////////////////////////////////حلقه while
/*var i = 0
while(i<3){
console.log(i)
i++
}*/
/////////////////////////////////////////////////////////////////زوج و فرد با while
/*var i = 0
while(i<100){
    console.log(i)
    i= i+2
}*/
/////////////////////////////////////////////////////////////میانگین
/*var userNumber= null
var i = 0
var sum = 0
while(i < 3){
    userNumber= Number(prompt("enter the number:"))
    sum = sum + userNumber
    i++
}alert("avearg:" + (sum/3))*/
/////////////////////////////////////////////////////  مجموع ارقام و تعداد ارقام عدد ورودی
/*var userNumber=Number(prompt("enter the number:" , 0 ))
var sum = 0
var counter = 0
 while(userNumber/10 !=0){
        sum = sum + (userNumber%10)
        counter++
userNumber =Math.floor(userNumber / 10)
}
alert('sum of digits:' + sum + "\n" + "count of digits:" + counter)*/
//////////////////////////////////////////////////////////////اعداد زوج بین دو ورودی
/*var userFirstNumber=Number(prompt("enter the first number:" , 0 ))
var userSecondNumber=Number(prompt("enter the second number:" , 0 ))
if(userFirstNumber%2==0){
while(userFirstNumber<userSecondNumber){
console.log(userFirstNumber);
userFirstNumber = userFirstNumber +2;
}
}
else{
    userFirstNumber = userFirstNumber+1;
    while(userFirstNumber<userSecondNumber){
        console.log(userFirstNumber);
        userFirstNumber = userFirstNumber +2
        }
}*/
//////////////////////////////////////////////////////////////////////محاسبه میانگین اعداد به تعداد دلخواه کاربر
/*var userNumber = 0
var sum = 0
var counter = 0
while(userNumber != -1){
    sum= sum + userNumber
userNumber= Number(prompt('enter the number: \n if you dont have a number , enter -1'))
if (userNumber!= -1){
counter++
}
   
}
console.log("Average:" , sum / counter)*/
////////////////////////////////////////////////////////////////////////////
/*var i = 0
do { 
    console.log(i)
    i++

} while(i<5)*/
///////////////////////////////////////////////////////////////////توان 
/*var userFirstNumber=Number(prompt("enter the first number:" , 1 ))
var userSecondNumber=Number(prompt("enter the second number:" , 1))
var power = 1
for(var i = 0 ; i<userSecondNumber; i++){
    power=power*userFirstNumber

}
alert("power:" + power)*/
/////////////////////////////////////////////////////////////////آرایه
/*var students = ["Farzaneh" , "Zahra" , "Saba" , 10 , true]
console.log(students)
console.log(students.length)
console.log(students[2])
console.log(students[5])*///ایندکس 5 وجود ندارد پس ان دیفایند
//////////////////////////////////////////////////////////////////متد های آرایه
/*var scores = [11,19,20,16,17]
console.log(scores)
scores[5]= 13
//console.log(scores)
scores.push(14,17,10)
console.log(scores)
scores.pop()
console.log(scores)
scores.shift()
console.log(scores)
scores.unshift(15 , 18)
console.log(scores)*/
/////////////////////////////////////////////////////////////////اعدادی را به تعداد دلخواه از کاربر گرفته و داخل آرایه ذخیره کن و میانگین بگیر
/*var userNumbers = []//[12,89,13,65,21,90]
var userNumber = 0 
sum = 0
while(userNumber != -1){
    userNumber = Number(prompt("Enter the number: \n Enter -1 if you dont have any number"))
    if(userNumber != -1){
        userNumbers.push(userNumber)
    }
}
for(var i = 0 ; i<userNumbers.length ; i++){
    sum = sum+userNumbers[i]
}
console.log(userNumbers)
console.log("Average: ",sum / userNumbers.length)*/
//////////////////////////////////////////////////////////////////////Object
/*var user = {name:"Farzaneh" , 
    family:"Faramarzi", 
    age: 20 , 
    phone:849}

console.log(user)
console.log(user["family"])
console.log(user.name)//console.log(user["name"])*/
/*var users = [
    {id: 1 , name:"Farzaneh", age:12},
    {id: 2 , name:"Zahra", age:13}
];
console.log(users)
console.log(users[0])
console.log(users[0].name)*/
////////////////////////////////////////////////////پیاده سازی سامانه ثبت نام
/*var users = [
    {id: 1 , name:"Amin" , family: "Rad" , age:21 , email:"ce010101@gmail.com"},
    {id: 2 , name:"Amir" , family: "Rezaei" , age:19 , email:"amin@gmail.com"},
    {id: 3 , name:"Ali" , family: "Hosseyni" , age:10 , email:"ali@gmail.com"}
]
var userName  = prompt("Enter your name:")
var userFamily  = prompt("Enter your family:")
var userAge = prompt("Enter your age:")
var userEmail  = prompt("Enter your email:")

if(userName.length<3 || userName.length>10){
    alert("نام شما حداقل 3 و حداکثر 10 کاراکتر میتواند داشته باشد")
}else if(userFamily.length<3 || userFamily.length>15){
    alert("نام خانوادگی  شما حداقل 3 و حداکثر 15 کاراکتر میتواند داشته باشد")
}else if (isNaN(userAge) || userAge.length> 3){
    alert("لطفا سن را بدرستی وارد کنید")
}else{
    var newUser = {
        id : 4 , 
        name : userName , 
        family : userFamily , 
        age : userAge , 
        email: userEmail

    }
    users.push(newUser)
    console.log(users)
}*/
///////////////////////////////////////////////////////////////////////////////////حلقه forEach
/*var users = [
    "ali" , 
    "amin",
    "amir",
    "babak",
    "sasan"
]
users.forEach(function(user){
   // console.log(user)
})

var scores = [18,19,17,20,12]
scores.forEach(function(number){
    console.log(number*2)
})*/
////////////////////////////////////////////////////////////////////////////////نمایش  لیست کاربران
/*var usersArray = [ 
    {id:1 ,name:'amin', family:'Rad', age:20},
    {id:2, name: 'amir' , family:"mohammadi" , age:19},
    {id:3 , name:'hasan', family:'faramarzi', age:18}
]
usersArray.forEach(function(user){
    console.log("name: " + user.name + '  Family: ' + user.family)
})*////////////////////////////////////////////////////////////////////////  includes شامل شدن
/*var userName = prompt("Enter your name:  ")

var users =[
    'Ali',
    'Amin',
    'Amir',
    'Babak'
]
var isLogin = users.includes(userName)
if(isLogin== true){
    console.log("به پنل خود خوش آمدید")
}
else{
    console.log("ابتدا باید ثبت نام انجام دهید")
}*/
//console.log(users.includes('Babak'))
//var scores = [12,20,13,18,15]
//console.log(scores.includes(20 , 2))
/////////////////////////////////////////////////////////////////////متد some
/*var userData =[
    {id: 1 , name:"Ali" , age:19 } ,
    {id: 2 , name:"Amin" , age:21 } ,
    {id: 3 , name:"Amir" , age:18 } 
]
console.log(userData.includes({id: 1 , name:"Ali" , age:19 }))
var isInUsers = userData.some(function(user){
    //console.log(user)

    return user.name =='Amin'
})

console.log(isInUsers)*/
/////////////////////////////////////////////////////////////فروشگاه آنلاین خرید محصول
/*var allProducts = [
    {id:1 , name:"Laptop", price:17000000},
    {id:2 , name:"Phone", price:7000000},
    {id:3 , name:"Pen", price:12000},
    {id:4 , name:"Pencil", price:9000},
    {id:5 , name:"Eraser", price:6000},
    {id:6 , name:"Milk", price:35000}
]
var userBasket = [
    {id:1 , name:"Pen", price:12000},
    {id:2 , name:"Pencil", price:9000}

]
var userProduct = prompt("Enter the name of product: ")//'Phone'
var requestProduct ;
var isInShop = allProducts.some(function(product){
    if(product.name==userProduct){
        requestProduct = product
        return true
    }
    return product.name==userProduct
})
if(isInShop==true){
    var neweProduct = {
        id:3 ,
        name:requestProduct.name  , 
        price:requestProduct.price
     }
    userBasket.push(neweProduct)
    var sum = 0
    userBasket.forEach(function(product){
        sum = sum + product.price
    })
 console.log(userBasket)
alert("Total Price: " + sum)
}
else{
    console.log("محصول مورد نظر در فروشگاه ما  موجود نیست")
}*///////////////////////////////////////////////////////////متد every
/*var ages = [19, 20 , 28, 32 , 11]
var isAll = ages.every(function(age){
    return age>18
})
console.log(isAll)*/
////////////////////////////////////////تماس کنفرانسی
 /*var groupUsers = [
    {id:1  , name:"Ali"   , age:19  },
    {id:2  , name:"Amin"   , age:22  },
    {id:3  , name:"Amir"  , age:21  },
    {id:4  , name:"Farzaneh"   , age:30  },
    {id:5  , name:"Zahra"   , age:19  },
    {id:6  , name:"Saba"   , age:27  },
    {id:7  , name:"Mobina"   , age:25  },
    {id:8  , name:"Narges"   , age:27  },
    {id:9  , name:"Kosar"   , age:26  },
    {id:10 , name:"Fatemeh"   , age:19  },
 ]
 var isAll = groupUsers.every(function(user){
 return user.age > 18
}) 

if (isAll==true){
    console.log("شما میتواتید تماس کنفرانسی خود را استارت بزنید")
}
else{
    console.log(" شما مجاز به ایجاد تماس کنفرانسی نیستید")
}*////////////////////////////////////////////////////////متد splice
/*var numbers = [10,18,19,22,20,90,87,54,32]
console.log(numbers)
//میخواهیم 19 را حذف کنیم
//numbers.splice(2,1)
numbers.splice(2,4,5,6,7)
console.log(numbers)*/
/////////////////////////////////////////////////////////////متد findIndex
/*var users= ["Farzaneh", "Zahra", "Saba","Fati","Mobina"]//میخواهیم ایندکس فاطی را پیدا بکنیم
var userIndex=users.findIndex(function(user){
    //console.log(user)
    return user=="Fati"
})
console . log(userIndex)*///////////////////////////////////
/*var users = [
    {id:1, name:"Ali" ,age:19},
    {id:2, name:"Amin" ,age:21},
    {id:3, name:"Amir" ,age:25},
    {id:4, name:"Babak" ,age:20}
]
var userIndex = users.findIndex(function(user){
    return user.name=="Amin"
})
console.log("Index:" , userIndex)*/
///////////////////////////////////////////////////////////////فروشگاه آنلاین پیشرفته
/*var allProducts = [
    {id:1,name:"Laptop",price:17000000},
    {id:2,name:"Phone",price:7000000},
    {id:3,name:"Pen",price:12000},
    {id:4,name:"Pencile",price:9000},
    {id:5,name:"Milk",price:35000},
    {id:6,name:"Cable",price:55000},
    {id:7,name:"Water",price:6000},
    {id:8,name:"Soft drink",price:13000}
]
var userBasket = [
    {id:1,name:"Milk",price:35000},
    {id:2,name:"Water",price:6000}
]
var userRequest = prompt("1 = Add Product \n2 = Remove Product")
if(userRequest== '1'){
    var userProductName = prompt("Enter Your Product Name: ");
    var productData
    var isInShop = allProducts.some(function(product){
        if(product.name==userProductName){
            productData=product
            return true
         }
        return product.name==userProductName;
    });
    if(isInShop==true){
        var newProduct = {
            id:3,
            name:productData.name,
            price:productData.price
        }
        userBasket.push(newProduct)
        console.log("Basket:" , userBasket)
     } else{
        alert(" همچین محصولی در فروشگاه ما موجود نمی باشد")
     }
    //alert("Add")
}else if(userRequest=='2'){

    //alert("Remove")

    var userProductName = prompt("Enter Your Product Name: ")
    var productIndex = userBasket.findIndex(function(product){
        return product.name == userProductName;
    });
    userBasket.splice(productIndex, 1)
    console.log("Basket: " , userBasket)

} else {
    alert("لطفا گزینه صحیح را وارد نمایید")
}*/
////////////////////////////////////////////////////////////////////////////////////متد map
/*var scores = [2,9,6,4,8,10]
var scoresPower = scores.map(function(score){
    return score**2
})
console.log(scoresPower)*//////////////////////////////////////////////////////////متد filter
/*var scores = [18,19,16,20] //میخواهیم نمرات بالای 18 را انتخاب کنیم
var filterScores = scores.filter(function(score){
    return score > 18
})
console.log(filterScores)*///////////////////////////////////////////////////
/*var userName = ["Ali", "Amin","Amir","Roz","Babak"]

var filteredUserNames = userName.filter(function(userName){
    return userName.length > 3
})
console.log(filteredUserNames)*/
///////////////////////////////////////////////////////////////////////////////هزینه پست طبق شرایط خاص
/*var userBasket = [
    {id:1 , name:"Laptop" , price:50000000},
    {id:2 , name:"Phone" , price:3000000},
    {id:3 , name:"Milk" , price:35000},
    {id:4 , name:"Water" , price:6000},
    {id:5 , name:"coolpad" , price:400000},
    {id:6 , name:"pencil" , price:9000}    
]
var filterProducs = userBasket.filter(function(product){
    return product.price < 100000
}) 
var postCost = filterProducs.length * 1000

var sum = 0
userBasket.forEach(function(product){
    sum = sum + product.price
})
var totalPrice = sum + postCost

console.log("Total Price: " , totalPrice);*/
////////////////////////////////////////////////////////////////////
/*var scores = [19,51,90,76,54,32,51]
var number = 19
var userName = "Amin/Amir/Ali"
console.log(Array.isArray(scores))
console.log(scores.indexOf(51));
console.log(scores.lastIndexOf(51));
console.log(scores.slice(2,5));
console.log(scores.join("/"));
console.log(scores.reverse());
console.log(userName.split('/'));*/
/////////////////////////////////////////////////////////////////تعیین خوانایی متن از سمت چپ و راست
/*var word = prompt("Enter The Word: ") //'amin' => 'nima'
var charactersArray = word.split('')
var reverseCharacters = charactersArray.reverse()
var revsrseWord = reverseCharacters.join('')  
 if(word==revsrseWord){
    alert("از هر دو جهت به یک شکل خوانده میشود ")
 }
 else{
alert("از هر دو طرف یه یک شکل خوانده نمیشود")}*/
/*____________________________________________________________________________________________________________________*/

 




