import PValidator from "../pvalidaitor-1.1.1.js";

$(document).ready(function () {
  // connect lib
  const Validaitr = new PValidator();

  // Loader Site
  setInterval(() => {
    $("#preLoader").addClass("d-none");
  }, 100);

  // counter number banner
  Validaitr.Counter(".count");

  //******************************
  //??        Start Eye Btn
  //******************************

  //*Button
  let stateEye = false;
  $(".hoverBgPassWord").click((e) => {
    let toggle = () => {
      Validaitr.ToggleEyeClass(child[0], "fa-eye", "fa-eye-slash");
    };

    stateEye = !stateEye;
    const child = e.target.children;
    if (child.length) {
      stateEye ? toggle() : toggle();
    }
  });

  //*span
  document.querySelectorAll(".hoverBgPassWord span").forEach((element) => {
    element.addEventListener("click", () => {
      Validaitr.ToggleEyeClass(element, "fa-eye", "fa-eye-slash");
    });
  });

  //*******************************
  //!         end Eye Btn
  //*******************************

  //******************************
  //??        menu bergar
  //******************************

  $(".btnhumber").click(function (e) {
    e.preventDefault();
    $(".navbar").animate({ width: "300px" }, 300);
    $(".fother-nav").animate({ width: "100%" }, 300);
  });


  $(".fother-nav").click(() => {
    $(".navbar").animate({ width: "0px" }, 300);
    $(".fother-nav").animate({ width: "0px" }, 300);
  });



  //******************************
  //!        menu bergar
  //******************************

  // variablels
  var a = 0;
  function dropdownIcon(show, hide) {
    if (a == 0) {
      $(show).addClass("d-none");
      $(hide).removeClass("d-none");
      a++;
    } else {
      $(show).removeClass("d-none");
      $(hide).addClass("d-none");
      a--;
    }
  }

  //******************************
  //??        Swiper resize
  //******************************
  // resize fixeb bug aside
  function checkWindowSize() {
    if ($(window).width() < 512) {
      $(".swiper-container-azmon").attr("slides-per-view", 1.3);
    } else if ($(window).width() < 900) {
      $(".swiper-container-azmon").attr("slides-per-view", 2.3);
    } else if ($(window).width() < 1200) {
      $(".swiper-container-azmon").attr("slides-per-view", 3.3);
    } else {
      $(".swiper-container-azmon").attr("slides-per-view", 4.3);
    }
  }
  checkWindowSize();

  $(window).resize(function () {
    checkWindowSize();
  });

  //******************************
  //??        end cart
  //******************************\


  if ($('#end-cart')[0] != undefined) {
    $('#btncart').addClass('d-none')
  }

  var minutes = 24;
  var seconds = 34;

  function updateTimer() {

    var min = document.getElementById('min');
    var sec = document.getElementById('sec');

    if (minutes != 0 || seconds != 0) {

      if (seconds == 0) {
        minutes = minutes - 1
        seconds = 59;
      } else {
        seconds = seconds - 1;
      }
    }

    min.innerHTML = minutes
    sec.innerHTML = seconds

  }

  setInterval(updateTimer, 1000);

});

// slider code    
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.magicSlider div div div').innerHTML = `
<div class="owl-item active" style="width: 203.744px;">
<div class="slide-product owl-carousel-item">

  <div class="wpb_wrapper">
      <div class="wpb_single_image wpb_content_element vc_align_right">

          <figure class="wpb_wrapper vc_figure">
              <div class="vc_single_image-wrapper   vc_box_border_grey"><img loading="lazy" decoding="async"
                      width="215" height="300"
                      src="https://navaastore.com/wp-content/uploads/2024/01/amazing-2-215x300.png"
                      class="vc_single_image-img attachment-medium" alt="" title="amazing-2"
                      srcset="https://navaastore.com/wp-content/uploads/2024/01/amazing-2-215x300.png 215w, https://navaastore.com/wp-content/uploads/2024/01/amazing-2-150x210.png 150w, https://navaastore.com/wp-content/uploads/2024/01/amazing-2.png 500w"
                      sizes="(max-width: 215px) 100vw, 215px"></div>
          </figure>
      </div>
  </div>
</div>
</div>
`
  
// color code 
document.querySelectorAll(".wd-tools-count").forEach(item => item.style.cssText += 'background-color:rgb(243,174,193) !important;')
document.querySelectorAll(".meta-post-categories").forEach(item => item.style.cssText += 'background-color:rgb(243,174,193) !important;')
document.querySelectorAll(".btn-color-primary").forEach(item => item.style.cssText += 'background-color:rgb(243,174,193) !important;')
document.querySelectorAll(".woocommerce-Price-amount").forEach(item => item.style.cssText += 'color:rgb(243,174,193) !important;')
document.querySelectorAll(".btn-read-more").forEach(item => item.style.cssText += 'color:rgb(243,174,193) !important;')

})

  setTimeout(()=> {
// color code 
document.querySelectorAll(".wd-tools-count").forEach(item => item.style.cssText += 'background-color:rgb(243,174,193) !important;')
document.querySelectorAll(".woocommerce-Price-amount").forEach(item => item.style.cssText += 'color:rgb(243,174,193) !important;')
document.querySelectorAll(".btn-color-primary").forEach(item => item.style.cssText += 'background-color:rgb(243,174,193) !important;')
} , 3000)
})




