
// starts at opacity 0 (invisible) and over 'duration' the 
// div block transitions opacity to 1 and moves in the 
// negative y (down) direction.
//gsap.from('div', {opacity: 0, duration: 1, y: -50})

// flip of the last - goes backwards...
//gsap.to('div', {opacity: 0, duration: 1, y: -50})

// add various easing properties
//      Power2.easeInOut
//      elastic(1,0.3)
//gsap.from('div', {opacity: 0, duration: 1, y: -50, ease: 'elastic(1,0.3)'})

gsap.from('div', {opacity: 0, duration: 1, y: -50})

// target the img, opposite y movement:
gsap.from('img', {opacity: 0, duration: 1, y: 30})

// target aside element, this shows a scroll bar until
// duration is complete (Ew!)
//gsap.from('aside', {opacity: 0, duration: 1, y: 30})

// get scroll bars on top and bottom (double Ew!)
//gsap.from('aside', {opacity: 0, duration: 1, x: 100})

// we want to animate the background 'position' not x or y.
// so we use the CSS property 'background-position' but in GSAP
// we camel case the CSS property; 'backgroundPosition'
gsap.from('aside', {opacity: 0, duration: 1, backgroundPosition: '200px 0px'})




