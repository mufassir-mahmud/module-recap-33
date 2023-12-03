function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
function displayPosts(posts){
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML =`
        <h4>User-${post.userId}</h4>
        <h3>Title-${post.title}</h3>
        <p>Comment-${post.body}</p>

        
        
        `;
    postContainer.appendChild(div)
    }
}
loadPosts()