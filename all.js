
const swiper = new Swiper('.mySwiper', {
allowTouchMove: false,
speed: 8000,
slidesPerView: "auto",
loop: true,
autoplay: {

    //到下一個幻燈片時，停下的時間
    delay: 0,    
    
    //避免點擊造成跑馬燈失效，視情況增加
    disableOnInteraction: false
}
}
)
