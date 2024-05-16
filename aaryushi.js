/**----------------typing animation ----------------------- */
var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Graphic Designer","Front End Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/**----------------------------------Aside------------------------------ */
const nav = document.querySelector(".nav") ,
      navlist = nav.querySelectorAll("li"),
      totalNavlist = navlist.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavlist; i++)
      {
              const a = navlist[i].querySelector("a");
              a.addEventListener("click", function()
              {
                for(let i=0; i<totalSection; i++)
                {
                    allSection[i].classList.remove("back-section");
                }    
                   for (let j=0; j<totalNavlist; j++)
                   {
                        if(navlist[j].querySelector("a").classList.contains("active"))
                        {
                            allSection[j].classList.add("back-section");
                        }
                        navlist[j].querySelector("a").classList.remove("active");
                   }
                   this.classList.add("active")
                   showSection(this);

              })
      }
      function showSection(element)
      {
           for(let i=0; i<totalSection; i++)
           {
               allSection[i].classList.remove("active");
           } 
           const target = element.getAttribute("href").split("#")[1];
           document.querySelector("#" + target).classList.add("active") 
      }
      const navtogglerBtn = document.querySelector(".nav-toggler")
          aside = document.querySelector(".aside");
          navtogglerBtn.addEventListener("click", () => 
          {
                asideSectionTogglerBtn();
          })
          function asideSectionTogglerBtn()
          {
                aside.classList.toggle("open");
          }