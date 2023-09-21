const cards = document.querySelectorAll('.card');

function setCenterCard() {
  const centerX = window.innerWidth / 2;
  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    if (Math.abs(centerX - cardCenterX) <= cardRect.width / 2) {
      card.classList.add('center');
    } else {
      card.classList.remove('center');
    }
  });
}

setInterval(setCenterCard, 1000); 




function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var typed=new Typed(".auto-type",{
  strings:["Hungry!","Foodie!"],
  typeSpeed:200,
  backSpeed:250,
  loop:true
});
