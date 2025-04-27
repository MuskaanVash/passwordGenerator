const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
    "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
     "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",
     ">",".","?","/"];

const toggleThemeBtn= document.getElementById("toggleThemeBtn");
const themeIcon = document.getElementById("themeIcon");
const themeCSS = document.getElementById("themeCSS");

let passwordDivs= document.querySelectorAll(".password");
//console.log(passwordDiv);
let generatedPasswords = [];
let lengthOfPassword= 15;
let count=0;

function givePasswords(){
    //resetting previous values for new values
    generatedPasswords=[];
    count=0;
    while(count<2){
        generatePassword();
        count++;
    }
    //console.log(generatedPasswords);
    passwordDivs.forEach((div,index)=>{
        div.textContent = generatedPasswords[index];
    })
}

//generate a single password of either user's asked length or 15 characters
function generatePassword(){
    let lengthFromInput = parseInt(document.getElementById("length").value);
    console.log(lengthFromInput);
    if(isNaN(lengthFromInput) || lengthFromInput<1){
        lengthOfPassword = 15; //keep as previous
    }else{
        lengthOfPassword= lengthFromInput; //update to user-entered value
    }
    let str= "";
        for(let i=0;i< lengthOfPassword;i++){
            let randomIndex= Math.floor(Math.random()* characters.length);
            str += characters[randomIndex];
        }
    generatedPasswords.push(str);

}


function updateTheme(){
    if(themeCSS.getAttribute("href")=== "dark.css"){
        themeIcon.classList.remove("bx-sun");
        themeIcon.classList.add("bx-moon");
        themeCSS.setAttribute('href', 'light.css' );
    }else{
        themeIcon.classList.remove("bx-moon");
        themeIcon.classList.add("bx-sun");
        themeCSS.setAttribute('href', 'dark.css');
    }
}


themeCSS.setAttribute('href', 'dark.css');
themeIcon.classList.add("bx-moon");
