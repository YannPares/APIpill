
const buttonPage = document.getElementById('btnPage')
const myPosts = document.getElementById('myposts'); 
let numPosts = 1;
let buttonID = 1;
buttonPage.addEventListener('click', getPage());

function getPage(){ 
    
    url = `https://jsonplaceholder.typicode.com/posts/?_start=${numPosts}&_limit=10`;
fetch (url)
    .then (response => response.json())
    
    .then (data => {
        
        // console.log(data)
        myPosts.replaceChildren();
        
        data.forEach(post => {
      
        const li = document.createElement("li");
        const btnOpen = document.createElement("button")
        console.log(post);
        li.innerHTML = post.title;
        myPosts.append(li);
        btnOpen.innerHTML = 'Open post';
        
        btnOpen.setAttribute("id", `btnOpen${buttonID}`);
        myPosts.appendChild(btnOpen);
        buttonID += 1;
        });
   
       
    })
    .catch(function (err) {
        console.log(err);
    });
 numPosts += 10;
}

// const openButton = document.getElementById('btnOpen');

// openButton.addEventListener('click', getPost());
// function getPost(){
// fetch (urlpage)
//     .then (response => response.json())
    
//     .then (data => {

//         myPosts.replaceChildren();
//         data.forEach(post => {
//         const li = document.createElement("li");
//         li.innerHTML = post.title + post.body + userID;
//         myPosts.appendChild(li);
//         const btnComm = document.createElement("button")
//         btnComm.innerHTML = 'Show Comments';
//         myPosts.appendChild(btnComm);
//         const btnEdit = document.createElement("button");
//         btnEdit.innerHTML = 'Edit post';
//         myPosts.appendChild(btnEdit);
//         const btnDelete = document.createElement("button");
//         btnDelete.innerHTML = 'Delete post';
//         myPosts.appendChild(btnDelete);

//         });
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// }
