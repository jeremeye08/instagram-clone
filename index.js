const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Logging out Number of Posts
let numPosts = posts.length
console.log(numPosts)

// Creating the Posts and Appending it into the end of the Container
for(let i=0;i<numPosts;i++) {
    let newPost = document.createElement('div')
    newPost.setAttribute('id','post-'+(i+1))
    console.log({i})
    console.log(newPost.id)

    const containerEl = document.getElementById('container')
    containerEl.appendChild(newPost)
}

