!function(){var e=document.querySelector(".nav__link.home-link"),t=document.querySelector(".nav__link.library-link"),n=document.querySelector(".form-wrapper"),c=document.querySelector(".library-box");e.addEventListener("click",(function(r){r.preventDefault(),e.classList.add("nav__link--active"),t.classList.remove("nav__link--active"),e.blur(),c.classList.add("hidden"),n.classList.remove("hidden")}));var r=document.querySelector(".nav__link.home-link"),l=document.querySelector(".nav__link.library-link"),i=document.querySelector(".form-wrapper"),a=document.querySelector(".library-box"),o=document.querySelector("#watched-btn"),d=document.querySelector("#queue-btn");function s(e){e.preventDefault(),o.classList.toggle("accent-btn"),d.classList.toggle("accent-btn")}l.addEventListener("click",(function(e){e.preventDefault(),r.classList.remove("nav__link--active"),l.classList.add("nav__link--active"),l.blur(),a.classList.remove("hidden"),i.classList.add("hidden")})),o.addEventListener("click",s),d.addEventListener("click",s)}();
//# sourceMappingURL=index.0707c6eb.js.map
