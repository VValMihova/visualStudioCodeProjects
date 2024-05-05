let posts;

function attachEvents() {

  const urlPosts = "http://localhost:3030/jsonstore/blog/posts";
  const urlCom = "http://localhost:3030/jsonstore/blog/comments";

  const btnLoadPosts = document.querySelector("#btnLoadPosts");
  const postsDropDown = document.querySelector("#posts");

  const btnViewPost = document.querySelector("#btnViewPost");

  const postTitle = document.querySelector("#post-title");
  const postBody = document.querySelector("#post-body");
  const postCommentsUl = document.querySelector("#post-comments");

  btnViewPost.addEventListener("click", viewPost);

  async function viewPost() {
    const selectedPost = postsDropDown.value;
    const result = await (await fetch(urlCom)).json();
    const allComments = Object.values(result).filter(
      (comment) => comment.postId === selectedPost
    );
    allComments.forEach((com) => {
      const li = document.createElement("li");
      li.textContent = com.text;
      postCommentsUl.appendChild(li);
    });

    const currentPost = Object.values(posts).filter(post => post.id === selectedPost);
  
    postTitle.textContent = currentPost[0].title;
    postBody.textContent = currentPost[0].body;
  }

  btnLoadPosts.addEventListener("click", getAllPosts);
  async function getAllPosts() {
    const result = await (await fetch(urlPosts)).json();
    
    posts = result;

    Object.values(result).forEach((post) => {
      const option = document.createElement("option");
      option.value = post.id;
      option.textContent = post.title;

      postsDropDown.appendChild(option);
    });
  }
}

attachEvents();
