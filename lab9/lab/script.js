window.onload = () => {
    document.getElementById("btnSend").onclick = callAPIByAjax;
};

function callAPIByAjax(){
    let userId = document.getElementById("userId").value;
    let url = "https://jsonplaceholder.typicode.com/users/" + userId;

    fetch(url)
        .catch((err) => console.log(err))
        .then((response) => response.json())
        .then((data) => renderUserDate(data))

    getPosts(userId);
}

function renderUserDate(user){

    document.getElementById("name").innerHTML = "Name: " + user.name;
    document.getElementById("email").innerHTML = "Email:" + user.email;
    document.getElementById("address").innerHTML = `Address: ${user.address.street}, 
                                                        city: ${user.address.city}, 
                                                        zipcode: ${user.address.zipcode}`;
}

function getPosts(userId){
    let url = "https://jsonplaceholder.typicode.com/posts?userId=" + userId;
    fetch(url)
        .catch((err) => console.log(err))
        .then((response) => response.json())
        .then((data) => renderPosts(data))
}

function renderPosts(posts){
    let divPosts = document.getElementById("posts");
    divPosts.innerHTML = "";

    for (let post of posts){
        let hr = document.createElement("hr");
        divPosts.append(hr);

        let pTitle = document.createElement("p");
        pTitle.innerHTML = `Title: ${post.title}`;
        divPosts.append(pTitle);

        let pBody = document.createElement("p");
        pBody.innerHTML = `Body: ${post.body}`;
        divPosts.append(pBody);
        
        let btnLoad = document.createElement("button");
        btnLoad.innerHTML = "Comments";
        divPosts.append(btnLoad);
        

        let divComment = document.createElement("div");
        
        divPosts.append(divComment);

        btnLoad.onclick = () => loadComment(post.id, divComment);
    }
}

function loadComment(postId, divComment){
    let url = "https://jsonplaceholder.typicode.com/comments?postId=" + postId;

    console.log(url);

    fetch(url)
        .catch((err) => console.log(err))
        .then((response) => response.json())
        .then((data) => renderComments(data, divComment))
}


function renderComments(comments, divComment){

    divComment.innerHTML = "";
    divComment.classList.add("comment");

    for (let comment of comments){
        console.log(comment);

        let pName = document.createElement("p");
        pName.innerHTML = `Name: ${comment.name}`;
        divComment.append(pName);

        let pEmail = document.createElement("p");
        pEmail.innerHTML = `Email: ${comment.email}`;
        divComment.append(pEmail);

        let pBody = document.createElement("p");
        pBody.innerHTML = `Body: ${comment.body}`;
        divComment.append(pBody);

        let hr = document.createElement("hr");
        divComment.append(hr);
    }
}

