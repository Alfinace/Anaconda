function launchApp(app) {
  document.querySelector('.foot').style.display='flex';
  document.querySelector('#appName').innerHTML = app;
}

document.querySelector('#btn-signin').addEventListener('click',(e)=>{
 document.querySelector('.box-login').style.display = 'flex';
 document.querySelector('.box-login').style.backgroundColor = '#2726268c';
  document.querySelector('.login').style.animationName ='moveCenter'
})

document.querySelector('#close-login').addEventListener('click',(e)=>{
  document.querySelector('.box-login').style.display ='none'
 })

function setDarkMode(app) {
  document.querySelector('#appName').innerHTML = app;
}
