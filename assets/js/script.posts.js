const posts = [];
let postIndex = -1;
function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;
    console.log(title, category, resume, publisher, date);

    if (title && category && resume && publisher && date) {
        if (postIndex == -1) {
            storePost(title, category, resume, publisher, date);
            cleanFields();
            showPosts();
        } else {
            posts[postIndex] = {
                title,
                category,
                resume,
                publisher,
                date
            }
        }
        cleanFields();
        showPosts();
        postIndex = -1;
    } else {
        alert("Preencha todos os campos!")
    }
}
function cleanFields() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("date").value = "";
}
function storePost(title, category, resume, publisher, date) {
    const post = {
        title,
        category,
        resume,
        publisher,
        date
    };
    posts.push(post)

}

function showPosts() {
    document.getElementById("list").classList.remove("hidden")
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="itemPost">
        <h2>${post.title}</h2>
        <p><strong>Categoria: </strong>${post.category}</p>
        <p><strong>Resume: </strong>${post.resume}</p>
        <p><strong>Publisher: </strong>${post.publisher}</p>
        <p><strong>Data de publicação: </strong>${post.date}</p>

        <button onclick="editPost(${index})">Editar</button>
        <button onclick="removePost(${index})">Excluir</button>
        </div>
        `
    })
    document.getElementById("list").innerHTML = showContent;
}
function editPost(index) {
    console.log("Entrou no editPost")
    const post = posts[index];

    document.getElementById("title").value = post.title;
    document.getElementById("category").value = post.category;
    document.getElementById("resume").value = post.resume;
    document.getElementById("publisher").value = post.publisher;
    document.getElementById("date").value = post.date;
    postIndex = index;
}
function removePost(index) {
    console.log("Entrou no remove")

    posts.splice(index, 1);
    showPosts();
    if (posts.lenght == 0) {
        document.getElementById("list").classList.add("hidden")
    }
}