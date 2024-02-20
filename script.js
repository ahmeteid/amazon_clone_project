const imgs = document.querySelectorAll(".header-slider ul img");
const prevBtn = document.querySelector(".control-prev");
const nextBtn = document.querySelector(".control-next");
const scrollContainer = document.querySelectorAll(".products-slider .products");
const scrollDeals = document.querySelectorAll(".product-slider-with-price .products");

let n = 0; // n = currentIndexImage (index of image)

function changeSlide() {
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}
// changeSlide();

nextBtn.addEventListener("click", (e) => {
    if(n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})

prevBtn.addEventListener("click", (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
})

// Scroll For Products Section
for(const item of scrollContainer) {
    item.addEventListener("wheel", (evt)=> {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}

// Scroll For Deals section
for(const item of scrollDeals) {
    item.addEventListener("wheel", (evt)=> {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}