'use strict'
//ELEMENTS

const home= document.querySelector('.show-home');

const showBio= document.querySelector('.show-bio');
const bio= document.querySelector('.bio');

const showVideos=document.querySelector('.show-videos');
const videos= document.querySelector('.videos');

const showMusic=document.querySelector('.show-music');
const music=document.querySelector('.music');

const overlay= document.querySelector('.overlay');

//MENU

home.addEventListener('click', function(){
    bio.classList.remove('opacity-animation');

    videos.classList.remove('opacity-animation');
    music.classList.remove('opacity-animation');
    
    overlay.classList.remove('dark');
})

showBio.addEventListener('click', function () {
    bio.classList.add('opacity-animation');
    
    videos.classList.remove('opacity-animation');
    music.classList.remove('opacity-animation');

    overlay.classList.add('dark');

})

showVideos.addEventListener('click', function(){
    videos.classList.add('opacity-animation');
    
    bio.classList.remove('opacity-animation');
    music.classList.remove('opacity-animation');

    overlay.classList.add('dark');
})

showMusic.addEventListener('click', function(){
    music.classList.add('opacity-animation');
    
    videos.classList.remove('opacity-animation');
    bio.classList.remove('opacity-animation');

    overlay.classList.add('dark');
})

