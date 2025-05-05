import {blogPosts,featured} from "./constants/constants.js";

const featuredDiv = document.getElementById('featured');

featured.forEach(({title,imageUrl,content}) => {
    featuredDiv.innerHTML += `
    <div class="box-item">
        <img src="${imageUrl}" alt="box-item-image"/>

        <h3>${title}</h3>
        <p>${content}</p>
    </div>
    `
    console.log(featured.title);
});

const allBlgPostscontainer = document.getElementById('blogs-container');

blogPosts.forEach(({title,imageUrl,content}) => {

    allBlgPostscontainer.innerHTML += `
    
    <div class="blog-item">
        <img src="${imageUrl}" alt="all-posts"
        <h3>${title}</h3>
        <p>${content}</p>
    </div>

    `

})

