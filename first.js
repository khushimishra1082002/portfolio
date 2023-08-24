   // =========================================================================================
 
  //  Creating a responsive navbar component
 
  //=============================================================================================

   const mobile_nav = document.querySelector(".mobile-navbar-btn")
   const headerElem = document.querySelector(".header")

   mobile_nav.addEventListener("click",()=>{
    headerElem.classList.toggle("active")
   })
   
  // =========================================================================================
 
  //  Creating a portfolio tabbed component
 
  //=============================================================================================

   const p_btns = document.querySelector(".p-btns")
   console.log(p_btns);
   const p_btn = document.querySelectorAll(".p-btn")
   console.log(p_btn);
   const p_img_elem = document.querySelectorAll(".img-overlay")
   console.log(p_img_elem);

   p_btns.addEventListener("click",(e)=>{
     const p_btn_clicked = e.target
     console.log(p_btn_clicked);

     p_btn.forEach((currElem)=>{
     currElem.classList.remove("p-btn-active")
     })

    p_btn_clicked.classList.add("p-btn-active")

    //to find the number in data attribute
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    //find image
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((currElem)=>{
    currElem.classList.add("p-image-not-active")
    })

    img_active.forEach((currElem)=>{
      currElem.classList.remove("p-image-not-active")
     })

   })

  //  swipper js code

  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
      delay:2500,
      dusableOnInteraction:false
   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

   //scroll to top button
   const heroSection = document.querySelector(".section-hero")
   const footerElem = document.querySelector(".section-footer")

   const scroollElement = document.createElement("div")
   scroollElement.classList.add("scroollTop-style");

   scroollElement.innerHTML =`<ion-icon name="arrow-up-outline" class="scrooll-top"></ion-icon>`;
   footerElem.after(scroollElement)

   const scroollTop = () => {
    heroSection.scrollIntoView({ behavior : "smooth"});
   };

   scroollElement.addEventListener("click",scroollTop)


   //Animate numbers

   const counterNum = document.querySelectorAll(".counter-number");

   const speed = 200;

   counterNum.forEach((currElem) => {
    const updateNumber = () => {
      const targetNumber =  parseInt(currElem.dataset.number);
      console.log(targetNumber);
      const initialNum = parseInt(currElem.innerText)
      console.log(initialNum);

      const incrementNumber = Math.trunc(targetNumber/speed)
      console.log(incrementNumber);

      if(initialNum < targetNumber){
        currElem.innerText = `${initialNum + incrementNumber}`

        setTimeout(updateNumber,10)
      }
    };
    updateNumber();
   })

   
