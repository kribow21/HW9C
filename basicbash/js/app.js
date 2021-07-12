//created array for tweets, each line is a single tweet;
var tweets = ["My favorite colour is purple.",
"Going on a trip to Calgary, see you in 3 days!",
"I got a puppy today it's name is Luna, she's a corgi.",
"Wow, school is tough right now but im trying to power through it. All the support is appreciated.",
"Looking forward to roadtripping and visiting my best friend in Whitecourt AB.",
"Yoga class is the only thing keeping me from not going crazy.",
"Can't wait to see my favourite band in September!",
"Looking forward to the day I can book a vacation and be on an airplane!",
"People with air conditioning don't appreciate it enough! What i would do for one of those...", 
"I Can't beleive its already July, this summer is flying by."];


var post = [
    {
        tweet : "My favorite colour is purple.",
        username : "purpleLover",
        created_at : "05-01-2010",
        age : 14
    }
    ,{
        tweet : "Going on a trip to Calgary, see you in 3 days!",
        username : "lovetotravel",
        created_at : "01-06-2011",
        age : 19
    }
    ,{
        tweet : "I got a puppy today it's name is Luna, she's a corgi.",
        username : "adorablelycute",
        created_at : "05-01-21",
        age : 20
    }
    ,{
        tweet : "Wow, school is tough right now but im trying to power through it. All the support is appreciated.",
        username : "positivethinker",
        created_at : "05-20-21",
        age : 16
    }
];


function tweeter(object){
    var a = object.age;
    if (a >= 18){
        return true;
    }else{
        return false;
    }
}
var answer = post.filter(tweeter)
console.log(answer[1].tweet);
var k = answer[1].tweet;
var r = [];
r.push(k);
r.push("hello sunshine");
console.log(r);




// var a =
//     {
//         tweet : "My favorite colour is purple.",
//         username : "purpleLover",
//         created_at : "05-01-2010",
//         age : 18
//     }




// function temp(object){
//     var b = object.age
//     if (b >= 18){
//         return true;
//     }else{
//         return false;
//     }
    
// }

// console.log(temp(a));

















// var counter = 0;
// //set up while loop;
// while (counter <=9){
//     console.log(tweets[counter]);
//     counter = counter +1;
// }

