const my_song = document.getElementById("audio");
const audio = document.getElementById("audio");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const repeatButton = document.getElementById("repeat");
const shuffleButton = document.getElementById("shuffle");
const playAll_button=document.getElementById("playAll_button");
const playOne_button=document.getElementById("playOne_button");

const songImage = document.getElementById("song-image");
const song_link =document.getElementById("song_link");
const current_song =document.getElementById("current_song");

const LNK=document.getElementById("LNK");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const maxDuration = document.getElementById("max-duration");
const currentTimeRef = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const playlistContainer = document.getElementById("playlist-container");
const playlist_button = document.getElementById("playlist_button");
const close_playlist_button=document.getElementById("close_playlist_button");
const music_list = document.getElementById("music-list");
const playlistSongs = document.getElementById("playlist-songs");
const Myplaylist = document.getElementById("Myplaylist");
const currentProgress = document.getElementById("current-progress");
const songLength =document.getElementById("songLength");
const songNow =document.getElementById("songNow");
const options=document.getElementById("options");
const option_blank=document.getElementById("option_blank");
const hide_option_button=document.getElementById("hide_option_button");
const download_button=document.getElementById("download_button");
const p=document.getElementById("p");
const L= document.getElementById("L");
const love_button= document.getElementById("love");
const blank = document.getElementById("blank");
const id_music_player=document.getElementById("id_music_player");



let index;
let loop = true;
songLength.innerHTML=songsList.length;

let events = {
  mouse: {
    click: "click",
  },
  touch: {
    click: "touchstart",
  },
};

let deviceType = "";

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

const timeFormatter = (timeInput) => {
  let minute = Math.floor(timeInput / 60);
  minute = minute < 10 ? "0" + minute : minute;
  let second = Math.floor(timeInput % 60);
  second = second < 10 ? "0" + second : second;
  return `${minute}:${second}`;
};


const playAudio = () => {
  audio.play();
  songNow.innerHTML=index+1;
  
  pauseButton.style.display='block';
playButton.style.display='none';
};

repeatButton.addEventListener("click", () => {
  if (repeatButton.classList.contains("active")) {
    repeatButton.classList.remove("active");
    audio.loop = false;
    alert("repeat off");
  } else {
    repeatButton.classList.add("active");
    audio.loop = true;
    alert("repeat on");
  }
});

const nextSong = () => {
  
  if (loop) {
    if (index == songsList.length - 1) {
   
 
      index = 0;
    } else {
      index += 1;
    }
    setSong(index);
    songNow.innerHTML=index+1;

    playAudio();
  } else {
  
    let randIndex = Math.floor(Math.random() * songsList.length);
  //  console.log(randIndex);
    setSong(randIndex);
    playAudio();
    
  }
};

const pauseAudio = () => {
  audio.pause();
  
pauseButton.style.display='none';
playButton.style.display='block';

};


const previousSong = () => {
  if (index > 0) {
    pauseAudio();
    index -= 1;
  } else {
    index = songsList.length - 1;
  }
  setSong(index);
  playAudio();
  songNow.innerHTML=index+1;
};



playAll_button.addEventListener("click", () => {
  let  playAll_song='true'; 
  playAll_button.style.display='none'; 
  playOne_button.style.display='block'; 
  
    alert(playAll_song);  
});


playOne_button.addEventListener("click", () => {
  let  playAll_song='false'; 
    alert(playAll_song);  
    playAll_button.style.display='block'; 
  playOne_button.style.display='none'; 
});
 



audio.onended = () => {
pauseButton.style.display='none';
playButton.style.display='block';


nextSong(); 

};




shuffleButton.addEventListener("click", () => {
  if (shuffleButton.classList.contains("active")) {
    shuffleButton.classList.remove("active");
    loop = true;
    alert("shuffle off");
  } else {
    shuffleButton.classList.add("active");
    loop = false;
    alert("shuffle on");
  }
});




const add_like = () => { 
alert("love");

}

const musiclist_open = () => { 
music_list.style.display='block'; 
blank.style.display='block'; 
music_list.style.width="100%";
//music_list.style.width="70%";
}
const musiclist_close = () => { 
music_list.style.display='none'; 
blank.style.display='none'; 
}


const open_option = () => { 


options.style.display='block'; 
option_blank.style.display='block'; 



 }
const hide_option = () => { 
option_blank.style.display='none'; 
options.style.display='none'; 
 }


const option_dload = () => { 
alert("function not available");
 }





playlist_button.addEventListener("click", musiclist_open);
close_playlist_button.addEventListener("click", musiclist_close);


download_button.addEventListener("click", option_dload);

hide_option_button.addEventListener("click", hide_option);

playButton.addEventListener("click", playAudio);

nextButton.addEventListener("click", nextSong);

pauseButton.addEventListener("click", pauseAudio);

prevButton.addEventListener("click", previousSong);

isTouchDevice();
progressBar.addEventListener(events[deviceType].click, (event) => {
  
   let coordStart = progressBar.getBoundingClientRect().left;

  let coordEnd = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
  let progress = (coordEnd - coordStart) / progressBar.offsetWidth;

  currentProgress.style.width = progress * 100 + "%";
  audio.currentTime = progress * audio.duration;

  audio.play();
  pauseButton.classList.remove("hide");
  playButton.classList.add("hide");
});

setInterval(() => {
  currentTimeRef.innerHTML = timeFormatter(audio.currentTime);
 
 currentProgress.style.width = (audio.currentTime / audio.duration.toFixed(3)) * 100 + "%";
p.style.width=(audio.currentTime / audio.duration.toFixed(3)) * 100 + "%";


});

audio.addEventListener("timeupdate", () => {
  currentTimeRef.innerText = timeFormatter(audio.currentTime);
});



const initializePlaylist = () => {
var x=0;
  for (let i in songsList) {
  var x=x+1;
 
 Myplaylist.innerHTML += `
 <div class="song_list_container no_selection">
 
        <div onclick="setSongs(${i})" class="chat">
            <div class="profile">
                <img src="${songsList[i].image}" alt="${songsList[i].name}">
            </div>
            
            <div class="text">
                <div class="name">
                      ${songsList[i].name}
                </div>
                <div class="message">
                    ${songsList[i].artist}
                </div>
            </div>
            </div>
            
            <div  onclick="songsInfo(${i})"   class="options_div">
                <i class="fa-solid fa-ellipsis-vertical"> </i>
            </div>
            
    </div> `;
        
  }
};


window.onload = () => {
 index = 0;
  pauseButton.style.display='none';
playButton.style.display='block';

  setSong(index);
  initializePlaylist();
  musiclist_open();
 music_list.style.width="100%";
  
  
};