let dark = null;
let slide = null;
let som = null;
let text = null;
let ph = null;
let linkedin = null;
let github = null;
let links = null;
let overl = null;
let nav = null;
let logo = null;
let pics = null;
let cs50 = null;
let formlabel = null;
let forminput = null;
let form = null;
let resumecard = null;
let formbutton = null;
let resumebutton = null;
let resumespan = null;
let resumeshare = null;
let nameimg = null;
let indexbutton = null;
let knob = null;
let togglerbox = null;
let togglericon = null;
let checkmode;

document.addEventListener('DOMContentLoaded', function(){
    slide = document.getElementById('slide');
    som = document.getElementById('som');
    text = document.body;
    ph = document.getElementById('name');
    linkedin = document.getElementById('linkedin');
    github = document.getElementById('github');
    links = document.getElementsByTagName('a');
    overl = document.getElementById('navbarOverlay');
    nav = document.getElementById('nav');
    logo = document.getElementById('logo');
    pics = document.getElementsByClassName('d-block');
    cs50 = document.getElementById('cs50');
    formlabel = document.getElementsByClassName('form-label');
    forminput = document.getElementsByClassName('form-input');
    form = document.getElementById('colorform');
    resumecard = document.getElementById('namecard');
    formbutton = document.getElementById('formsubmit');
    resumebutton = document.getElementById('resumebutton');
    resumespan = document.getElementsByClassName('formtext');
    resumeshare = document.getElementsByClassName('sharebutton');
    nameimg = document.getElementById('nameimg');
    indexbutton = document.getElementById('indexbutton');
    knob = document.querySelector('.slider').style;
    togglerbox = document.getElementById('toggler1');
    togglericon = document.getElementById('togglericon');
    

    document.getElementById('som').innerHTML = '🌤️';
    let linkers = document.getElementsByTagName('a');
    for (let i = 0; i < linkers.length; i++) {
        linkers[i].style.color = 'black';
        linkers[i].onmouseout = function() {
            this.style.color = 'black';
        };
        linkers[i].onmouseover = function() {
            this.style.color = '#4192EC';
        };   
    }

    checkmode = localStorage.getItem('darkmode');

    if (checkmode === null){
        localStorage.setItem('darkmode', 'false');
        knob.setProperty('--transition', 'none');
        knob.setProperty('--transform', 'unset');
        knob.setProperty('--margin', '0');
        changeLight();
        knob.setProperty('--transition', '0.4s');
    } 
    else if (checkmode === 'true') {
        knob.setProperty('--transition', 'none');
        knob.setProperty('--transform', 'unset');
        knob.setProperty('--margin', '26px');
        changeDark();
        knob.setProperty('--transition', '0.4s');
    }
    else if (checkmode === 'false') {
        knob.setProperty('--transition', 'none');
        knob.setProperty('--transform', 'unset');
        knob.setProperty('--margin', '0');
        changeLight();
        knob.setProperty('--transition', '0.4s');
        
    }

    
    let i = 0;
    let txt ='Jan Cabrera.';
    let speed = 150;
    let isViewing = true;

    function isOnPage(){
        if (document.visibilityState === 'hidden') {
            isViewing = false;
        }
        else {
            isViewing = true;
        }
    }

    document.addEventListener('visibilitychange', isOnPage);

    let toggler = document.getElementById('navbarOverlay');
    let show = document.getElementById('navbarOverlay');

    toggler.addEventListener('click', function(){
        toggler.style.width = '0';
    });

    function typeWriter() {
    if (i < txt.length && isViewing) {
    document.getElementById('name').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(typeRemover, speed);
    }
    }

    function typeRemover() {
    if (i > 0) {
    document.getElementById('name').textContent = txt.substring(0, i-1);
    i--;
    setTimeout(typeRemover, speed);
    }
    }

    let checkname = document.getElementById('name');
    if (checkname) {
        setInterval(typeWriter, 1700);
    }

});

function changeBg() {
    dark = localStorage.getItem('darkmode');
    if (dark === 'false'){
        changeDark();
    }
    else if (dark === 'true') {
        changeLight();
    }      
};

function changeDark(){
    nav.classList.add('bg-dark', 'border-bottom', 'border-bottom-dark');
    nav.setAttribute('data-bs-theme', 'dark');
    nav.removeAttribute('style');
    logo.style.filter = 'contrast(0)';
    slide.style.border = '2px solid white';
    document.body.classList.remove('lightmode');
    document.body.classList.add('darkmode');
    som.innerHTML = '🌙';
    som.classList.remove('lightbg');
    som.classList.add('darkbg');
    if(ph) {
        ph.classList.remove('writelightbg');
        ph.classList.add('writedarkbg');
    }
    text.style.color = 'white';
    linkedin.src = 'img/white-linkedin.png';
    github.src = 'img/github-mark-white.svg';
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = 'white';
        links[i].onmouseout = function() {
            this.style.color = 'white';
        };
        links[i].onmouseover = function() {
            this.style.color = '#4192EC';
        };   
    };
    overl.style.backgroundColor = '#212529';
    if(pics){
        for (let i = 0; i < pics.length; i++) {
            pics[i].classList.remove('caroudarkbrdr');
            pics[i].classList.add('caroulightbrdr');
        }
    }
    if(formlabel){
        for (let i = 0; i < formlabel.length; i++) {
            formlabel[i].classList.remove('light');
            formlabel[i].classList.add('dark');
        }
    }
    if(forminput){
        for (let i = 0; i < forminput.length; i++) {
            forminput[i].classList.remove('light');
            forminput[i].classList.add('dark');
        }
    }
    if(form){
        form.style.backgroundColor = '#f5f5f5';
    }
    if(formbutton){
        formbutton.style.color= 'white';
        formbutton.style.backgroundColor = '#212529';
    }
    if(resumebutton){
        resumebutton.style.color= 'white';
        resumebutton.style.backgroundColor = '#212529';
    }
    if(resumecard){
        resumecard.style.color = '#212529';
        resumecard.style.backgroundColor = 'white';
    }
    if(resumespan){
        for (let i = 0; i < resumespan.length; i++){
            resumespan[i].style.color = '#212529';
        }
    }
    if(resumeshare){
        for (let i = 0; i < resumeshare.length; i++){
            resumeshare[i].setAttribute('fill', '#212529');
        }
    }
    cs50.style.color = 'white';
    if(nameimg){
        nameimg.style.border = '2px #212529 solid';
    }    
    if(indexbutton){
        indexbutton.style.color= '#212529';
        indexbutton.style.backgroundColor = 'white';
    } 
    knob.setProperty('--margin', '31px');
    knob.setProperty('--background', 'white');
    togglerbox.style.borderColor = 'white';
    togglerbox.style.filter = 'contrast(0)';
    localStorage.setItem('darkmode', 'true');
    checkmode = localStorage.getItem('darkmode');
};

function changeLight(){
    nav.classList.remove('bg-dark', 'border-bottom', 'border-bottom-dark');
    nav.style.backgroundColor = '#e3f2fd';
    nav.setAttribute('data-bs-theme', 'light');
    logo.style.filter = 'contrast(1)';
    slide.style.border = '2px solid black';
    document.body.classList.remove('darkmode');
    document.body.classList.add('lightmode');
    som.innerHTML = '🌤️';
    som.classList.remove('darkbg');
    som.classList.add('lightbg');
    if(ph) {
        ph.classList.remove('writedarkbg');
        ph.classList.add('writelightbg');
    }
    text.style.color = '#212529';
    linkedin.src = 'img/blue-linkedin.png';
    github.src = 'img/github-mark.svg';
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = 'black';
        links[i].onmouseout = function() {
            this.style.color = 'black';
        };
        links[i].onmouseover = function() {
            this.style.color = '#4192EC';
        };   
    }
    overl.style.backgroundColor = '#e3f2fd';
    if(pics){
        for (let i = 0; i < pics.length; i++) {
            pics[i].classList.remove('caroulightbrdr');
            pics[i].classList.add('caroudarkbrdr');
        }
    }
    if(formlabel){
        for (let i = 0; i < formlabel.length; i++) {
            formlabel[i].classList.remove('dark');
            formlabel[i].classList.add('light');
        }
    }
    if(forminput){
        for (let i = 0; i < forminput.length; i++) {
            forminput[i].classList.remove('dark');
            forminput[i].classList.add('light');
        }
    }
    if(form){
        form.style.backgroundColor = '#212529';
    }
    cs50.style.color = 'black';
    if(formbutton){
        formbutton.style.color= '#212529';
        formbutton.style.backgroundColor = 'white';
    }
    if(resumebutton){
        resumebutton.style.color= '#212529';
        resumebutton.style.backgroundColor = 'white';
    }
    if(resumecard){
        resumecard.style.color = 'white';
        resumecard.style.backgroundColor = '#212529';
    }
    if(resumespan){
        for (let i = 0; i < resumespan.length; i++){
            resumespan[i].style.color = 'white';
        }
    }
    if(resumeshare){
        for (let i = 0; i < resumeshare.length; i++){
            resumeshare[i].setAttribute('fill', 'white');
        }
    }
    if(nameimg){
        nameimg.style.border = '2px white solid';
    }
    if(indexbutton){
        indexbutton.style.color= 'white';
        indexbutton.style.backgroundColor = '#212529';
    }   
    togglerbox.style.borderColor = 'black';
    togglerbox.style.filter = 'contrast(1)';
    knob.setProperty('--margin', '3px');
    knob.setProperty('--background', '#212529');
    localStorage.setItem('darkmode', 'false');
    checkmode = localStorage.getItem('darkmode');
    
};



function showNav() {
    let toggler = document.getElementById('navbarOverlay');
    toggler.style.width = '100%';
};
