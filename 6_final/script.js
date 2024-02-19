(function(){
//span 요소 노드 가져오기
const spanEl = document.querySelector("main h2 span");
//화면에 표시할 문장 배열
const txtArr = ['Eternal Twenty', 'Benselle', 'Giselle Caudill', 'Benjamin Ryan'];
//배열의 인덱스 초깃값
let index = 0;
//화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤 배열로 만들기
let currentTxt = txtArr[index].split("");
// 텍스트 쓰기
function writeTxt(){ 
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !== 0){
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}
// 텍스트 삭제
function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}
writeTxt();
})(); //즉시 실행 함수

//헤더영역 스크롤 시 배경색 추가하기
// const headerEl = document.querySelector("header");
// window.addEventListener('scroll', function(){
//     const browserscrollY = window.pageYOffset; 
//     //window객체의 수직 스크롤 위치 참조
//     if(browserscrollY > 0){
//         headerEl.classList.add("active");
//     }else{
//         headerEl.classList.remove("active");
//     }
// })

const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck);
    });
function scrollCheck(){
    let browserscrollY = window.scrollY;
    //window객체의 수직 스크롤 위치 참조
    if(browserscrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
}

//이동할 대상 요소를 가리키는 선택자를 파라미터에 전달받아 이동하려는 대상의 현재 위칫값을 구하는 코드

const animationMove = function(selector){
    //1. selector 매개변수로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    //2. 현재 웹브라우저의 스크롤 정보(y값)
    const browserscrollY = window.scrollY;
    //3. 이동할 대상의 위치(y값)
    const targetScrollY = targetEl.getBoundingClientRect().top + browserscrollY;
    //4.스크롤 이동
    window.scrollTo({top:targetScrollY, behavior:'smooth'});
};

//스크롤 이벤트 연결하기

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click',function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}