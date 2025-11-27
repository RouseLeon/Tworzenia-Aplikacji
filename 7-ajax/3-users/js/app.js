const usersContainer = document.createElement('div');
usersContainer.classList.add('users-container');
document.body.appendChild(usersContainer);

// ===== Funkcja do pobrania użytkowników =====
async function loadUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        console.log(users); // wypisanie w konsoli odpowiedzi

        users.forEach(user => {
            const article = document.createElement('article');
            article.classList.add('user-cnt');
            article.dataset.id = user.id;

            article.innerHTML = `
                <h2 class="user-name">${user.name}</h2>
                <div class="user-address">
                    Phone: <span class="user-phone">${user.phone}</span><br>
                    Email: <a href="mailto:${user.email}" class="user-email">${user.email}</a>
                </div>
                <button type="button" class="btn user-show-posts">Show posts</button>
                <ul class="user-posts" style="display:none"></ul>
            `;

            usersContainer.appendChild(article);
        });

        // Podpinamy zdarzenia do wszystkich buttonów
        const buttons = document.querySelectorAll('.user-show-posts');
        buttons.forEach(button => {
            button.addEventListener('click', toggleUserPosts);
        });

    } catch (err) {
        console.error(err);
    }
}

// ===== Funkcja do pokazania / ukrycia postów =====
async function toggleUserPosts(e) {
    const button = e.currentTarget;
    const article = button.closest('.user-cnt');
    const userId = article.dataset.id;
    const postsContainer = article.querySelector('.user-posts');

    if (postsContainer.style.display === 'none' || postsContainer.style.display === '') {
        // Jeśli pusta lista lub ukryta, pobieramy posty
        if (!postsContainer.hasChildNodes()) {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
                const posts = await res.json();

                posts.forEach(post => {
                    const li = document.createElement('li');
                    li.classList.add('post');
                    li.innerHTML = `
                        <h3 class="post-title">${post.title}</h3>
                        <div class="post-body">${post.body}</div>
                    `;
                    postsContainer.appendChild(li);
                });

            } catch (err) {
                console.error(err);
            }
        }

        postsContainer.style.display = 'block';
        button.textContent = 'Hide posts';
    } else {
        postsContainer.style.display = 'none';
        button.textContent = 'Show posts';
    }
}

// ===== Start =====
loadUsers();
