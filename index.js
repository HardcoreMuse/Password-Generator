const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genBox1 = document.getElementById("gen-box1")
let genBox2 = document.getElementById("gen-box2")
let copyDiv = document.getElementById("copy-div")
let content = document.getElementById("gen-box1")
let charMultiplier = characters.length

document.getElementById("gen-box1").addEventListener("click", copy_password1)
document.getElementById("gen-box2").addEventListener("click", copy_password2)
document.getElementById("gen-box1").addEventListener("click", bringTheJuice)
document.getElementById("gen-box2").addEventListener("click", bringTheJuice)

document.getElementById("switch").addEventListener('change', (e) => {
  this.checkboxValue = e.target.checked ? 'on' : 'off';
  
  if(this.checkboxValue === 'on'){
      charMultiplier = 42      
  } else {
      charMultiplier = characters.length     
  }
  
})

function pwdGen() {
    let password1 = ""
    let password2 = ""
    
    for(let i = 0; i < 15; i++){
        let character1 = Math.floor(Math.random() * charMultiplier)
        let character2 = Math.floor(Math.random() * charMultiplier)
        password1 += characters[character1]
        password2 += characters[character2]
    }
    
    genBox1.textContent = password1
    genBox2.textContent = password2
    
    document.getElementById("copy-div").textContent = "(Click to Copy)"
    
    if(content.textContent.length > 1){
        document.getElementById("gen-box1").style.cursor = "pointer"
        document.getElementById("gen-box2").style.cursor = "pointer"    
    }
}

function copy_password1() {
    var copyText = document.getElementById("gen-box1");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

function copy_password2() {
    var copyText = document.getElementById("gen-box2");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

document.getElementById('slider').addEventListener('change', (e) => {
  this.checkboxValue = e.target.checked ? 'on' : 'off';
  
  if(this.checkboxValue === 'on'){
      document.body.style.background = "linear-gradient(black, #ECFDF5)"
      document.getElementById("window").style.background = "#ECFDF5"
      document.getElementById("main-subtext-el").style.color = "#6B7280"
      document.getElementById("header-white").style.color = "#2B283A"
      document.getElementById("gen-box1").style.background = "#2B283A"
      document.getElementById("gen-box2").style.background = "#2B283A"      
  } else {
      document.body.style.background = "linear-gradient(black, #7890B3)"
      document.getElementById("window").style.background = "#1F2937"
      document.getElementById("main-subtext-el").style.color = "#D5D4D8"
      document.getElementById("header-white").style.color = "white"
      document.getElementById("gen-box1").style.background = "#2F3E53"
      document.getElementById("gen-box2").style.background = "#2F3E53"      
  }
  
})

function bringTheJuice(){
    
    if( content.textContent.length > 1){
        copyDiv.textContent = "Copy Success!"
    }
}