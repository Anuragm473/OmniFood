const year=document.querySelector(".year")
const date=new Date().getFullYear()
year.textContent=date
const navel=document.querySelector(".mobile--btn")
const headerel=document.querySelector(".header")
navel.addEventListener('click',()=>{
    headerel.classList.toggle('nav-open')
})

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);