const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    allSections.addEventListener('click', (e)=>{
        const id=e.target.dataset.id;
        if(id){
            sectBtn.forEach((btn)=>{
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            sections.forEach((section)=>{
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    //Toggle Theme
    const themeBtn=document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element=document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransitions();

function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve, ms));
}

const phrases = ['Aspiring Data Scientist', 'Future Web Developer', 'Student'];

const el=document.getElementById('type');

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while(true){
        let curWord=phrases[curPhraseIndex];
        console.log(curWord);
        for (let i=0;i<curWord.length;i++){
            el.innerText = curWord.substring(0,i+1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime*10);

        for (let i=curWord.length;i>0;i--){
            el.innerText = curWord.substring(0,i-1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime*10);

        if (curPhraseIndex === phrases.length-1){
            curPhraseIndex = 0;
        }
        else{
            curPhraseIndex++;
        }
    }
}

writeLoop();