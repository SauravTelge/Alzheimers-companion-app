document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.addEventListener('click', () => alert('Bubble clicked!'));
    });
});
