  const counters = document.querySelectorAll('.stat-number');
  let started = false;

  function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const showPlus = counter.dataset.plus === "true";
    const speed = 100;
    const step = Math.ceil(target / speed);

    let current = 0;
    const updateCount = () => {
      if (current < target) {
        current += step;
        if (current > target) current = target;
        counter.textContent = current.toLocaleString() + (showPlus ? "+" : "");
        requestAnimationFrame(updateCount);
      }
    };
    updateCount();
  }

  function handleScroll() {
    const section = document.querySelector('.stats-section');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && !started) {
      started = true;
      counters.forEach(counter => animateCounter(counter));
    }
  }

  window.addEventListener('scroll', handleScroll);







  /*=============== CARD POPUP JS ===============*/
const modal = document.querySelectorAll('.modal'),
      cardBtn = document.querySelectorAll('.card__product'),
      modalClose = document.querySelectorAll('.modal__close'),
      modalCard = document.querySelectorAll('.modal__card')

let activeModal = (modalClick) =>{
   modal[modalClick].classList.add('active-modal')
}

/* Show modal */
cardBtn.forEach((cardBtn, i) =>{
   cardBtn.addEventListener('click', () =>{
      activeModal(i)
   })
})

/* Hide modal */
modalClose.forEach((modalClose) =>{
   modalClose.addEventListener('click', () => {
       modal.forEach((modalRemove) => {
           modalRemove.classList.remove('active-modal')
       })
   })
})

/* Hide modal on background click */
modal.forEach((modal) =>{
   modal.addEventListener('click', () =>{
      modal.classList.remove('active-modal')
   })
})

/* Don't hide modal on card click (by event propagation) */
modalCard.forEach((modalCard) =>{
   modalCard.addEventListener('click', (e) =>{
      e.stopPropagation()
   })
})