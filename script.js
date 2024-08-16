const url = 'https://spotify-web2.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '53103a3e67msh97bd069448f4d12p178d5djsnda3237df9e5e',
		'x-rapidapi-host': 'spotify-web2.p.rapidapi.com'
	}
};

async function apiCall(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        let songUrl = [];
        for(let i=0; i<result.items.length; i++){
            songUrl[i] = result.items[i].track.preview_url;
        }
        // ALL THE SONGS
        console.log(songUrl);
        
        // library cards
        let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
        for(let i=0; i<result.items.length; i++){
            songUL.innerHTML = songUL.innerHTML +
            `<li>
                <img class = "invert" src="./svg/music.svg">
                <div class="info">
                    <div>${result.items[i].track.name}</div>
                    <div>${result.items[i].track.artists[0].name}</div>
                </div>
                <img class="invert playNow" src="./svg/play.svg">
            </li>`;
        }
        // var audio = new Audio(songUrl[0]);
        // // to play
        // audio.play();
        // // time
        // audio.addEventListener("loadeddata",()=>{
        //     let duration = audio.duration;
        //     console.log(duration, audio.currentSrc, audio.currentTime);
        // })
    } catch (error) {
        console.error(error);
    }
}
apiCall();