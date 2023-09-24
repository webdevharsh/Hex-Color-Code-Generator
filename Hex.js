let generateCode =()=>{
let hex = "#";  
let chars = "abcdef0123456789";
for(let i=0;i<6;i++){
  hex += chars[Math.floor(Math.random() * chars.length)];
}
document.querySelector('.container .hex-code').innerHTML = hex;
document.querySelector('.container .output-box').style.background = hex;
}

let copyCode =()=>{
 let hexCode = document.querySelector('.container .hex-code').innerHTML;
 navigator.clipboard.writeText(hexCode);
}
