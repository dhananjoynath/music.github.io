 if('mediaSession' in navigator) {

  navigator.mediaSession.metadata = new MediaMetadata(  {
    title: "Techno Pencil ",
    artist: 't',
    album: 'd',
    artwork: [
      { src: 'https://assets.codepen.io/4358584/1.300.jpg',   sizes: '96x96',   type: 'image/png' },
      { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '128x128', type: 'image/png' },
      { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '192x192', type: 'image/png' },
      { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '256x256', type: 'image/png' },
      { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '384x384', type: 'image/png' },
      { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '512x512', type: 'image/png' },
    ]
  });
  
  

  navigator.mediaSession.setActionHandler('play', function() {my_song.play();
  });
  navigator.mediaSession.setActionHandler('pause', function() {my_song.pause();});
  
  
  navigator.mediaSession.setActionHandler('seekbackward', (details) => { my_song.currentTime = my_song.currentTime - (details.seekOffset || 30);
  });

  navigator.mediaSession.setActionHandler('seekforward', (details) => {
    my_song.currentTime = my_song.currentTime + (details.seekOffset || 30);
  });
 
 
  navigator.mediaSession.setActionHandler('previoustrack', function() {
  previousSong();
  
  
  });
  navigator.mediaSession.setActionHandler('nexttrack', function() {
  nextSong();

  
  });

}

	 