let navBar = $("body>nav");
let navBarOpenIcon = $("body>div#openIcon>i");
let navCloseIcon = $("body>nav>div:first-child>i");
let couterSec = $("#counter");
let navBarAnchor = Array.from($("body > nav > ul > li > a"));


// =========== OPEN & CLOSE NAVBAR ============================
navBarOpenIcon.click(function () {
  navBar.css({ left: 0 });
  navBarOpenIcon.css({ display: "none" });
});

navCloseIcon.click(function () {
  navBar.animate({ left: "-50%" } , 500);
  navBarOpenIcon.css({ display: "block" });
});

// ====== WINDOW SCROLL =============================================
$(window).scroll(function () {
  let wScrol = $(window).scrollTop();
  if (wScrol > couterSec.offset().top - 30) {
    navBarOpenIcon.css({ color: "black" });
  } else {
    navBarOpenIcon.css({ color: "white" });
  }
});

// ============ NAVBAR ANCHORS ================================================

navBarAnchor.forEach((anchor) => {
  let anc = $(anchor);

  anc.click((e) => {
    let attr = $(e.target).attr("href");

    let secOffset = $(attr).offset().top;

    $("body , html").animate({ scrollTop: secOffset }, 100);
  });
});

// ======== SET DURATION ==============================================

let partyDate = new Date(2023, 11, 29, 22, 0, 0);

let counterFunction = setInterval(function () {
  let dateNow = new Date();
  let counter = partyDate - dateNow;

  let days = document.querySelector(
    "#counter>div>.container>.row>div:first-child>div>span:nth-child(2)"
  );
  let hours = document.querySelector(
    "#counter>div>.container>.row>div:nth-child(2)>div>span:nth-child(2)"
  );
  let minutes = document.querySelector(
    "#counter>div>.container>.row>div:nth-child(3)>div>span:nth-child(2)"
  );
  let seconds = document.querySelector(
    "#counter>div>.container>.row>div:nth-child(4)>div>span:nth-child(2)"
  );

  let daysCount = Math.floor(counter / (1000 * 60 * 60 * 24));
  let hoursCounter = Math.floor(
    (counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesCounter = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
  let secondsCounter = Math.floor((counter % (1000 * 60)) / 1000);

  days.innerHTML = daysCount;
  hours.innerHTML = hoursCounter;
  minutes.innerHTML = minutesCounter;
  seconds.innerHTML = secondsCounter;

  if (counter < 0) {
    clearInterval(counterFunction);
    days.innerHTML = 0;
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
    document
      .querySelector("#counter .container>div:nth-child(2)")
      .css({ display: "block" });
  }
}, 1000);

/* ============ START  Acordion SECTION === =================================================== */

let content = $("#sliderDown>div>div>div");
content.slideUp();

let header = $('#sliderDown>div>div>h3')

header.click((e)=>{
    let head = $(e.target);
head.next().slideToggle();
head.parent().siblings().children('div').slideUp();


    });

// -----------------------------------
AOS.init();
