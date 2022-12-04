const navToggle = document.querySelector(".mobile-nav");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");

const slider = new A11YSlider(document.querySelector(".slider"), {
    slidesToShow: 1,
    arrows: false, // arrows enabled 767px and down
    dots: true,
    centerMode: true,
    responsive: {
      768: {
        dots: true,
        slidesToShow: 2
      },
      1280: {
        disable: false,
        slidesToShow: 4,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500

      }
    }
  });

navToggle.addEventListener('click', () => {
    navigation.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
    navigation.toggleAttribute("data-visible");
});

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});




