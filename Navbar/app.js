const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // console.log(navLinks.classList)

    // if(navLinks.classList.contains('show-links')) {
    //     navLinks.classList.remove('show-links');
    // } else {
    //     navLinks.classList.add('show-links');
    // }

    navLinks.classList.toggle('show-links');
})

// one liner toggle method
