#!/usr/bin/node
// made by prince kumar 
// date 23 sep 2022
// all import goes here 
const process = require("process");
const fs = require('fs');
const prompt = require("prompt-sync")();
// take a input from the user .. 

// create a function to check for the valid gmail address 
function checkG(gmail){
    var regX = /[a-zA-Z0-9]@gmail.com/gm;
    var res = gmail.match(regX);
    if(res){
        return true;
    }
    else{
        return false;
    }
}
let gMail = prompt("[~] Enter a gmail: " );
if (checkG(gMail)){
    // ask the user , how many mailt they want .. 
    let count = prompt("[~] Enter the number of mail you want? ");
    // lets open the file. .   ..  ... 
    const data = fs.readFileSync('./optn.txt',
            {encoding:'utf8', flag:'r'});
            var dataA = data.split("\n");
            if (dataA.length < count){
                console.log("Please provide a small number");

            }
            else{
                for(let i = 0; i< count; i++){
                    var gmailA = gMail.split("@");
                    // make mass mail here
                     console.log("");
                     console.log(`${gmailA[0]}+${dataA[i]}@${gmailA[1]}`);
                }
            }

}
else{
    console.log("Please provide a valid gmail");
}

