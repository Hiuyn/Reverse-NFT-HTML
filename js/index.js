// var i = 0;
// var noiDung = 'KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story, an uncharted world waiting to be explored, to be imagined.';
// var tocDo = 50;

// function hieuUngDanhChu() {
//   if (i < noiDung.length) {
//     document.getElementById("text_screen_project").innerHTML += noiDung.charAt(i);
//     i++;
//     setTimeout(hieuUngDanhChu, tocDo);
//   }
// }

// hieuUngDanhChu()

// let parallax1 = document.getElementById("parallax1");
// let parallax2 = document.getElementById("parallax2");

// window.addEventListener('scroll', () => {
//   let value = window.scrollY
//   console.log(parallax1.style.top);
//   if (value === 0) {
//     parallax1.style.top = 666 * 2.5 + 'px'
//     parallax2.style.top = 769 * 2.5 + 'px'
//   }
//   else {

//   }
//   console.log(value);
//   // parallax1.style.top = -value + 50 + 666 + 'px'
//   // parallax2.style.top = -value + 50 + 769 + 'px'
// })
function chooseCharater(e) {
    $('.charater.active').removeClass('active')
    $(`#${e}`).addClass('active')
    $(`.infor__charater_background img`).attr('src', `../image/parallax/Charater_Wall_${e}.png`)
}

var tl = gsap.timeline({ duration: 1 })
tl.fromTo("#parallax1", { y: 200 }, { y: 0 })

var tl1 = gsap.timeline({ duration: 2.5, repeat: -1, ease: "slow(0.5,0.8)" })
tl1.to('#animation_charater', { y: 0 })
    .to('#animation_charater', { y: -50 })
    .to('#animation_charater', { y: 10 })
    .to('#animation_charater', { y: 0 })

const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});