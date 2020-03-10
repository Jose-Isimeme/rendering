
function renderTweets(tweets) {
    let renderInfo = tweets.map(tweet =>{ 
        return`<div class="card px-3 py-3 my-3 mx-3" style="width: 400px; height: auto">
                <div>
                    <p>
                        <img class="float-left" style="height: 50px; width: 60px;" src="${tweet.user.profilePic}"/> 
                        ${tweet.user.username} ${tweet.user.isVerified} <br>
                        ${tweet.user.handle} 
                    </p>
                    <p style="display: inline-block";> ${tweet.text} </p>
                    <hr>
                    <p> ${tweet.likes} ${tweet.retweets} ${tweet.replies} </p>
                </div>
            </div>
            `
     }).join("")
    return renderInfo;
};

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}