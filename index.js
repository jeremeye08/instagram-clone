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

let isNotLiked = {};

// Logging out Number of Posts
let numPosts = posts.length
console.log(numPosts)

// Creating the Posts according to the posts array
for(let i=0;i<numPosts;i++) {
    
    let newPost = document.createElement('div')
    newPost.classList.add('posts')
    newPost.id = 'post-'+(i+1);
    console.log({i})
    console.log(newPost.id)
    

    // Creating the child elements of the every post
    let newTitle = document.createElement('div')
    newTitle.classList.add('title')

    let newAvatar = document.createElement('img')
    newAvatar.id = 'avatar-'+(i+1);
    newAvatar.src = posts[i].avatar
    newAvatar.classList.add('small-img')

    let newDesc = document.createElement('div')
    newDesc.classList.add('desc')

    let newName = document.createElement('p')
    newName.id = 'name-'+(i+1);
    newName.textContent = posts[i].name
    
    let newLocation = document.createElement('p')
    newLocation.id = 'location-'+(i+1);
    newLocation.textContent = posts[i].location
    newLocation.classList.add('light','small-p')
    
    let newImage = document.createElement('img')
    newImage.id = 'image-'+(i+1);
    newImage.src = posts[i].post
    newImage.classList.add('post-img')

    let icons = document.createElement('div')
    icons.classList.add('icons-div')

    let iconHeartLiked = document.createElement('img')
    iconHeartLiked.src = 'images/icon-heart-liked.png'
    iconHeartLiked.classList.add('icon-heart-liked')
    iconHeartLiked.classList.add('hidden')

    let iconHeart = document.createElement('img')
    iconHeart.src = 'images/icon-heart.png'
    iconHeart.classList.add('icons')

    let iconComment = document.createElement('img')
    iconComment.src = 'images/icon-comment.png'
    iconComment.classList.add('icons')

    let iconShare = document.createElement('img')
    iconShare.src = 'images/icon-dm.png'
    iconShare.classList.add('icons')

    let newLikes = document.createElement('p')
    newLikes.id = 'likes-'+(i+1);
    newLikes.textContent = posts[i].likes + ' likes'
    newLikes.classList.add('margin-left-top')

    let newUsername = document.createElement('p')
    newUsername.id = 'username-'+(i+1);
    newUsername.textContent = posts[i].username
    newUsername.classList.add('margin-left-top')
    
    let newComment = document.createElement('span')
    newComment.id = 'comment-'+(i+1);
    newComment.classList.add('light')
    newComment.textContent = " " + posts[i].comment


    // Appending all the elements
    newDesc.appendChild(newName)
    newDesc.appendChild(newLocation)

    newTitle.appendChild(newAvatar)
    newTitle.appendChild(newDesc)

    icons.appendChild(iconHeartLiked)
    icons.appendChild(iconHeart)
    icons.appendChild(iconComment)
    icons.appendChild(iconShare)

    newUsername.appendChild(newComment)

    newPost.appendChild(newTitle)
    newPost.appendChild(newImage)
    newPost.appendChild(icons)
    newPost.appendChild(newLikes)
    newPost.appendChild(newUsername)

    const containerEl = document.getElementById('container')
    containerEl.appendChild(newPost)

    // Toggling Like button

    isNotLiked[i] = true

    // Double tapping Image
    newImage.addEventListener('dblclick', () =>{
        if(isNotLiked[i]===true){
            iconHeart.classList.remove('visible')
            iconHeart.classList.add('hidden')
            iconHeartLiked.classList.remove('hidden')
            iconHeartLiked.classList.add('visible')
            isNotLiked[i]=!isNotLiked[i]
            console.log(isNotLiked[i])
        } else if(isNotLiked[i]===false){
            iconHeartLiked.classList.remove('visible')
            iconHeartLiked.classList.add('hidden')
            iconHeart.classList.remove('hidden')
            iconHeart.classList.add('visible')
            isNotLiked[i]=!isNotLiked[i]
            console.log(isNotLiked[i])
        }
    })

    // Like = Inactive
    iconHeart.addEventListener('mouseenter', () => {
        iconHeart.classList.add('icon-hover')
    })

    iconHeart.addEventListener('mouseleave', () => {
        iconHeart.classList.remove('icon-hover')
    })

    iconHeart.addEventListener('mousedown', () => {
        iconHeart.classList.add('icon-active')
    })

    iconHeart.addEventListener('mouseup', () =>{
        iconHeart.classList.remove('icon-active')
        iconHeart.classList.remove('visible')
        iconHeart.classList.add('hidden')
        iconHeartLiked.classList.remove('hidden')
        iconHeartLiked.classList.add('visible')
        isNotLiked[i]=!isNotLiked[i]
    })


    // Like = Active
    iconHeartLiked.addEventListener('mouseenter', () => {
        iconHeartLiked.classList.add('icon-hover')
    })

    iconHeartLiked.addEventListener('mouseleave', () => {
        iconHeartLiked.classList.remove('icon-hover')
    })

    iconHeartLiked.addEventListener('mousedown', () => {
        iconHeartLiked.classList.add('icon-active')
    })

    iconHeartLiked.addEventListener('mouseup', () =>{
        iconHeartLiked.classList.remove('icon-active')
        iconHeartLiked.classList.remove('visible')
        iconHeartLiked.classList.add('hidden')
        iconHeart.classList.remove('hidden')
        iconHeart.classList.add('visible')
        isNotLiked[i]=!isNotLiked[i]
    })

    // Hover and Active effects on Comment buttons

    iconComment.addEventListener('mouseenter', () => {
        iconComment.classList.add('icon-hover')
    })

    iconComment.addEventListener('mouseleave', () => {
        iconComment.classList.remove('icon-hover')
    })

    iconComment.addEventListener('mousedown', () => {
        iconComment.classList.add('icon-active')
    })

    iconComment.addEventListener('mouseup', () => {
        iconComment.classList.remove('icon-active')
    })

    // Hover and Active effects on Share buttons

    iconShare.addEventListener('mouseenter', () => {
        iconShare.classList.add('icon-hover')
    })

    iconShare.addEventListener('mouseleave', () => {
        iconShare.classList.remove('icon-hover')
    })

    iconShare.addEventListener('mousedown', () => {
        iconShare.classList.add('icon-active')
    })

    iconShare.addEventListener('mouseup', () => {
        iconShare.classList.remove('icon-active')
    })
}