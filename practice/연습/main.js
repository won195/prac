let target = document.querySelector("#dynamic");

function randomstring(){
    let stringArr = ["Hello", "안녕하세요",
    "こんにちは", "Hola"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
  target.textContent = "";
  dynamic(randomstring());
}


//한극자씩 텍스트 출력함수
function dynamic(randomArr){
  if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);
    },100);
  }else{
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomstring());
//커서 깜빡임
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);