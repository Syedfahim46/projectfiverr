var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.innerHTML =
    ".typewrite > .wrap { border-right: 0.08em solid gray}";
  document.body.appendChild(css);
};







$(document).ready(function () {
  $('.QuestionBoxForm__placeholder__mob').removeClass('QuestionBoxForm__placeholder--additional')
});


var inputfl = document.querySelector('.QuestionBoxForm__textbox');
$('.QuestionBoxMinimized__container').on('click', function () {
  $('.QuestionBoxForm__background').addClass('QuestionBoxForm__background--expanded')
  $('.QuestionBoxMinimized__container').addClass('QuestionBoxMinimized__container--hidden')
  $('.QuestionBoxForm__container').addClass('QuestionBoxForm__container--expanded')
  $('.QuestionBoxForm__placeholder__mob').addClass('QuestionBoxForm__placeholder--additional')
  if (!inputfl.value) {
    $('.QuestionBoxForm__placeholder__mob').css('display', 'block')

  }
  $('.QuestionBoxForm__placeholder__pc').removeClass('QuestionBoxForm__placeholder--main')
  $(".QuestionBoxForm__placeholder__pc").css('display', 'none')
  $(".QuestionBoxForm__container--expanded").addClass('d_active')
})

$('.QuestionBoxForm__header__close-button').on('click', function () {
  $(".QuestionBoxForm__container--expanded").removeClass('d_active')
  $('.QuestionBoxForm__background').removeClass('QuestionBoxForm__background--expanded')
  $('.QuestionBoxMinimized__container').removeClass('QuestionBoxMinimized__container--hidden')
  $('.QuestionBoxForm__container').removeClass('QuestionBoxForm__container--expanded')
})



$('.QuestionBoxForm__input-field').on('click', function () {
  var x = document.querySelector(".QuestionBoxForm__placeholder--main");
  var y = document.querySelector(
    ".QuestionBoxForm__placeholder--additional");
  if (x) {
    if (x.style.display === "none") {} else {
      x.style.display = "none";
      inputfl.focus();
    }
  }

  if (y) {
    if (y.style.display === "none") {} else {
      y.style.display = "none";
      inputfl.focus();
    }
  }
})
document.addEventListener('mouseup', function (e) {
  var container = document.querySelector('.QuestionBoxForm__input-field');
  var x = document.querySelector(".QuestionBoxForm__placeholder--main");

  if (x) {
    if (!container.contains(e.target)) {
      if (!inputfl.value) {
        x.style.display = "block";
      }

    }
  }

});
document.addEventListener('mouseup', function (e) {
  var container = document.querySelector('.QuestionBoxForm__input-field');
  var y = document.querySelector(
    ".QuestionBoxForm__placeholder--additional");

  if (y) {
    if (!container.contains(e.target)) {
      if (!inputfl.value) {
        y.style.display = "block";
      }

    }
  }
});





//  How it work start 
$(document).ready(function () {
  $('.black-button').on({
    'click': function () {
      $('.HowItWorksDesktop__image').css('background-image',
        'url("https://dm2302files.storage.live.com/y4mgxSmmdVmLqXYDvQg1gmKbIgsgFM5Lf_DfW5DDofPqOiEaJHM0jiF_w0J7vAaEcuYNkszo-iGZW7t_YR8G-3nwYlgHr_SbMN0K1wbyxoA7f19TzWlyOj9A4_tjDbyjG9B1Sxn5bEdJTyUz2F7awal19ZZZ3Pjs_Mfw13k5t06ZzbqJZXkAwQqMng9vAJlcIeb?width=680&height=600&cropmode=none")'
      );
      $('.HowItWorksDesktopStep__step').removeClass('HowItWorksDesktopStep__step--active')
      $(this).toggleClass('HowItWorksDesktopStep__step--active')
      console.log($(this).parent())
      $('.HowItWorksDesktop__image').toggleClass('fadeIn')

    }
  });

  $('.red-button').on({
    'click': function () {
      $('.HowItWorksDesktop__image').css('background-image',
        'url("https://dm2302files.storage.live.com/y4micSJsOgGo0mo9LncMcsLMOOmEjNAqOQrWKSSvRi1o9I-GKFmvf4ch8QBkjX1gQWZ7VleXjrIuSuGRbXu9lvQajSMr8ppp2gF3d1qzoD9Q1WYE7KjfRAHEyeRLe1TQ9TCjhb9NhV_WfPet9Oii-0haiCmjuV74jzgwPWAU-1K33KaqxitX2H6AevqQJ-t8UQG?width=680&height=615&cropmode=none")'
      );
      $('.HowItWorksDesktopStep__step').removeClass('HowItWorksDesktopStep__step--active')
      $(this).toggleClass('HowItWorksDesktopStep__step--active')
      $('.HowItWorksDesktop__image').toggleClass('fadeIn')
    }
  });
  $('.yellow-button').on({
    'click': function () {
      $('.HowItWorksDesktop__image').css('background-image',
        'url("https://dm2302files.storage.live.com/y4m3l4LdnsbtJs3IJdJPjgrMVBoROLFgMN-WzncH__vyw_LXVV3G_625sbc7JPQp4_jUWz4-7_M7-jg6fBbdYdErWL5k4EkagY8FJjYQV8n9vYFMESmC19e2ldju4gRh9oI_q96mDBMtPhPZ9ETUU09hQitbkCz4D5dFU2xYcjciz6Y3oh1j6mi1UeFIQFbfUoi?width=680&height=600&cropmode=none")'
      );
      $('.HowItWorksDesktopStep__step').removeClass('HowItWorksDesktopStep__step--active')
      $(this).toggleClass('HowItWorksDesktopStep__step--active')
      $('.HowItWorksDesktop__image').toggleClass('fadeIn')

    }
  });
});

// how it work end 

//  footer menu start 
$(document).ready(function () {
  $('.NavigationColumn__header').on('click', function () {
    $(this).next('.NavigationColumn__links').slideToggle();
  });
});


// footer menu end 


$(document).ready(function () {
  $('.black-button-mob').on('click', function () {
    $(this).children('span').toggleClass("HowItWorksMobileStep__step__arrow-icon--up")
    $('.mobBG1').toggleClass('HowItWorksMobileStep__step__line');
  });
});

$(document).ready(function () {
  $('.red-button-mob').on('click', function () {
    $(this).children('span').toggleClass("HowItWorksMobileStep__step__arrow-icon--up")
    $('.mobBG2').toggleClass('HowItWorksMobileStep__step__image HowItWorksMobileStep__step__line');
  });
});

$(document).ready(function () {
  $('.yellow-button-mob').on('click', function () {
    $(this).children('span').toggleClass("HowItWorksMobileStep__step__arrow-icon--up")
    $('.mobBG3').removeClass('HowItWorksMobileStep__step__no-image');
    $('.mobBG3').toggleClass('HowItWorksMobileStep__step__image HowItWorksMobileStep__step__line');
  });
});


// swipe slider start

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// swipe slider start





var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow_next",
    prevEl: ".arrow_prev",
  },
});