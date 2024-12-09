document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelector('.night-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
});
