'use strict'

// form
const root = document.getElementById('root');
const wrapper = document.createElement('div');
const bthMain = document.createElement('button');
const bthMainAut = document.createElement('button');
const bthLog = document.createElement('button');
const bthOutput = document.createElement('button');
const bthReg = document.createElement('button');
const form = document.createElement('form');
const mainPage = document.createElement('div');
const divMassage = document.createElement('div');
const imgBlock = document.createElement('div');
const img = document.createElement("img");
const bthPlay = document.createElement('button');
img.src = './image/22120.jpg';

//formReg
const formReg = document.createElement('form');
const loginReg = document.createElement('input');
const passwReg = document.createElement('input');
const confirmReg = document.createElement('input');
const saveReg = document.createElement('button');
const resetReg = document.createElement('button');
const divButton = document.createElement('div');

//formSign
const formSign = document.createElement('form');
const loginSign = document.createElement('input');
const passwSign = document.createElement('input');
const signIn = document.createElement('button');

//game

const fieldGame = document.createElement('div');
const playerMove =document.createElement('div');
const reset = document.createElement('button');
const quit = document.createElement('button');
const bthWrapperCentr = document.createElement('div');
const wrapperCentr = document.createElement('div');
const userLeft = document.createElement('div');
const userRight = document.createElement('div');
const nameUserLeft = document.createElement('div');
const nameUserRight = document.createElement('div');
const counterUserLeft = document.createElement('div');
const counterUserRight = document.createElement('div');
const counterLeft = document.createElement('div');
const counterRight = document.createElement('div');
const fragment = document.createDocumentFragment();
for(let i = 0; i<9; i++){
  const div = document.createElement('div');
  div.classList.add('square');
  fragment.appendChild(div);
}

// form
wrapper.append(bthMain, bthMainAut, bthLog, bthOutput);
form.appendChild(bthReg);
imgBlock.appendChild(img);
root.append(wrapper, mainPage, imgBlock, bthPlay, form);

//formReg
root.appendChild(formReg);
divButton.append(saveReg, resetReg);
formReg.append(loginReg, passwReg, confirmReg, divButton);

//formSign
formSign.append(loginSign, passwSign, signIn);
root.appendChild(formSign);

//game
fieldGame.appendChild(fragment);
bthWrapperCentr.append(reset, quit);
wrapperCentr.append(playerMove, fieldGame, bthWrapperCentr);
userLeft.append(nameUserLeft, counterUserLeft, counterLeft);
userRight.append(nameUserRight, counterUserRight, counterRight);
root.append(userLeft, wrapperCentr, userRight);

// form.class
imgBlock.classList.add('imgBlock');
img.classList.add('img');
root.classList.add('root-element');
bthReg.classList.add('bthReg');
bthLog.classList.add('bthLog');
bthOutput.classList.add('bthOutput');
wrapper.classList.add('wrapper-button');
bthMain.classList.add('bthMain');
bthMainAut.classList.add('bthMainAut');
form.classList.add('form');
mainPage.classList.add('mainPage');
divMassage.classList.add('root-element_massage');
bthPlay.classList.add('bthPlay');

//formReg.class
formReg.classList.add('form-reg');
loginReg.classList.add('login-reg');
passwReg.classList.add('passw-reg');
confirmReg.classList.add('confirm-reg');
saveReg.classList.add('bth-save');
resetReg.classList.add('bth-reset');
divButton.classList.add('div-button');

//formSign.class
formSign.classList.add('form-sign');
loginSign.classList.add('login-sign');
passwSign.classList.add('passw-sign');
signIn.classList.add('bth-sign-in');

//game.class
fieldGame.classList.add('fieldGame');
playerMove.classList.add('player-move');
reset.classList.add('bthReset');
quit.classList.add('bthQuit');
bthWrapperCentr.classList.add('bthWrapperCentr');
userLeft.classList.add('userLeft');
userRight.classList.add('userRight');
wrapperCentr.classList.add('wrapperCentr');
nameUserLeft.classList.add('nameUserLeft');
nameUserRight.classList.add('nameUserRight');
counterUserLeft.classList.add('counterUserLeft');
counterUserRight.classList.add('counterUserRight');
counterLeft.classList.add('counterLeft');
counterRight.classList.add('counterRight');
//
reset.value = 'button';
quit.value = 'button';
playerMove.innerText = 'ходит player 1';
reset.innerText = 'reset';
quit.innerText = 'quit';
nameUserLeft.innerText = 'player 1';
nameUserRight.innerText = 'player 2';
counterUserLeft.innerText = 'победы:';
counterUserRight.innerText = 'победы:';
userLeft.style.backgroundColor = '#ff8c00';
counterLeft.innerText = '0';
counterRight.innerText = '0';

// 
loginReg.setAttribute('type', 'text');
loginReg.setAttribute('placeholder', 'login');
loginReg.setAttribute('value', '');
passwReg.setAttribute('type', 'password');
passwReg.setAttribute('placeholder', 'password');
passwReg.setAttribute('value', '');
confirmReg.setAttribute('type', 'password');
confirmReg.setAttribute('placeholder', 'confirm password');
loginSign.setAttribute('type', 'text');
loginSign.setAttribute('placeholder', 'login');
loginSign.setAttribute('value', '');
passwSign.setAttribute('type', 'password');
passwSign.setAttribute('placeholder', 'password');
passwSign.setAttribute('value', '');

bthMainAut.innerText = 'main';
bthMain.innerText = 'main';
bthLog.innerText = 'login';
bthReg.innerText = 'Register';
bthOutput.innerText = 'quit';
mainPage.innerText = 'tic-tac-toe';
bthPlay.innerText = 'play';
saveReg.innerText = 'save';
resetReg.innerText = 'reset';
signIn.innerText = 'enter';

bthMainAut.type = 'button';
bthMain.type = 'button';
bthLog.type = 'button';
bthReg.type = 'button';
bthOutput.type = 'button';
bthPlay.type = 'button';
saveReg.type = 'button';
resetReg.type = 'reset';
signIn.type = 'button';

let d = localStorage.getItem("currentUser");

if(d == null){
  bthOutput.style.display = mainPage.style.display = bthMainAut.style.display = imgBlock.style.display = wrapperCentr.style.display = bthPlay.style.display = userLeft.style.display = userRight.style.display = 'none'; 
} else{
  formSign.style.display = bthLog.style.display = bthMain.style.display = formReg.style.display = form.style.display = wrapperCentr.style.display = userLeft.style.display = userRight.style.display = 'none';
  mainPage.style.display = 'flex';
  bthOutput.style.display = bthMainAut.style.display = imgBlock.style.display = bthPlay.style.display = 'block';
}

const flicker = (a) =>{
      setTimeout(() => {
      a.style.backgroundColor = '#ff8c00';
      setTimeout(() => {
      a.style.backgroundColor = '#00FF00';
      },100);
  },100);
}

//register 

const client = [];
let flag = false;

function inputFocus(){
  this.style.backgroundColor = '#00FF00';
}
function inputBlur() {
  this.style.backgroundColor = '';
}

loginReg.addEventListener('focus', inputFocus);
passwReg.addEventListener('focus', inputFocus);
confirmReg.addEventListener('focus', inputFocus);
loginReg.addEventListener('blur', inputBlur);
passwReg.addEventListener('blur', inputBlur);
confirmReg.addEventListener('blur', inputBlur);

const changeBthReg = () => {
  form.style.display = 'none';
  formReg.style.display = 'flex';
  formSign.style.display = 'none';
}
bthReg.addEventListener('click', changeBthReg);

const changeBthLog = () => {
  form.style.display = 'none';
  formSign.style.display = 'flex';
  formReg.style.display = 'none';
}
bthLog.addEventListener('click', changeBthLog);

const changeMain = () => {
  form.style.display = 'flex';
  formSign.style.display = 'none';
  formReg.style.display = 'none';
}
bthMain.addEventListener('click', changeMain);

const register = () => {
  const message = () => {
    formReg.insertBefore(divMassage, loginReg);
    setTimeout(() => {
      divMassage.remove();
    }, 3000);
  };
  if (loginReg.value == '' || isFinite(loginReg.value[0])) {
    divMassage.innerText = 'login должен начинаться с буквы';
    message();
    
    loginReg.value = '';
  } else if (passwReg.value == '') {
    divMassage.innerText = 'вы не ввели пароль, попробуйте еще раз';
    message();
    passwReg.value = '';
  } else if (confirmReg.value !== passwReg.value) {
    divMassage.innerText = 'вы ввели неверный пароль, попробуйте еще раз';
    message();
    confirmReg.value = '';
  } else {
    
    for (let i = 0; i < client.length; i++) {
      if (loginReg.value === client[i].loginInput) {
        flag = true;
      }
    }
    if (flag) {
      divMassage.innerText = 'логин занят';
      message();
      confirmReg.value = '';
      loginReg.value = '';
      passwReg.value = '';
      flag = false;
    } else {
      divMassage.innerText = 'регистрация прошла успешно!';
      message();
      setTimeout(() => {
        formReg.style.display = 'none';
        formSign.style.display = 'flex';
      }, 3000);
      const newUser = {
        loginInput: loginReg.value,
        passwordEntry: confirmReg.value
      }
      client.push(newUser);
      localStorage.setItem("users", JSON.stringify(client));
      confirmReg.value = '';
      loginReg.value = '';
      passwReg.value = '';
      console.log(client);
    }
    
  }
};

//authorization
loginSign.addEventListener('focus', inputFocus);
passwSign.addEventListener('focus', inputFocus);
loginSign.addEventListener('blur', inputBlur);
passwSign.addEventListener('blur', inputBlur);

const authorization = () => {
  
  console.log('start aut');

  const message = () =>{
    formSign.insertBefore(divMassage, loginSign);
    setTimeout(() => {
      divMassage.remove();
    }, 3000);
  }

  let storedСlient = JSON.parse(localStorage.getItem("users"));
  console.log(storedСlient);
  
   let clone = JSON.parse(JSON.stringify(storedСlient));
  
  if(clone === null){
    divMassage.innerText = 'Неверный логин или пароль, попробуй еще раз';
    message();
    loginSign.value = '';
    passwSign.value = '';
    
  } else{
    for (let i = 0; i < clone.length; i++) {
      clone[i] = JSON.stringify(clone[i]);
    }
  }
  console.log(clone);
  
  let newUserObj = {
    loginInput: loginSign.value,
    passwordEntry: passwSign.value
  };
  let newUserObjStr = JSON.stringify(newUserObj);
  console.log(newUserObjStr);

  const checkArray = (element, index, array) => {
    return element === newUserObjStr;
  }
  if (clone.some(checkArray) === true) {
    divMassage.innerText = 'авторизация прошла успешно';
    localStorage.setItem("currentUser", newUserObjStr);
    message();
    loginSign.value = '';
    passwSign.value = '';
    setTimeout(() => {
      formSign.style.display = 'none';
      bthLog.style.display = 'none';
      bthMain.style.display = 'none';
      imgBlock.style.display = 'block';
      mainPage.style.display = 'flex';
      bthOutput.style.display = 'block';
      bthMainAut.style.display = 'block';
      bthPlay.style.display = 'block';
      }, 3000);
      
  } else {
    divMassage.innerText = 'Неверный логин или пароль, попробуй еще раз';
    message();
    loginSign.value = '';
    passwSign.value = '';
  
  }
};
  
  saveReg.addEventListener('click', register);
  signIn.addEventListener('click', authorization);
  
  const goOut = () => {
    localStorage.removeItem("currentUser");
    formSign.style.display = 'flex';
    bthLog.style.display = 'block';
    mainPage.style.display = 'none';
    bthOutput.style.display = 'none';
    bthMainAut.style.display = 'none';
    bthMain.style.display = 'block';
    imgBlock.style.display = 'none';
    bthPlay.style.display = 'none';
  };
  bthOutput.addEventListener('click', goOut);


//game

function startGame (){

wrapper.style.display = 'none';
mainPage.style.display = 'none';
imgBlock.style.display = 'none';
bthPlay.style.display = 'none';
wrapperCentr.style.display = 'flex';
userLeft.style.display = 'flex';
userRight.style.display = 'flex';
Object.assign(root.style,{justifyContent :'space-around', flexDirection : 'row'}); 
;
let makeCounter = () =>{
  let count = 0;
  return () => {
    return ++count;
  }
};
const usersPlay = [{user: 'player 1',counter : makeCounter()},{user: 'player 2',counter : makeCounter()}];

let move = 0,
    move1 = 0;
let winnerPlayer;

const blockDivs = document.getElementsByClassName('square');

const arrBlock = [
      [blockDivs[0],blockDivs[1],blockDivs[2]],
      [blockDivs[3],blockDivs[4],blockDivs[5]],
      [blockDivs[6],blockDivs[7],blockDivs[8]],
      [blockDivs[0],blockDivs[3],blockDivs[6]],
      [blockDivs[1],blockDivs[4],blockDivs[7]],
      [blockDivs[2],blockDivs[5],blockDivs[8]],
      [blockDivs[0],blockDivs[4],blockDivs[8]],
      [blockDivs[2],blockDivs[4],blockDivs[6]],
    ];

const game = ({target :sq}) => {
  let sign;
  let player;
 
  if(sq.className === 'square' && sq.innerText == false){
    
    if(move%2 == 0){
      sign = 'X';
      sq.style.color = 'black';
      playerMove.innerText = `ходит ${usersPlay[1].user}`;
      userLeft.style.backgroundColor = '';
      userRight.style.backgroundColor = '#ff8c00';
    } 
    
    if(move%2){
      sign = 'O';
      sq.style.color = 'gray';
      playerMove.innerText = `ходит ${usersPlay[0].user}`;
      userLeft.style.backgroundColor = '#ff8c00';
      userRight.style.backgroundColor = '';
    }
    move++;
    sq.innerHTML = sign;
    if(move > 4){
      checkWinner(sign, player);
    }  
  } 
  return winnerPlayer ;
};

fieldGame.addEventListener('click', game);

let timer;
let timerBlock;
const checkWinner = (s, p) => {
  const winner = () => {
    
    if(s ==='X'){
      counterLeft.innerText = usersPlay[0].counter();
      p = usersPlay[0].user;
      userRight.style.backgroundColor = '';
      timer = setInterval('flicker(userLeft)',300);
    } else if(s ==='O'){
      counterRight.innerText = usersPlay[1].counter();
      p = usersPlay[1].user;
      userLeft.style.backgroundColor = '';
      timer = setInterval('flicker(userRight)',300);
    }
  };
  
  for (let i=0; i<arrBlock.length; i++) {
    if (arrBlock[i][0].innerHTML===arrBlock[i][1].innerHTML&&
      arrBlock[i][1].innerHTML===arrBlock[i][2].innerHTML&&
      arrBlock[i][0].innerHTML===s){ 
        winner();
        
        timerBlock = setInterval(() =>{
          setTimeout(() =>{
            arrBlock[i][0].style.backgroundColor = '#ff8c00';
            arrBlock[i][1].style.backgroundColor = '#ff8c00';
            arrBlock[i][2].style.backgroundColor = '#ff8c00';
            setTimeout(() =>{
              arrBlock[i][0].style.backgroundColor = '#00FF00';
              arrBlock[i][1].style.backgroundColor = '#00FF00';
              arrBlock[i][2].style.backgroundColor = '#00FF00';
            },100);
                      },100);
                    },300);
                    playerMove.innerText = `Победил: ${p}`;
        fieldGame.removeEventListener('click', game);
        winnerPlayer = p;
        break;
      } else if(move === 9 + move1){
        playerMove.innerText = 'Ничья!';
        userLeft.style.backgroundColor = '#ff8c00';
        userRight.style.backgroundColor = '#ff8c00';
        fieldGame.removeEventListener('click', game);
      }
    }
    
  };
  
  const resetGame = () => {
    clearInterval(timer);
    clearInterval(timerBlock);
    fieldGame.removeEventListener('click', game);
    setTimeout(() =>{
      for(let i = 0; i < arrBlock.length; i++){
        for (let j = 0; j < arrBlock[i].length; j++){
          arrBlock[i][j].style.backgroundColor = '';
        }
      }
    
      for(let i = 0; i < blockDivs.length; i++){ 
      blockDivs[i].innerHTML = '';  
      }
      fieldGame.addEventListener('click', game);

      if(winnerPlayer === usersPlay[1].user){
        move = 1;
        move1 = 1;
        playerMove.innerText = 'ходит player 2';
        userLeft.style.backgroundColor = '#00FF00';
        userRight.style.backgroundColor = '#ff8c00';
      }else{
        move = 0;
        move1 = 0;
        playerMove.innerText = 'ходит player 1';
        userLeft.style.backgroundColor = '#ff8c00';
        userRight.style.backgroundColor = '#00FF00';
      }

    },200);
  
  };

  reset.addEventListener('click', resetGame);
};

bthPlay.addEventListener('click', startGame);

//quitGame

const quitGame = () => {
  
  wrapper.style.display = mainPage.style.display =  imgBlock.style.display ='flex';
  wrapperCentr.style.display =  userLeft.style.display = userRight.style.display = 'none';
  bthPlay.style.display = 'block';
  Object.assign(root.style,{justifyContent :'center', flexDirection : 'column'});
};
quit.addEventListener('click', quitGame);

//reclama

const divRecl = document.createElement('div');

const textSorry = document.createElement('div');
const reclButton = document.createElement('button');
const reclImg = document.createElement('div');
const imgR = document.createElement("img");
imgR.src = './image/1_09154906.png';
const textRecl = document.createElement('div');

reclImg.appendChild(imgR);
divRecl.append(reclButton,textSorry, reclImg,textRecl);
root.appendChild(divRecl);


Object.assign(divRecl.style,{position: 'fixed', width: '90%', height:'90%', zIndex: '1000', backgroundColor: 'white', display:'none',
flexDirection: 'column', alignItems:'center', justifyContent:'space-around', fontSize: '2em'});
reclButton.type = 'button'
textSorry.innerText = 'Благодаря этой рекламе игра TicTacToe доступна бесплатно ';
Object.assign(textSorry.style,{paddingTop:'1em'});
Object.assign(textRecl.style,{textAlign: 'center'});
textRecl.innerText = `!!!Лучший специалист в азартных играх!!! Иваныч проводит курс:

!!! ТЕХНИКА ВЕДЕНИЯ ИГРЫ !!!

Запись по тел.: 102 (попросить соединить с отделением ж/д вокзала)
<< доверь свое будущее нам >>`;
Object.assign(reclButton.style,{width:'2em', height:'2em', backgroundColor:'red',position:'absolute', top:'0', right:'0',
outline:'none', borderRadius:'50%', cursor: 'pointer'});
reclButton.innerText = 'X';

const reclama = () =>{
  setTimeout(() => {
    divRecl.style.display = 'flex';
  },3000);
  const abortReclama = () =>{
  divRecl.style.display = 'none';
}
  reclButton.addEventListener('click',abortReclama);
  reset.removeEventListener('mouseout',reclama);
}
reset.addEventListener('mouseout',reclama);

//reclama///