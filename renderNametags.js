function renderNametags(nametags) {
    // nameList = ""; 
    var names = [];
    for (i = 0; i < nametags.length; i++) {
        names.push 
            (
            `
            <div class="card" style="width: 400px; height: auto">
                <h1 style="background-color: blue; color: white; text-align: center"> Hello, my name is: </h1>
                <p style="background-color: gray; text-align: center; font-size: 30px; mx-a"> ${nametags[i]}</p>
            </div>
            `
            )
        }
        return names.join('');
    
}


function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}