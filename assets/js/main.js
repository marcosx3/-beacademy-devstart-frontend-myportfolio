/* Scroll reveal - 
Mostrar o elemento quando der scroll na página */

const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset: true,
  });
  
  scrollReveal.reveal(
    `
  .hero .title, 
  .success .tag ,
  .title-success,
  .cards,
  .card,
  .about,
  .about-me .my-picture,
  .s-cases,
  .title-cases,
  .cases,
  .case,
  .s-contact,
  .title-contact,
  .footer,
  .tag .form-contact`,
    { interval: 100 }
  );