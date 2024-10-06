const header = document.querySelector("header")
let lsp = window.scrollY
window.addEventListener("scroll", function(){
    const stp = window.scrollY
    if (stp > lsp) {
        if (lsp > 150) {
            header.style.cssText = "transform: translateY(-100%);"
        }
    }else if (stp < lsp) {
        header.style.cssText = "transform: translateY(0%);"
    }
    lsp = stp
})
// header animation
const i = document.querySelector("header i");
const nav = document.querySelector("header nav");
i.onclick = () => {
    nav.classList.toggle("navanimation")
};
const nava = document.querySelectorAll("nav a")
nava.forEach(a =>{
    a.onclick = () =>{
        nav.classList.remove("navanimation")
    } 
})
document.addEventListener("click", function(e){
    if (e.target.className != "navanimation" && e.target != i){
        nav.classList.remove("navanimation")
    }
})
// nav animation
const observer = new IntersectionObserver( entries =>{
        entries.forEach(ent =>{
            if (ent.isIntersecting) {
                ent.target.classList.add("cardanimation")
            }
            else{
                ent.target.classList.remove("cardanimation")
            }
        })
    },
    {threshold: 1, rootMargin: "-20% 0%"}
)
const cards = document.querySelectorAll(".card")
cards.forEach(card => {observer.observe(card)})
// card animation
// const wp= document.querySelector(".wproject")
// const mp= document.querySelector(".mproject")
// const b1= document.querySelector(".w")
// const b2= document.querySelector(".m")
// const activ = document.querySelector(".activ")
// b2.onclick = ()=>{
//     wp.style.cssText = "transform: translateX(-100%)"
//     mp.style.cssText = "transform: translateX(0%)"
//     activ.style.cssText = "transform: translateX(100%)"
// }
// b1.onclick = ()=>{
//     wp.style.cssText = "transform: translateX(0%)"
//     mp.style.cssText = "transform: translateX(100%)"
//     activ.style.cssText = "transform: translateX(0%)"
// }
const pro = document.querySelectorAll(".pro div")
sk = new IntersectionObserver(entries =>{
    entries.forEach(e=>{
        if (e.isIntersecting) {
            pro.forEach(pro =>{
                width = pro.innerHTML
                pro.style.width = width 
            })
        }else{
            pro.forEach(pro =>{
                pro.style.width = 0
            })
        }
    })
},{threshold: 0.5, rootMargin: "-20% 0%"} )
s = document.querySelector(".skil")
sk.observe(s)
// animation skils
const pcard = document.querySelectorAll(".project-cards")
const apikey = "AIzaSyAiuNMGpeZxVdBS9Uq5I3QDiibjaiLlk64"
const channelid = "UCZengxGV4oEs4JhWsZra9nA"
const ubload = "UUZengxGV4oEs4JhWsZra9nA" 
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${ubload}&key=${apikey}`
fetch(url).then(result=>{
    result.json().then(data=>{
        const video = data.items
        for (let i = 0; i < pcard.length; i++) {
            cainh = `<a target="blank" href="https://www.youtube.com/watch?v=${video[i].snippet.resourceId.videoId}">
            <img width="90%" src="${video[i].snippet.thumbnails.maxres.url}"> 
            ${pcard[i].innerHTML= video[i].snippet.title}</a>`
            pcard[i].innerHTML = cainh
            if (pcard[i].innerHTML== cainh) {
                pcard[i].classList.remove("load-animation")
            }
        }
    })
})
// get youtube video