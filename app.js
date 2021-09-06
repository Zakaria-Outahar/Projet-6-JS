const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnGo = document.querySelector('.b1')
const btnPause = document.querySelector('.b2')
const btnReset = document.querySelector('.b3')
const cycles = document.querySelector('h2')

let checkInterval = false;
let tempsInitial = 1800;
let tempsDeRepos = 300;
let pause = false;
let nbDeCycles = 0;

cycles.innerText = `Nombre de cycles : ${nbDeCycles}`;

affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

btnGo.addEventListener('click', () => {

    if(checkInterval === false){
        checkInterval = true;
        pause = false;
        btnPause.innerText = "Pause";
        tempsInitial--;
        affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
    
        let timer = setInterval(() => {
            if(!pause && tempsInitial > 0){
                tempsInitial--;
                affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            } 
            else if(tempsDeRepos === 0 && tempsInitial === 0){
                tempsInitial = 1800;
                tempsDeRepos = 300;
                pause = false;
                nbDeCycles++;
                cycles.innerText = `Nombre de cycles : ${nbDeCycles}`;
    
                affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
                affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            } 
            else if(tempsInitial === 0){
                tempsDeRepos--;
                affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            } 
        }, 1000)

        //  Reset
        btnReset.addEventListener('click', () => {
            clearInterval(timer);
            checkInterval = false;
            tempsInitial = 1800;
            tempsDeRepos = 300;
            nbDeCycles = 0;
            cycles.innerText = `Nombre de cycles : ${nbDeCycles}`;

            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
    
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

            btnPause.innerText = "Pause";
            pause = false;
        })
    } else{
        return;
    }
})

btnPause.addEventListener('click', () => {
    if(!pause){
        btnPause.innerText = "Reprendre";
    } else if(pause){
        btnPause.innerText = "Pause";
    }
    pause = !pause;

})