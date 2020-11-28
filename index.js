var readlineSync = require("readline-sync")
const chalk = require('chalk');
console.log("Namaste ji! Unlock rewards or get a chance to win an Iphone if answered all the questions correctly.          *amazon sponsored protected by Quick Heal security");
console.log(chalk.underline.green("\nPlay Now!"));
var Name = readlineSync.question("\nEnter your name here: ");
console.log("\nNamaste! ",Name,", Answer all the coming questions correctly about the latest Iphone 12 pro in order to unlock rewards or a chance to win an Iphone!");

var score = 0;


function start(question,answer)
{
  var getanswer = readlineSync.question(question); //or answer
  if(getanswer===answer)
  {
    score++;
    console.log(chalk.bold.green("Noice! You got it right."));
  }
  else
  {
    console.log(chalk.bold.red("Oh! You missed this one."));
  }
  console.log("Your current score is ",score);
  console.log(chalk.bold.magenta("-----------------------------------"));
}
var startquiz = [{
  question : "What is the screen size (diagonally in inches) ?\na. 6.4\nb. 6.3\nc. 6.2\nd. 6.1\n",
  answer: "d"
},
{
  question: "What is the weight of the device in ounces (iphone 12 pro)?\na. 6.50\nb. 6.60\nc. 6.70\nd. 6.80\n",
  answer: "a"
},
{
  question : "What is name of the chip?\na. A11\nb. A12\nc. A14\nd. A13\n",
  answer: "c"
},
{
  question : "What is ppi of screen?\na. 430\nb. 450\nc. 460\nd. 470\n",
  answer: "c"
},
{
  question : "What is video playback time (in hours)?\na. 15.5\nb. 16\nc. 16.5\nd. 17\n",
  answer: "d"
},
{
  question : "What is resolution of main camera (in megapixels)?\na. 12\nb. 32\nc. 64\nd. 100\n",
  answer: "a"
},
{
  question : "Is it IP68 certified or IP69?\na. IP68\nb. IP67\n",
  answer: "a"
}];

//loop for running that function
var permission = readlineSync.question("\nPress (Y/y) to start -------------");
if(permission=='Y'||permission=='y')
{
for( var i=0;i<startquiz.length;i++ )
{
  start(startquiz[i].question,startquiz[i].answer)
}
if(score===startquiz.length)
{
  console.log(console.bold.green("You win an IPhone. Soon! You will get an email about the delivery."));
}
else
{
console.log("OOPS! You missed the chance of getting an Iphone 12 pro as your score is ",score, "out of", startquiz.length,". Sorry.");
console.log("Better Luck Next Time!");
}
}
else{
  console.log(console.red("You choose to quit. As you wish! Bye."));
}