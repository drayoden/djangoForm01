// added CSSRule GSAP plugin - see js scripts in base.html
// we can now target the span:after CSS property:
var rule = CSSRulePlugin.getRule('span:after');


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
// [v1]
// gsap.from('div', {opacity: 0, duration: 1, y: -50});
// [v2] - target class 'anim1', add stagger - staggers the
// animation of all 'anim1' class elements (Very cool)
gsap.from('.anim1', {opacity: 0, duration: 1, y: -50, stagger: 0.6});

// target the img, opposite y movement:
// [v1]
// gsap.from('img', {opacity: 0, duration: 1, y: 30})
// [v2] - add delay
gsap.from('img', {opacity: 0, duration: 1, y: 30, delay: 1.4})

// added to fire the 'CSSRule above'
// each span in the h1 is revealed on the Y axis simultaneously
// very cool!
gsap.to(rule,{cssRule: {scaleY: 0}, duration: 1})

// target aside element, this shows a scroll bar until
// duration is complete (Ew!)
//gsap.from('aside', {opacity: 0, duration: 1, y: 30})

// get scroll bars on top and bottom (double Ew!)
//gsap.from('aside', {opacity: 0, duration: 1, x: 100})

// we want to animate the background 'position' not x or y.
// so we use the CSS property 'background-position' but in GSAP
// we camel case the CSS property; 'backgroundPosition'
// [v1]
// gsap.from('aside', {opacity: 0, duration: 1, backgroundPosition: '200px 0px'})

// [v2] - add delay
gsap.from('aside', {opacity: 0, duration: 1, backgroundPosition: '200px 0px', delay: 1.1})



