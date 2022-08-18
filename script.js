function loadPost(){
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(post => displayPost(post))



}
loadPost();

function displayPost(posts) {
    //console.log(post)//
    let postsContainer = document.getElementById(`post`);
    for( let post of posts){
        let singlePost = document.createElement('div');
        singlePost.classList.add('post');
        singlePost.innerHTML = `
          <h1> Name:${post.name.common}</h1> 
          <h1> Population:${post.population}</h1>
          `;

        postsContainer.appendChild(singlePost);
    }
}
