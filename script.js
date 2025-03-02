let images = document.querySelectorAll('.hero-images img');
let index = 0;

function changeImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

setInterval(changeImage, 5000);

function scrollGallery(direction) {
    const wrapper = document.querySelector(".galeri-wrapper");
    const scrollAmount = 320; // Geser sejauh 320px per klik
    wrapper.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.tentang h2, .tentang-text, .tentang-image');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });  
  }, { threshold: 0.2 });

  elements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.tentang h2, .tentang-text p, .tentang-image img, .tentang-btn');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});



document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.tentang h2, .tentang-text, .tentang-image, .layanan h2, .layanan-item');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });
  }, { threshold: 0.2 });

  elements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.galeri h2, .galeri-container p');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.galeri h2, .galeri-deskripsi');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.galeri h2, .galeri-deskripsi, .galeri-wrapper img, .lihat-selengkapnya');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah perilaku default

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Sesuaikan offset untuk header
                    behavior: "smooth" // Efek smooth scrolling
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const tombolTentangKami = document.querySelector(".tentang-btn");

    if (tombolTentangKami) {
        tombolTentangKami.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah perpindahan langsung
            document.body.classList.add("fade-out");

            setTimeout(function () {
                window.location.href = tombolTentangKami.getAttribute("href");
            }, 500); // Delay 0.5 detik agar animasi terlihat
        });
    }
});


//hamburger-menu
document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.querySelector(".menu-container");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
        menuContainer.style.display = menuContainer.style.display === "flex" ? "none" : "flex";
    });
});



