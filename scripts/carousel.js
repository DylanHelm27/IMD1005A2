let $carousel = document.getElementById('carousel')

let index = 0

function SetSlide()
{
    let $images = $carousel.querySelector('.images').children
    let $caption = $carousel.querySelector('.caption')
    console.log($images)

    if (index >= $images.length) {
        index = 0
    } else if (index < 0) {
        index = $images.length - 1
    }

    for (let i = 0; i < $images.length; i++) {
        if (i == index) {
            $images[i].classList.remove('hidden')
            let caption = $images[i].dataset.caption
            $caption.innerText = caption;

        } else {
            $images[i].classList.add('hidden')
        }
    }

}
function AdvanceSlide()
{
   index++
   SetSlide()
   clearInterval(slideInterval)
   StartSlideshow() 
}

function ReverseSlide()
{
   index++
   SetSlide()
   clearInterval(slideInterval)
   StartSlideshow() 
}
let slideInterval
function StartSlideshow() {
    slideInterval = setInterval(() => {
        index++
        SetSlide()
    }, 3000)
}

StartSlideshow()