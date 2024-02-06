    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

var darkModeToggle=document.getElementById("darkModeToggle");

darkModeToggle.onclick=function()
{
    document.body.classList.toggle("light-theme");
}

function toggleLike(button) {
    button.classList.toggle('liked');
    var likeCount = button.nextElementSibling;
    var currentCount = parseInt(likeCount.textContent);
    if (button.classList.contains('liked')) {
        currentCount++;
    } else {
        currentCount--;
    }
    likeCount.textContent = currentCount;
}

window.addEventListener('load', function() {
    var likeCounts = JSON.parse(localStorage.getItem('likeCounts')) || {};
    updateLikeCounts(likeCounts);
});

function toggleLike(button) {
    button.classList.toggle('liked');
    var likeCount = button.nextElementSibling;
    var icon = button.querySelector('i');
    var postId = button.closest('section').id;
    var likeCounts = JSON.parse(localStorage.getItem('likeCounts')) || {};
    likeCounts[postId] = (likeCounts[postId] || 0) + (button.classList.contains('liked') ? 1 : -1);
    localStorage.setItem('likeCounts', JSON.stringify(likeCounts));
    updateLikeCounts(likeCounts);
    updateIcon(icon, button.classList.contains('liked'));
}

function updateLikeCounts(likeCounts) {
    var likeCountElements = document.querySelectorAll('.like-count');
    likeCountElements.forEach(function(element) {
        var postId = element.closest('section').id;
        element.textContent = likeCounts[postId] || 0;
    });
}

function updateIcon(icon, liked) {
    if (liked) {
        icon.classList.remove('bx-like');
        icon.classList.add('bxs-like');
    } else {
        icon.classList.remove('bxs-like');
        icon.classList.add('bx-like');
    }
}

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll = () => 
{
    sections.forEach(sec =>
        {
            let top=window.scrollY;
            let offset=sec.offsetTop-150;
            let height=sec.offsetHeight;
            let id=sec.getAttribute('id');

            if(top >= offset && top<offset+height)
            {
                navlinks.forEach(links => 
                {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
                });
            };
        });
};

