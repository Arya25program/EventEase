const events=[
  {id:1,title:'Sunburn Music Festival',type:'Concert',location:'Goa',price:4500,date:'2025-12-18',rating:4.8,img:'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=60'},
  {id:2,title:'AI & ML Workshop',type:'Workshop',location:'Bangalore',price:999,date:'2025-11-21',rating:4.5,img:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=60'},
  {id:3,title:'Film and Food Festival',type:'Festival',location:'Mumbai',price:2500,date:'2025-12-03',rating:4.6,img:'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=60'},
  {id:4,title:'Bengaluru Tech Summit 2025',type:'Conference',location:'Bengaluru',price:0,date:'2025-11-18',rating:4.7,img:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=60'},
  {id:5,title:'SAP TechEd on Tour Bengaluru',type:'Workshop/Conference',location:'Bengaluru',price:0,date:'2025-11-25',rating:4.5,img:'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=800&q=60'},
  {id:6,title:'DevFest Bengaluru 2025',type:'Workshop/Meetup',location:'Bengaluru',price:0,date:'2025-12-06',rating:4.4,img:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=60'}
];
const $=sel=>document.querySelector(sel);
function renderGrid(list){
  const grid=$('#grid');grid.innerHTML='';
  if(!list.length){$('#noResults').style.display='block';$('#count').textContent=0;return}
  $('#noResults').style.display='none';$('#count').textContent=list.length;
  list.forEach(e=>{
    const card=document.createElement('div');card.className='card';
    card.innerHTML=`<div class="media"><img src="${e.img}"/></div><div class="card-body"><div class="title">${e.title}</div><div class="meta">${e.location} • ${e.type}</div><div class="price-row"><span>₹ ${e.price}</span><button class="btn alt viewBtn" data-id="${e.id}">View</button></div></div>`;
    grid.appendChild(card);
  })
}
$('#toggleDark').addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  $('#toggleDark').textContent=document.body.classList.contains('dark')?'☀️ Light Mode':'🌙 Dark Mode';
});
renderGrid(events);