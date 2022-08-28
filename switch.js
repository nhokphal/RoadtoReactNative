 /// when to use if or switch???


 var score = 50;

if(score > 50)
{
    console.log("you passed")
}
else{
    console.log("you not pass the test")
}

/// as you see not, not many condition

var place = 'first'
if(place == 'first')
{
    console.log("gold")
}
else if(place == 'second')
{
    console.log("silver")
}


/// use switch to handle many conditional tastks

var scoreGet = "third";

switch (scoreGet)
{
    case "first":
        console.log("gold")
        break;
    case "second":
        console.log("sivler")
        break;
    case "third":
        console.log("bronze1")
        break;
    case "fourth":
        console.log("bronze1")
        break;
    default:
        console.log("enter correct number");
}