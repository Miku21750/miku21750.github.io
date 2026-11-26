document.getElementById('report').addEventListener('submit', function (event) {
    event.preventDefault();
    const fields = new FormData(this);
    const message = `Nama: ${fields.get('name')}\nEmail: ${fields.get('email')}\n\n${fields.get('content')}`;
    window.location.assign('https://wa.me/6283834685279?text=' + encodeURIComponent(message));
});
