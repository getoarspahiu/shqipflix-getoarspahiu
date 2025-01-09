function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const plusIcon = element.querySelector('.plus-icon');
    
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        plusIcon.classList.add('open');
    } else {
        answer.style.display = 'none';
        plusIcon.classList.remove('open');
    }
}