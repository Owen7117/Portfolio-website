function toggleMenue() {
    const mobileLinks = document.querySelector('.mobileLinksHidden');
    mobileLinks.classList.toggle('active');
}

document.querySelectorAll('.mobileLinksHidden a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.mobileLinksHidden').classList.remove('active');
    });
});