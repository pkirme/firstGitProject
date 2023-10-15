const posts=[{title:'post1' ,body:'this is post 1',lastActivityTime:'abc'},
             {title:'post2' ,body:'this is post 2',lastActivityTime:'xyz'},
            ];
function createPost(post){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            resolve();
        }, 2000)
    }) 
}

function updateLastUserActivityTime(post){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            post.lastActivityTime = new Date();
            resolve();
        }, 1000)
    }) 
}

// function deleteBlog(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(posts.length > 0){
//                 const poppedElement  = posts.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         })
//     })
// }

function getPosts(){
    let output="";
    setTimeout(() => {
        posts.forEach((key)=>{
            // output +=`<li>${key.name} ${key.age}</li>`;
            // document.body.innerHTML=output;
            console.log(`${key.title} ${key.body} ${key.lastActivityTime}`);
        })
    }, 1000);
    
}
let post={title: 'Post3', body: 'This is Post 3'};
Promise.all([createPost(post),updateLastUserActivityTime(post)]).then(getPosts);