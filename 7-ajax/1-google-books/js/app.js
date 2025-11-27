const form = document.getElementById('book-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            data.items.forEach(item => console.log(item.volumeInfo.title));
        } else {
            console.error('Błąd: ', xhr.status);
        }
    };
    xhr.send();
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => console.log(item.volumeInfo.title));
        })
        .catch(err => console.error(err));
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}`;

    axios.get(url)
        .then(response => {
            response.data.items.forEach(item => console.log(item.volumeInfo.title));
        })
        .catch(err => console.error(err));
});

$('#book-form').on('submit', function(e) {
    e.preventDefault();
    const title = $('#title').val();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}`;

    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            data.items.forEach(item => console.log(item.volumeInfo.title));
        },
        error: function(err) {
            console.error(err);
        }
    });
});
