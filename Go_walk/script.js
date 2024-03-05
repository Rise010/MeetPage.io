let yesNode = document.getElementById(`Yes`)
let noNode = document.querySelector(`#No`);
let container = document.querySelector(`.container`)

yesNode.addEventListener(`click`, function(){
    container.innerHTML = `
    
    <span class="Text"> 
            <p>Ееееееееее!! <br>Ты просто машина</p>
        </span>
        <div class="image__container">
            <img src="assets/огузок-dezstrun.gif" alt="" draggable="false">
        </div>
  
    `
});

noNode.addEventListener(`click`, function(){
    changePosition();
});

noNode.addEventListener(`mouseover`, function(){
    changePosition();
});

function changePosition() {
    let x = Math.floor(Math.random() * 75);
    let y = Math.floor(Math.random() * 75);
    noNode.style.left = x + `%`;
    noNode.style.top = y + `%`;
}