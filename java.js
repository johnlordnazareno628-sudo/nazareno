document.querySelectorAll('.about, .educational, .Hobbies, .contact').forEach(section => {
    section.addEventListener('click', () => {
        document.querySelectorAll('.about, .educational, .Hobbies, .contact').forEach(otherSection => {
            if (otherSection !== section) {
                otherSection.classList.remove('slide');
            }
        });
        section.classList.toggle('slide');
    });
});