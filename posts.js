
const buttonPage = document.getElementById('btnPage')
const myPosts = document.getElementById('post'); 
const modalHeader = document.getElementById('modalHeader');
const modalBody = document.getElementById('modalBody');
let numPosts = 0;
let numPost = 1;
let buttonID = 1;

buttonPage.addEventListener('click', getPage());
function getPage(){ 
    fetch (`https://jsonplaceholder.typicode.com/posts/?_start=${numPosts}&_limit=8`)
        .then (response => response.json())
        
        .then (data => {
            myPosts.replaceChildren();
            
            data.forEach(post => {
            const div = document.createElement("div");
            const image = document.createElement("img")    
            const btnOpen = document.createElement("button")
            const titleModal = document.createElement("h3");
            const bodyModal = document.createElement('p');
            const userID = document.createElement('p');
            modalHeader.replaceChildren();
            modalBody.replaceChildren();
            div.innerHTML = post.title;
            div.setAttribute("class", "card");
            myPosts.appendChild(div);

            image.src = 'https://via.placeholder.com/200x200';
            div.appendChild(image);

            btnOpen.innerHTML = 'Open post';
            btnOpen.setAttribute("id", `btnOpen${buttonID}`);
            btnOpen.setAttribute("class", "btn btn-primary");
            btnOpen.setAttribute("data-toggle","modal")
            btnOpen.setAttribute("data-target", "#myModal")
            div.appendChild(btnOpen);


           
            
            titleModal.textContent = post.title;
            modalHeader.appendChild(titleModal);

            
            bodyModal.innerHTML = post.body;
            modalBody.appendChild(bodyModal);

            userID.innerHTML = post.userId;
            modalBody.appendChild(userID);

        console.log(post);
            });

        })
        .catch(function (err) {
            console.log(err);
        });
     



    // fetch (`https://jsonplaceholder.typicode.com/posts?id=${buttonID}?_body`)
    //     .then (response2 => response2.json())
    //     .then (data => {
    //         data.forEach( ides => {
                   
            
    //         console.log(ides);
             
    //         })
    //         })   
    //         .catch(function (err) {
    //             console.log(err);
    //         });
            
buttonID += 1;
numPosts += 8;
}

