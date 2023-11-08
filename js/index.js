function chooseCharater(e) {
    $(".charater.active").removeClass("active");
    $(`#${e}`).addClass("active");
    $(`.infor__charater_background img`).attr(
        "src",
        `../image/parallax/Charater_Wall_${e}.png`
    );

    const animationCharater = document.querySelector(
        ".infor__charater_background"
    );
    const animationCharater1 = document.querySelector(
        ".infor__charater1"
    );
    const animationCharater2 = document.querySelector(
        ".infor__charater2"
    );
    const animationCharater3 = document.querySelector(
        ".infor__charater3"
    );
    gsap.set(animationCharater, { x: -1000, y: -1000, smoothChildTiming: true });
    gsap.set([animationCharater1, animationCharater2, animationCharater3], { opacity: 0, smoothChildTiming: true });

    gsap.to(animationCharater, {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "none",
        onComplete: () => {
            document.getElementById('animation_charater').style.animation = 'characterAni 2.5s linear infinite'
            gsap.to(animationCharater1, {
                opacity: 1,
                duration: 2,
                ease: "none",
            });
            gsap.to(animationCharater2, {
                opacity: 1,
                duration: 2,
                ease: "none",
            });
            gsap.to(animationCharater3, {
                opacity: 1,
                duration: 2,
                ease: "none",
            });
        }
    });
}

const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function roadmap() {
    const arrowLeftOld = document.querySelector(
        ".roadmap__box .carousel nav .prev"
    );
    const arrowRightOld = document.querySelector(
        ".roadmap__box .carousel nav .next"
    );
    const arrowLeftNew = document.querySelector(".prev-arrow");
    const arrowRightNew = document.querySelector(".next-arrow");

    const cartsTexts = document.querySelectorAll(
        ".roadmap__box .carousel figure .carousel__block .block__box"
    );

    let counter = 0;

    var carousel = document.querySelector(".carousel"),
        figure = carousel.querySelector("figure"),
        nav = carousel.querySelector("nav"),
        numImages = figure.childElementCount,
        theta = (2 * Math.PI) / numImages,
        currImage = 0;

    nav.addEventListener("click", onClick, true);

    function onClick(e) {
        e.stopPropagation();

        var t = e.target;
        if (t.tagName.toUpperCase() != "BUTTON") return;

        if (t.classList.contains("next")) {
            currImage++;
        } else {
            currImage--;
        }

        figure.style.transform = `rotateY(${currImage * -theta}rad)`;
    }

    cartsTexts[2].style.opacity = 0.3;
    cartsTexts[3].style.opacity = 0.3;

    arrowLeftNew.addEventListener("click", (e) => {
        e.preventDefault();
        arrowLeftOld.click();
        counter--;

        if (counter == 0) {
            cartsTexts[4].style.opacity = 1;
            cartsTexts[2].style.opacity = 0.2;
        } else if (counter == 1) {
            cartsTexts[0].style.opacity = 1;
            cartsTexts[3].style.opacity = 0.2;
        } else if (counter == 2) {
            cartsTexts[1].style.opacity = 1;
            cartsTexts[4].style.opacity = 0.2;
        } else if (counter == 3) {
            cartsTexts[2].style.opacity = 1;
            cartsTexts[0].style.opacity = 0.2;
        } else if (counter == 4) {
            cartsTexts[0].style.opacity = 1;
            cartsTexts[2].style.opacity = 0.2;
        } else if (counter == 5) {
            cartsTexts[1].style.opacity = 1;
            cartsTexts[3].style.opacity = 0.2;
            counter = 0;
        }
    });

    arrowRightNew.addEventListener("click", (e) => {
        e.preventDefault();
        arrowRightOld.click();
        counter++;

        if (counter == 1) {
            cartsTexts[2].style.opacity = 1;
            cartsTexts[4].style.opacity = 0.2;
        } else if (counter == 2) {
            cartsTexts[3].style.opacity = 1;
            cartsTexts[0].style.opacity = 0.2;
        } else if (counter == 3) {
            cartsTexts[4].style.opacity = 1;
            cartsTexts[1].style.opacity = 0.2;
        } else if (counter == 4) {
            cartsTexts[0].style.opacity = 1;
            cartsTexts[2].style.opacity = 0.2;
        } else if (counter == 5) {
            cartsTexts[1].style.opacity = 1;
            cartsTexts[3].style.opacity = 0.2;
            counter = 0;
        }
    });
}

function offerParallax() {
    const offerGround = document.querySelector(".inside-section1");
    const heroesV = document.querySelector(".title-section1");
    const offerFrontRocks = document.querySelector(".img-parallax");

    gsap.set([offerGround, heroesV, offerFrontRocks], { y: 0 });

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offerSection = document.querySelector(".section1");
        const offerSectionTop = offerSection.offsetTop;
        const offerSectionBottom = offerSectionTop + offerSection.offsetHeight;

        if (scrollTop >= offerSectionTop && scrollTop <= offerSectionBottom) {
            const offsetYOfferGround = (scrollTop - offerSectionTop) * 0.8;
            const offsetYHeroesV = (scrollTop - offerSectionTop) * 1.2;
            const offsetYOfferFrontRocks = -(scrollTop - offerSectionTop) * 0.2;
            gsap.to(offerGround, { duration: 1, y: offsetYOfferGround });
            gsap.to(heroesV, { duration: 1, y: offsetYHeroesV });
            gsap.to(offerFrontRocks, { duration: 1, y: offsetYOfferFrontRocks });
        }
    }

    window.addEventListener("scroll", handleScroll);

    offerBackground = document.querySelector(".background-black-section1");

    var fadeStart = 0;
    var fadeEnd = 450;

    function fadeInOut() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop <= fadeStart) {
            offerBackground.style.opacity = 0;
        } else if (scrollTop >= fadeEnd) {
            offerBackground.style.opacity = 1;
        } else {
            var opacity = (scrollTop - fadeStart) / (fadeEnd - fadeStart);
            offerBackground.style.opacity = opacity;
        }
    }

    window.addEventListener("scroll", fadeInOut);
}
function scene() {
    const centerRockLeft = document.querySelector(
        ".background-column-left-section2"
    );
    const centerRockRight = document.querySelector(
        ".background-column-right-section2"
    );
    const bottomrightRocks = document.querySelector(
        ".background-rock-right-section2"
    );
    const bottomleftRocks = document.querySelector(
        ".background-rock-left-section2"
    );
    const bottomleftBackground1 = document.querySelector(
        ".background-section2-section2"
    );
    const bottomleftBackground2 = document.querySelector(
        ".background-rectangle-section2"
    );
    if (
        bottomrightRocks &&
        bottomleftRocks &&
        centerRockLeft &&
        bottomleftBackground1 &&
        bottomleftBackground2 &&
        centerRockRight
    ) {
        function parallaxForSection() {
            gsap.set(
                [centerRockLeft, centerRockRight, bottomrightRocks, bottomleftRocks, bottomleftBackground1, bottomleftBackground2],
                { y: 0, smoothChildTiming: true }
            );


            let isFrontRocksVisibleLeft = false;
            let isFrontRocksVisibleRight = false;

            function handleScroll() {
                const bottomrighRocksRect = bottomrightRocks.getBoundingClientRect();
                const bottomleftRocksRect = bottomleftRocks.getBoundingClientRect();
                window.addEventListener("scroll", updateParallax);
                updateParallax();

                gsap.set([centerRockLeft, centerRockRight], { y: 0 });
                if (bottomrighRocksRect.top <= 0 && bottomrighRocksRect.bottom >= 0) {
                    isFrontRocksVisibleRight = true;
                } else {
                    isFrontRocksVisibleRight = false;
                }
                if (bottomleftRocksRect.top <= 0 && bottomleftRocksRect.bottom >= 0) {
                    isFrontRocksVisibleLeft = true;
                } else {
                    isFrontRocksVisibleLeft = false;
                }
            }

            function updateParallax() {
                const scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop;
                const offsetYCenterRockLeft = -scrollTop * 0.1;
                const offsetYCenterRockRight = -scrollTop * 0.1;
                const offsetYBottomRocks = -scrollTop * 0.005;
                gsap.to(centerRockLeft, {
                    duration: 1.5,
                    y: offsetYCenterRockLeft,
                    ease: "power1.out",
                });
                gsap.to(centerRockRight, {
                    duration: 1.5,
                    y: offsetYCenterRockRight,
                    ease: "power1.out",
                });
                if (!isFrontRocksVisibleLeft) {
                    gsap.to(bottomleftRocks, {
                        duration: 1.5,
                        y: offsetYBottomRocks,
                        ease: "power1.out",
                    });
                }
                if (!isFrontRocksVisibleRight) {
                    gsap.to(bottomrightRocks, {
                        duration: 1.5,
                        y: offsetYBottomRocks,
                        ease: "power1.out",
                    });
                }
            }

            window.addEventListener("scroll", handleScroll);
        }

        parallaxForSection();
    }
}
let checkVar = false
function animationCharater() {
    const animationCharater = document.querySelector(
        ".infor__charater_background"
    );
    const animationCharater1 = document.querySelector(
        ".infor__charater1"
    );
    const animationCharater2 = document.querySelector(
        ".infor__charater2"
    );
    const animationCharater3 = document.querySelector(
        ".infor__charater3"
    );
    if (animationCharater) {
        function finalAnimation() {
            gsap.set(animationCharater, { x: -1000, y: -1000, smoothChildTiming: true });
            gsap.set([animationCharater1, animationCharater2, animationCharater3], { opacity: 0 });

            let isParallaxStarted = false;
            function handleScroll() {

                const animationCharaterRun = animationCharater.getBoundingClientRect();
                window.addEventListener("scroll", animationTarget);
                animationTarget();


                if (animationCharaterRun.top <= 0 && animationCharaterRun.bottom >= 0) {
                    isParallaxStarted = true;
                } else {
                    isParallaxStarted = false;
                }
            }
            function animationTarget() {

                const scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop;
                const offsetYCenterRockLeft = - 1000 + scrollTop * 0.25;
                if (offsetYCenterRockLeft >= -350) {
                    checkVar = true
                    gsap.to(animationCharater, {
                        x: 0,
                        y: 0,
                        duration: 1.5,
                        ease: "none",
                        onComplete: () => {
                            document.getElementById('animation_charater').style.animation = 'characterAni 2.5s linear infinite'
                            gsap.to(animationCharater1, {
                                opacity: 1,
                                duration: 3,
                                ease: "none",
                            });
                            gsap.to(animationCharater2, {
                                opacity: 1,
                                duration: 3,
                                ease: "none",
                            });
                            gsap.to(animationCharater3, {
                                opacity: 1,
                                duration: 3,
                                ease: "none",
                            });
                        }
                    });
                } else {
                    gsap.to(animationCharater, {
                        x: offsetYCenterRockLeft,
                        y: offsetYCenterRockLeft,
                        duration: 1.5,
                        ease: "none",

                    });
                    document.getElementById('animation_charater').style.animation = ''
                    gsap.to(animationCharater1, {
                        opacity: 0,
                        duration: 1,
                        ease: "none",
                    });
                    gsap.to(animationCharater2, {
                        opacity: 0,
                        duration: 1,
                        ease: "none",
                    });
                    gsap.to(animationCharater3, {
                        opacity: 0,
                        duration: 1,
                        ease: "none",
                    });
                }
            }
            window.addEventListener("scroll", handleScroll);

        }
        finalAnimation()
    }
}

if (!checkVar) {
    animationCharater()
}
scene();
offerParallax();
roadmap();

for (let i = 1; i <= 2; i++) {
    $(".text-loop-run").clone().appendTo(".loop-run")
    $(".text-logo-loop-run").clone().appendTo(".logo-loop-run")
    $(".loop3-run .text-loop-run").clone().appendTo(".loop3-run")
}