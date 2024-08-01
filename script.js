
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
function navAnimation() {
    var nav = document.querySelector("nav")
    
    nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()
    
    tl.to("#nav-bottom", {
    height: "21vh",
    duration: 0.5
    })
    tl.to(".nav-part2 h5", {
    display: "block",
    duration: 0.1
    
    })
    tl.to(".nav-part2 h5 span", {
    y: 0,
    // duration:0.3,
    stagger: {
    amount: 0.5
    }
    })
    })
    nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
    y: 25,
    stagger: {
    amount: 0.2
    }
    })
    tl.to(".nav-part2 h5", {
    display: "none",
    duration: 0.1
    })
    tl.to("#nav-bottom", {
    height: 0,
    duration: 0.2
    })
    })
    }
    function page2animation(){
    let rightelem=document.querySelectorAll('.rightelem')
    rightelem.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
    
    gsap.to(elem.childNodes[3],{
    opacity:1,
    
    })
    
    })
    
    elem.addEventListener('mouseleave',function(){
    gsap.to(elem.childNodes[3],{
    opacity:0,
    
    })
    
    elem.addEventListener('mousemove',function(dets){
    gsap.to(elem.childNodes[3],{
    x:dets.x-elem.getBoundingClientRect().x-60,
    y:dets.y-elem.getBoundingClientRect().y-120,
    })
    })
    
    
    })
    })
    
    }
    
    function page3animation(){
    let play=document.querySelector('#center');
    let video=document.querySelector('#page3 video');
    play.addEventListener('click',function(){
    video.play()
    gsap.to(video,{
    transform:'scaleX(1) scaleY(1)',
    opacity:1,
    borderRadius:0
    })
    })
    
    video.addEventListener('click',function(){
    video.pause()
    gsap.to(video,{
    transform:'scaleX(0.7) scaleY(0)',
    opacity:0,
    borderRadius:'30px'
    })
    })
    }
    
    function sectionanimation(){
    var section=document.querySelectorAll(".sec-right")
    
    section.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity=1;
    elem.childNodes[3].play();
    
    })
    elem.addEventListener("mouseleave",function(){
    elem.childNodes[3].style.opacity=0;
    elem.childNodes[3].load();
    
    })
    
    })
    
    }
    
    function section (){
    var section=document.querySelectorAll(".sec2")
    
    section.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
    elem.style.borderTop = "1px solid #8c8686";
    elem.childNodes[5].play();
    elem.childNodes[5].style.height="100%"
    elem.childNodes[3].style.opacity="0"
    elem.childNodes[1].style.opacity="0"
    })
    elem.addEventListener("mouseleave",function(){
    
    elem.style.borderTop = "2px solid #111";
    elem.childNodes[5].style.height="60%"
    elem.childNodes[3].style.opacity="1"
    elem.childNodes[1].style.opacity="1"
    elem.childNodes[5].load();
    })
    
    })
    
    
    }
    
function page6Animations() {
    gsap.from("#btm8-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm8-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

locomotiveAnimation()

    
    section ()
    page2animation()
    navAnimation()
    page3animation()
    sectionanimation()
    page6Animations()
