//from assignment C .created array for tweets, each line is a single tweet;
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

//loop from assignment C

// var counter = 0;
// //set up while loop;
// while (counter <=9){
//     console.log(tweets[counter]);
//     counter = counter +1;
// }

//For assignment E : Array of objects with tweet,username,date,age.
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
        age : 15
    }
    ,{
        tweet : "Wow, school is tough right now but im trying to power through it. All the support is appreciated.",
        username : "positivethinker",
        created_at : "05-20-21",
        age : 18
    }
    ,{
        tweet : "Looking forward to roadtripping and visiting my best friend in Whitecourt AB.",
        username : "followyourheart",
        created_at : "08-01-2021",
        age : 15
    }
    ,{
        tweet : "Yoga class is the only thing keeping me from not going crazy.",
        username : "calminpeace",
        created_at : "15-03-2020",
        age : 24
    }    ,{
        tweet : "Can't wait to see my favourite band in September!",
        username : "musicismylife",
        created_at : "08-10-2018",
        age : 19
    }
    ,{
        tweet : "Looking forward to the day I can book a vacation and be on an airplane!",
        username : "lisaamber",
        created_at : "01-01-2021",
        age : 17
    }
    ,{
        tweet : "People with air conditioning don't appreciate it enough! What i would do for one of those...", 
        username : "victordale",
        created_at : "16-08-2021",
        age : 26
    }
    ,{
        tweet : "I Can't beleive its already July, this summer is flying by.",
        username : "housewifie",
        created_at : "01-07-2020",
        age : 28
    }
];

//function to filter posts whose user was over >=18
function tweeter(object){
    var a = object.age;
    if (a >= 18){
        return true;
    }else{
        return false;
    }
}

//calling the function to filter
var answer = post.filter(tweeter);

//making a loop to go through the filters results and collect their tweets into a new array
var array = [];
var length = answer.length;

for (var counter =0; counter < length; counter++){
    var collected = answer[counter].tweet;
    array.push(collected);
}
// console.log(array);