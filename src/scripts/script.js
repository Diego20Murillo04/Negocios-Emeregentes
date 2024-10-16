// Selecciona todos los enlaces del navbar

const navLinks = document.querySelectorAll('.nav-links a');

// Agrega un evento de clic a cada enlace

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remueve la clase "active" de todos los enclaces
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Agrega la clase "active" al enlace en el que se hizo clic
        this.classList.add('active');

        // Cierra el menú hamburguesa al hacer clic en un enlace (en móviles)
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Función para el efecto de scroll en la navbar

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Función para el menú hamburguesa

const hamburguer = document.getElementById('hamburguer');
const navMenu = document.querySelector('.nav-links');

hamburguer.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        // Remover la clase con un pequeño retraso para permitir que la transición se aplique
        navMenu.classList.remove('active');
    } else {
        // Si el menú está cerrado, mostrarlo normalmente
        navMenu.classList.add('active');
    }
});


// Funcion para mostrar la ventana emergente en pantalla

function openPopup() {
    document.getElementById('popup').classList.add('active');
}

// Funcion para cerrar la ventana emergente

function closePopup() {
    document.getElementById('popup').classList.remove('active');
}

// Funcion que fusiona los contenidos

function mergeBannerElements() {
    // Selecciona todos los elementos con la clase '.banner-title'
    const bannersTitle = document.querySelectorAll('.banner-title');
    const bannersTitle2 = document.querySelectorAll('.banner-title-2');

    // Aplica la fusión a los elementos '.banner-title'
    bannersTitle.forEach(banner => {
        const subhalfBanner = banner.querySelector('.subhalf-banner');
        const subhalfBannerText = banner.querySelector('.subhalf-banner-text');

        if (window.innerWidth <= 865 && subhalfBanner && subhalfBannerText && !banner.querySelector('.merged-banner')) {
            const mergedBanner = document.createElement('div');
            mergedBanner.classList.add('merged-banner');
            mergedBanner.innerHTML = `
                <img src="${subhalfBanner.querySelector('img').src}" alt="${subhalfBanner.querySelector('img').alt}">
                <p>${subhalfBannerText.querySelector('p').textContent}</p>
            `;

            subhalfBanner.remove();
            subhalfBannerText.remove();
            banner.appendChild(mergedBanner);
        }
    });

    // Aplica la fusión a los elementos '.banner-title-2'
    bannersTitle2.forEach(banner => {
        const subhalfBanner2 = banner.querySelector('.subhalf-banner-2');
        const subhalfBannerText2 = banner.querySelector('.subhalf-banner-text-2');

        if (window.innerWidth <= 865 && subhalfBanner2 && subhalfBannerText2 && !banner.querySelector('.merged-banner')) {
            const mergedBanner2 = document.createElement('div');
            mergedBanner2.classList.add('merged-banner');
            mergedBanner2.innerHTML = `
                <img src="${subhalfBanner2.querySelector('img').src}" alt="${subhalfBanner2.querySelector('img').alt}">
                <p>${subhalfBannerText2.querySelector('p').textContent}</p>
            `;

            subhalfBanner2.remove();
            subhalfBannerText2.remove();
            banner.appendChild(mergedBanner2);
        }
    });
}

// Ejecutar la función al cargar la página
window.addEventListener('load', mergeBannerElements);

// Ejecutar la función cuando se cambi el tamaño de la ventana
window.addEventListener('resize', mergeBannerElements);

// Swiper JS

document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper('.mySwiper', {
        effect: 'cards',
        grabCursor: true,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });
});