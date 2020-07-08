// the 'timeline' way...

var rule = CSSRulePlugin.getRule('span:after');

// setup common properties, i.e. duration:
var tl = gsap.timeline({defaults: {duration: 1}})

tl.from(".anim1", {opacity: 0, y: -50, stagger: 0.6})
    .to(rule, {duration: 1.8, cssRule: {scaleY: 0}}, "-=2.2")
    .from('aside', {opacity: 0, backgroundPosition: '200px 0px'}, "-=1.5")
    .from('img', {opacity: 0, y: 50}, "-=0.5");  

// can reverse the entire timeline...
// document.getElementById('cta').addEventListener('click', () => {
//     tl.reversed() ? tl.play() : tl.reverse()
// })

// page1 - gsap rotation...
// change second property (int) for speed
gsap.to('.prop', 3, {rotation: 360, transformOrigin:'center', repeat: -1, paused: false, ease:Linear.easeNone});