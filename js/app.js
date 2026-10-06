
const nav = document.querySelector('.nav');
document.querySelector('.menu-btn')?.addEventListener('click', ()=> nav?.classList.toggle('open'));

document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const type=btn.dataset.filter;
    document.querySelectorAll('[data-room-type]').forEach(card=>{
      card.style.display=(type==='all'||card.dataset.roomType===type)?'':'none';
    });
  });
});

const lightbox=document.querySelector('.lightbox');
const lightImg=lightbox?.querySelector('img');
document.querySelectorAll('.gallery-item img').forEach(img=>{
  img.addEventListener('click',()=>{
    if(!lightbox||!lightImg)return;
    lightImg.src=img.src;
    lightImg.alt=img.alt;
    lightbox.classList.add('open');
  });
});
lightbox?.querySelector('button')?.addEventListener('click',()=>lightbox.classList.remove('open'));
lightbox?.addEventListener('click',e=>{if(e.target===lightbox) lightbox.classList.remove('open')});

const booking=document.querySelector('#booking-form');
booking?.addEventListener('submit',e=>{
  e.preventDefault();
  const status=document.querySelector('#booking-status');
  if(status) status.textContent="Merci. Votre demande de réservation a bien été prise en compte. Notre équipe vous recontactera pour confirmer les disponibilités.";
});

const contact=document.querySelector('#contact-form');
contact?.addEventListener('submit',e=>{
  e.preventDefault();
  const status=document.querySelector('#contact-status');
  if(status) status.textContent="Merci pour votre message. Notre équipe vous répondra dans les meilleurs délais.";
});

document.querySelectorAll('input[type="date"]').forEach(input=>{
  const now=new Date();
  const yyyy=now.getFullYear();
  const mm=String(now.getMonth()+1).padStart(2,'0');
  const dd=String(now.getDate()).padStart(2,'0');
  input.min=`${yyyy}-${mm}-${dd}`;
});
