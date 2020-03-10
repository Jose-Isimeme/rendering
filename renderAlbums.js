function renderArtist(albums) {

    var renderArtistHTML = albums.map(renderAlbums);

    var albumHTML = 
    `
        <div class="album">
            ${renderArtistHTML.join("")}
        </div>
    `;
    return albumHTML;
};



function renderAlbums(album) {
    
    var albumTitle = albumInfo(album); 

    return `
        <div class="card color-black bg-light py-3 px-3" style="width: 600px">
            <h1>${album.artist}</h1>
            <hr>
            ${albumTitle.join("")}
       </div>
       `;
};

function albumInfo(album) {


    var albumData = album.albums.map(info=> {
        console.log(info);
        var songs = songInfo(info); 
        return `
        <div class="card color-black bg-light py-3 px-3" style="width: 600px">
           <img src="${info.albumCover}">
            <h2>${info.title}</h2>
            <p>${songs.join("")}</p>
            
       </div>
        `
    })
    return albumData;

}

function songInfo(songsObj) {

    var songData = songsObj.songs.map(song=> {
        console.log(song);
        return `
        <div class="card color-black bg-light py-3 px-3" style="width: 600px">
            <p>${song.title}</p>
            <p>${song.length}</p>
       </div>
        `
    })
    return songData;

}
function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}