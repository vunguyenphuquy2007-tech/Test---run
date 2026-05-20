const reveals = document.querySelectorAll("section");

function reveal(){

  reveals.forEach(section => {

    const windowHeight = window.innerHeight;

    const top = section.getBoundingClientRect().top;

    if(top < windowHeight - 150){

      section.classList.add("active");

    }

  });

}

reveals.forEach(section => {
  section.classList.add("reveal");
});

window.addEventListener("scroll", reveal);

reveal();