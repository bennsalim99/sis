// Gönderi paylaşma formunun görünürlüğünü açma/kapama
function togglePostForm() {
    const form = document.getElementById('post-form');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

// Gönderi paylaşma işlemi
function submitPost() {
    const caption = document.getElementById('post-caption').value;
    const image = document.getElementById('post-image').files[0];

    // Fotoğraf yüklenmişse gösterilecek
    if (image) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const postContainer = document.getElementById('posts');
            const newPost = document.createElement('div');
            newPost.classList.add('post');

            // Gönderi içeriği
            newPost.innerHTML = `
                <div class="post-header">
                    <img src="profile.jpg" alt="User" class="user-img">
                    <span class="username">Kullanıcı Adı</span>
                </div>
                <div class="post-image">
                    <img src="${event.target.result}" alt="Post" class="post-img">
                </div>
                <div class="post-caption">
                    <p>${caption}</p>
                </div>
                <div class="post-actions">
                    <button class="like-btn">👍 Beğen</button>
                    <button class="comment-btn">💬 Yorum Yap</button>
                </div>
                <div class="post-footer">
                    <p class="likes">0 Beğeni</p>
                    <p class="comments">0 Yorum</p>
                </div>
            `;

            // Yeni gönderiyi ekle
            postContainer.prepend(newPost);

            // Formu sıfırla
            document.getElementById('post-caption').value = '';
            document.getElementById('post-image').value = '';
            togglePostForm(); // Formu kapat
        };
        reader.readAsDataURL(image);
    }
}