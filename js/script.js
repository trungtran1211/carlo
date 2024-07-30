$(".box5-list").slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  centerMode: false,
  variableWidth: false,
  prevArrow:
    '<div class="slick-prev"><i class="fa-solid fa-chevron-left"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        variableWidth: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
      },
    },
  ],
});


document.addEventListener("DOMContentLoaded", function() {
    const contents = document.querySelectorAll('.box6-content');
    let currentIndex = 0;
    const intervalTime = 5000; 
    let shouldStartNewCycle = true; 
    let cycleInterval;

    function showContent(index) {
        contents.forEach((content, i) => {
            const progressBar = content.querySelector('.progress-bar');
            const details = content.querySelector('.box6-details');
            if (i === index) {
                details.style.display = 'block';
                progressBar.style.animation = 'progress 5s linear forwards'; 
            } else {
                details.style.display = 'none';
                progressBar.style.animation = 'none'; 
            }
        });
    }

    function hideContent(index) {
        contents[index].querySelector('.box6-details').style.display = 'none';
    }

    contents.forEach((content, i) => {
        content.addEventListener('click', () => {
            shouldStartNewCycle = false; 
            clearInterval(cycleInterval);
            hideAllContentExcept(i);
            showContent(i);
            currentIndex = i;
            setTimeout(() => { shouldStartNewCycle = true; startCycle(); }, intervalTime); 
        });
    });

    function hideAllContentExcept(indexToKeep) {
        contents.forEach((content, i) => {
            if (i !== indexToKeep) {
                hideContent(i);
            }
        });
    }

    function startCycle() {
        cycleInterval = setInterval(() => {
            if (shouldStartNewCycle) { 
                hideContent(currentIndex);
                currentIndex = (currentIndex + 1) % contents.length;
                showContent(currentIndex);
            }
        }, intervalTime);
    }

    showContent(currentIndex); 
    startCycle(); 
});


document.addEventListener("DOMContentLoaded", function() {
    
    const menuIconMB = document.querySelector('.menu-item');
    const closeIcon = document.querySelector('.close-icon');
    const menuIcon = document.querySelector('.menu-icon');
    const submenuWrapper = document.querySelector('.submenu-wrapper-mb');
    const navbar = document.querySelector('.navbar-mb');
    menuIcon.addEventListener('click', function() {
        closeIcon.classList.add('close-active');
        navbar.classList.add('avtive-blur');
        submenuWrapper.classList.add('active-menu');
        menuIcon.style.display = 'none';
    });
    closeIcon.addEventListener('click', function() {
        menuIcon.style.display = 'block';
        navbar.classList.remove('avtive-blur');
        submenuWrapper.classList.remove('active-menu');
        closeIcon.classList.remove('close-active');
    })
});
