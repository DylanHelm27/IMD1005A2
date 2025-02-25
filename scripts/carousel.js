let $carousel = document.getElementById('carousel')

let index = 0
setInterval(() => {
    let $images = $carousel.querySelector('.images').children
    console.log($images)

    index++
    if (index >= $images.length) {
        index = 0
    }

    for (let i = 0; i < $images.length; i++) {
        if (i == index) {
            $images[i].classList.remove('hidden')
        } else {
            $images[i].classList.add('hidden')
        }
    }


}, 1000)