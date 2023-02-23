const slides = document.querySelectorAll('.slider_item'), 
next = document.querySelector('.next'),
prev = document.querySelector('.prev'),
sliderWrapper = document.querySelector('.slider_wrapper'),
sliderField = document.querySelector('.slider-inner'),
width = window.getComputedStyle(sliderWrapper).width,
pagination = document.querySelector('.container')


let slideIndex = 1
let offset = 0

sliderField.style.width = 100 * slides.length + '%'
sliderField.style.display = 'flex'
sliderField.style.transition = '.5s ease all'
sliderWrapper.style.overflow = 'hidden'

slides.forEach(slide => {
  slide.style.width = width
})

const indicotors = document.createElement('ol')
const dots = []
indicotors.classList.add('corusel-indicotors')
pagination.append(indicotors)

for(let i = 0 ;i < slides.length; i++){
  const dot = document.createElement('li')
  dot.setAttribute('date-slide-to',i +1)
  dot.classList.add('corusel-dot')
  if (i == 0) {dot.style.opacity = 1}
  indicotors.append(dot)
  dots.push(dot)
}

next.addEventListener('click', () => {
  if (offset == +width.slice(0,width.length -2) * (slides.length - 1)) {
    offset = 0 
  } else{
    offset += +width.slice(0,width.length -2)
  }

  sliderField.style.transform = `translateX(-${offset}px)`

   if (slideIndex == slides.length) {
    slideIndex = 1
   } else{
    slideIndex++
   }

  dots.forEach(dot => dot.style.opacity = '.5')
  dots[slideIndex -1].style.opacity = 1
})

prev.addEventListener('click', () => {
  if (offset == 0 ) {
    offset = +width.slice(0,width.length -2) * (slides.length - 1)
  } else{
    offset -= +width.slice(0,width.length -2)
  }
  sliderField.style.transform = `translateX( -${offset}px )`

  if (slideIndex == 1) {
    slideIndex = slides.length
   } else{
    slideIndex--
   }

  dots.forEach(dot => dot.style.opacity = '.5')
  dots[slideIndex -1].style.opacity = 1


})
dots.forEach(dot => {
  dot.addEventListener('click',(e) => {
    const slideTo = e.target.getAttribute('data-slide-to')

   slideIndex = slideTo
   offset =  +width.slice(0,width.length -2) * (slideTo - 1)
   sliderField.style.transform = `translateX( -${offset}px )`
   dots.forEach(dot => dot.style.opacity = '.5')
   dots[slideIndex -1].style.opacity = 1
 

  })
})