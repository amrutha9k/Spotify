console.log("welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('Songs/0.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');

let songs=[
     {songName:"Darshana ", filePath: "Songs/0.mp3",coverPath:"Covers/darshana.jpeg"},
    {songName:"Tujh Mein", filePath: "Songs/1.mp3",coverPath:"Covers/tujh mein.jpeg"},
    {songName:" Ammaadi", filePath: "Songs/2.mp3",coverPath:"Covers/Ammadi.jpeg"},
    {songName:" NaaloNenena", filePath: "Songs/3.mp3",coverPath:"Covers/Banam.jpeg"},
    {songName:"CountingStars ", filePath: "Songs/4.mp3",coverPath:"Covers/counting stars.jpg"},
    {songName:" Levitating", filePath: "Songs/5.mp3",coverPath:"Covers/levitating.jpeg"},
    {songName:" Ranjha", filePath: "Songs/6.mp3",coverPath:"Covers/Ranjha.jpeg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;    
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        if(audioElement.paused||audioElement.currentTime<=0){
            songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= `Songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            audioElement.classList.remove('fa-circle-pause');
            audioElement.classList.add('fa-circle-play');
            gif.style.opacity=0;
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
        }
        
    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src= `Songs/${songIndex}.mp3`;
    makeAllPlays();
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            audioElement.classList.remove('fa-circle-play');
            audioElement.classList.add('fa-circle-pause');
            gif.style.opacity=1;    
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            audioElement.classList.remove('fa-circle-pause');
            audioElement.classList.add('fa-circle-play');
            gif.style.opacity=0;
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');

        }
    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src= `Songs/${songIndex}.mp3`;
    makeAllPlays();
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            audioElement.classList.remove('fa-circle-play');
            audioElement.classList.add('fa-circle-pause');
            gif.style.opacity=1;    
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            audioElement.classList.remove('fa-circle-pause');
            audioElement.classList.add('fa-circle-play');
            gif.style.opacity=0;
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');

        }
})

