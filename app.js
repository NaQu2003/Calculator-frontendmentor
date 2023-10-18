const buttons = document.querySelectorAll('.btn');
const resultScreen = document.querySelector('.calculation')
const resultText =document.querySelector('.result')
const container = document.querySelector('.container')
let calculationTEXT = '';
let realCalculation = '';
let result;
function updateCalculation(){
    try {
    
    if(this.innerHTML !== 'DEL' && this.innerHTML !=='=' && this.innerHTML !=='RESET'){
            resultScreen.value += this.textContent;
            realCalculation =resultScreen.value;
            realCalculation = realCalculation.replace('x','*')
            
      
    }
    if(this.innerHTML === 'DEL'){
        lastLetter = resultScreen.value.indexOf(-1)
        if(lastLetter){
            resultScreen.value = resultScreen.value.slice(0,lastLetter);
            realCalculation = realCalculation.slice(0,lastLetter);
        }
    } 
    if(this.innerHTML ==='='){
        
        result = eval(realCalculation)
        if(result ===undefined || result ===Infinity || result ===NaN){
            container.classList.add('shake-anim');
        setTimeout(()=>{
            container.classList.remove('shake-anim')
            },250)
            return ;
            
        }else{
            realCalculation = String(result);
        }
        
        resultScreen.value = String(result);
        
        if(result !==''){
            resultText.textContent = result;
            resultScreen.value = String(result);
        }
    }
    if(this.innerHTML ==='RESET'){
        resultScreen.value = '';
        resultText.textContent = ''
        realCalculation = '';


    }
    
    }catch (error) {
        container.classList.add('shake-anim');
        setTimeout(()=>{
            container.classList.remove('shake-anim')
        },250)
        throw error;
    }
}

buttons.forEach(button =>{
    button.addEventListener('click',updateCalculation)
    
})
function handleInput(e){
    realCalculation = resultScreen.value;
    if(e.key ==='Enter'){
        result = eval(realCalculation)
        if(result ===undefined || result ===Infinity || result ===NaN){
            container.classList.add('shake-anim');
        setTimeout(()=>{
            container.classList.remove('shake-anim')
            },250)
            return ;
            
        }else{
            realCalculation = String(result);
        }
        
        resultScreen.value = String(result);
        if(result !==''){
            resultText.textContent = result;
            resultScreen.value = String(result);
        }
    }
    
}
resultScreen.addEventListener('keyup',handleInput)


//Theme Changer
const screen = document.querySelector('.screen')
const selectorToogle = document.querySelector('.selector-balls')
const keyboard = document.querySelector('.keyboard-part')
const headPart = document.querySelector('.head-part')
const calculation = document.querySelector('.calculation')
const selectors = document.querySelectorAll('.ball')
const numbers = document.querySelectorAll('.number')
//Theme 1
const containerColor = "#3b4662"
const mainBackgroundColor = "hsl(222, 26%, 31%)";
const toogleColor = "hsl(223, 31%, 20%)";
const keyboardColor = "hsl(223, 31%, 20%)";
const screenBackground = "hsl(224, 36%, 15%)";
const keyBackground = "rgb(231,228,221)";
const keyShadow  = "rgb(175, 165, 156)";
const delColor = "rgb(100,114,153)";
const delShadow = "#3f4d74";
const equalColor = "hsl(6, 63%, 50%)";
const equalShadow = "hsl(6, 70%, 34%)";
const textColor = "rgb(65,71,85)";
//Theme 2
const containerColor2 = '#e6e6e6';
const mainBackgroundColor2 = "hsl(0, 0%, 90%)";
const toogleColor2 = "hsl(0, 5%, 81%)";
const screenBackground2 = "hsl(0, 0%, 93%)";
const keyBoardColor2 = "#d3cdcd";
const keyBackgroundColor2 = '#e5e4e0';
const keyColor2 = "#24251f";
const keyShadow2 = "#a79e8f";
const delColor2 = "#64b4bb";
const delShadow2 = "#195e63";
const equalColor2 = "#ff8b38";
const equalShadow2  = '#8b3b00';
const textColor2= "#3a3a2e";
//Theme 3
const containerColor3 = '#17062a';
const mainBackgroundColor3 = "hsl(268, 75%, 9%)";
const toogleColor3 = "hsl(268, 71%, 12%)";
const screenBackground3 = "#1e0836";
const keyBoardColor3 = "#1e0836";
const keyBackgroundColor3 = '#341751';
const keyColor3 = "#ffed34";
const keyShadow3 = "#881da1";
const delColor3 = "#560878";
const delShadow3 = "#b919f5";
const equalColor3 = "#00decf";
const equalShadow3  = '#6dfaf1';
const textColor3= "#f8d838";
function theme1(){
    selectors[0].style.display = "block"
    selectors[0].style.backgroundColor = "hsl(6, 63%, 50%)";
    selectors[0].style.opacity = "1"
    selectors[0].style.left = "6px"
    document.body.style.backgroundColor = mainBackgroundColor;
    selectorToogle.style.backgroundColor = toogleColor;
    keyboard.style.backgroundColor = keyboardColor;
    screen.style.backgroundColor = screenBackground;
    container.style.backgroundColor = containerColor;
    headPart.style.color = "white"
    calculation.style.color = 'white'
    resultText.style.color = "white"
    buttons.forEach(button =>{
        button.style.backgroundColor = keyBackground;
        button.style.borderColor = keyShadow;
        button.style.color = textColor;
        if(button.innerHTML ==='DEL'){
            button.style.backgroundColor = delColor;
            button.style.borderColor = delShadow;
            button.style.color ='white'
            
        }
        if(button.innerHTML ==='RESET'){
            button.style.backgroundColor = delColor;
            button.style.borderColor = delShadow;
            button.style.color ='white'
        }
        if(button.innerHTML ==='='){
            button.style.backgroundColor = equalColor;
            button.style.borderColor = equalShadow;
            button.style.color ='white'
        }
    })


}
function theme2(){
    selectors[0].style.backgroundColor = "#ff8a32"
    selectors[0].style.left = "25px";
    document.body.style.backgroundColor = mainBackgroundColor2;
    selectorToogle.style.backgroundColor = toogleColor2;
    keyboard.style.backgroundColor =  keyBoardColor2;
    screen.style.backgroundColor = screenBackground2;
    screen.style.color = textColor2;
    container.style.backgroundColor = containerColor2;
    headPart.style.color = textColor2;
    calculation.style.color = textColor2;
    selectors[0].style.opacity = '1';
    selectors[0].style.display = 'block'
    resultText.style.color = "black"

    buttons.forEach(button =>{
        button.style.backgroundColor = keyBackgroundColor2;
        button.style.borderColor = keyShadow2;
        button.style.color = textColor2;
        if(button.innerHTML ==='DEL'){
            button.style.backgroundColor = delColor2;
            button.style.borderColor = delShadow2;
            button.style.color ='white'
        }
        if(button.innerHTML ==='RESET'){
            button.style.backgroundColor = delColor2;
            button.style.borderColor = delShadow2;
            button.style.color ='white'
        }
        if(button.innerHTML ==='='){
            button.style.backgroundColor = equalColor2;
            button.style.borderColor = equalShadow2;
            button.style.color ='white'
        }
    })
}
function theme3(){
    selectors[0].style.backgroundColor = "#08dacf"
    selectors[0].style.left = "46px";
    document.body.style.backgroundColor = mainBackgroundColor3;
    selectorToogle.style.backgroundColor = toogleColor3;
    keyboard.style.backgroundColor =  keyBoardColor3;
    screen.style.backgroundColor = screenBackground3;
    screen.style.color = textColor3;
    container.style.backgroundColor = containerColor3;
    headPart.style.color = textColor3;
    calculation.style.color = textColor3;
    selectors[0].style.opacity = '1';
    selectors[0].style.display = 'block'
    resultText.style.color = textColor3;

    buttons.forEach(button =>{
        button.style.backgroundColor = keyBackgroundColor3;
        button.style.borderColor = keyShadow3;
        button.style.color = textColor3;
        if(button.innerHTML ==='DEL'){
            button.style.backgroundColor = delColor3;
            button.style.borderColor = delShadow3;
            
        }
        if(button.innerHTML ==='RESET'){
            button.style.backgroundColor = delColor3;
            button.style.borderColor = delShadow3;
        }
        if(button.innerHTML ==='='){
            button.style.backgroundColor = equalColor3;
            button.style.borderColor = equalShadow3;
        }
    })

}
function handleThemeSelection(){
    if(this ===selectors[1]){
      theme1();
    }else if(this ===numbers[0]){
        theme1();
    }
    if(this === selectors[2]){
        theme2();
    }else if(this ===numbers[1]){
        theme2();
    }
    if(this === selectors[3]){
        theme3();
    }else if(this ===numbers[2]){
        theme3();
    }
}
selectors.forEach(ball =>{
    ball.addEventListener('click',handleThemeSelection);
    ball.addEventListener('keyup',handleKey);
    ball.addEventListener('focus',handleFocus);
})
numbers.forEach(number =>{
    number.addEventListener('click',handleThemeSelection)
})

function handleFocus(e){
    
    if(this ===selectors[1]){
        selectors[0].style.display = "block"
        selectors[0].style.opacity = '1'
        selectors[0].style.left = '6px'
        handleKey(e);
        
    }else if(this ===selectors[2]){
        selectors[0].style.display = "block"
        selectors[0].style.opacity = '1'
        selectors[0].style.left = '25px'
        handleKey(e);
    }else if(this ===selectors[3]){
        selectors[0].style.display = "block"
        selectors[0].style.opacity = '1'
        selectors[0].style.left = '45px'
        handleKey(e);
    }
}

function handleKey(e){
    if(this ===selectors[1] && e.key ==='Enter'){
        theme1();
    }else if(this ===selectors[2] && e.key ==='Enter'){
        theme2();
    }else if(this ===selectors[3] && e.key ==='Enter'){
        theme3();
    }
}

//KeyBoard Functionality


// function updateCalculation(){
//     try {
        
    
//     if(this.innerHTML !== 'DEL' && this.innerHTML !=='=' && this.innerHTML !=='RESET'){
//         if(this.innerHTML ==='x'){
//             calculationTEXT += "x";
//             realCalculation +='*';
//             resultScreen.value = calculationTEXT;
//         }else{
//             calculationTEXT += this.textContent;
//             realCalculation +=this.textContent;
//             resultScreen.value = calculationTEXT;
//         }
      
//     }
//     if(this.innerHTML === 'DEL'){
//         lastLetter = calculationTEXT.indexOf(-1)
//         if(lastLetter){
//             calculationTEXT = calculationTEXT.slice(0,lastLetter);
//             realCalculation = realCalculation.slice(0,lastLetter);
//         }
//         resultScreen.value = calculationTEXT;
//     } 
//     if(this.innerHTML ==='='){
//         result = eval(realCalculation)
//         if(result ===undefined || result ===Infinity || result ===NaN){
//             container.classList.add('shake-anim');
//         setTimeout(()=>{
//             container.classList.remove('shake-anim')
//             },250)
//             return ;
            
//         }else{
//             calculationTEXT = String(result);
//             realCalculation = String(result);
//         }
        
//         resultScreen.value = result;
        
//         if(result !==''){
//             resultText.textContent = result;
//             resultScreen.textContent = calculationTEXT;
//         }
//     }
//     if(this.innerHTML ==='RESET'){
//         calculationTEXT = '';
//         resultScreen.value = '';
//         resultText.textContent = ''
//         realCalculation = '';


//     }
    
//     }catch (error) {
//         container.classList.add('shake-anim');
//         setTimeout(()=>{
//             container.classList.remove('shake-anim')
//         },250)
//         throw error;
//     }
// }