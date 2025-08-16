let music = null;
let last_music = null

function playMusic(songid, songname){

    if(last_music!=null){
        last_music.pause()
        last_music = null
        music[1].src = "play.png"
        document.getElementById('player-btn').src = "play.png"
        document.getElementById('sname').innerHTML = "Your song name appears here"
    }
    else{
        music = document.getElementsByClassName(songid)
    try{
        last_music.pause()
        music.currentTime = 0
    }
    catch{
        //not do anything
    }
    
    music[0].play()
    last_music = music[0]
    music[1].src = "pause.png"
    document.getElementById('sname').innerHTML = songname
    document.getElementById('player-btn').src = "pause.png"
    }

    
}

function pauseMusic(){
    music[0].pause()
    music[0].currentTime = 0
    music[1].src = "play.png"
    document.getElementById('player-btn').src = "play.png"
    document.getElementById('sname').innerHTML = "Your song name appears here"
}


