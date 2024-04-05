const posts = [];
function addPost(username, timestamp, content, likes, comments) {
    const newPost = {
        username: username,
        timestamp: timestamp,
        content: content,
        likes: likes,
        comments: comments
    };
    posts.push(newPost);
}
   
function addComment(postIndex, comment) {
    if (postIndex >= 0 && postIndex < posts.length) {
        posts[postIndex].comments.push(comment);
        console.log("Komentar berhasil ditambahkan.");
    } else {
       console.log("Indeks postingan tidak valid.");
    }
}   

function displayPosts() {
    if (posts.length > 0) {
        console.log("Postingan:");
        posts.forEach((post, index) => {
        console.log("Post " + (index + 1) + ":");
        console.log("Username: " + post.username);
        console.log("Timestamp: " + post.timestamp);
        console.log("Content: " + post.content);
        console.log("Likes: " + post.likes);
        console.log("Comments: " + post.comments.join(", "));
        console.log("----------------------");
    });
    } else {
        console.log("Tidak ada postingan.");
    }
}   

addPost("andi_wijaya", "2024-04-05", "Hari yang cerah di pantai! 🏖️", 25, ["Indah sekali!", "Sepertinya hari yang menyenangkan!"]);
addPost("anisa_putri", "2024-04-04", "Resep baru: Kue Cokelat 🍰", 30, ["Enak!", "Tidak sabar untuk mencoba!"]);

addComment(0, "Pemandangan yang luar biasa!");
addComment(1, "Terlihat lezat!");

displayPosts();
