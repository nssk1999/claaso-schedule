const classes = document.querySelector('.classes');
const dates = document.querySelector('.dropdown-content');
const edits = document.querySelector('.modal-content');

// console.log(forme.titleioe);
var dateset=[];
document.addEventListener('DOMContentLoaded', function() {
  // dates drop-down 
  var elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems,{alignment: 'left'});
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add classo form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
  // modal trigger
  const box=document.querySelectorAll('.modal');
  M.Modal.init(box,{
    opacity:1,
    inDuration:1000,
    outDuration:800
  });
});

// renderdates
const renderdates = (date) => {

  // var dd=new Date(data.date.seconds*1000).toLocaleDateString("en-US");
  
  
  if (dateset.find(function(ele){return ele ===date;})===undefined) {
    dateset.push(date);
    const html = `
  <li date-id="${date}" style="padding: 15%;">${date}</li>
  `;
  dates.innerHTML += html;
  } 
};

// render classo data
const renderclasso = (data, id) => {
  // console.log("renderclaso initiated ");
  if (! document.getElementById("loading").classList.contains('hide') ){
    // console.log("hide-2");
    document.getElementById("loading").classList.add('hide');
    document.getElementById("addform").classList.remove('hide');
  }
    
  // var dd=new Date(data.date.seconds*1000).toLocaleDateString("en-US");
  const html = `
    <div class="card-panel classo white  row"  data-id="${id}">
     <!-- <img src="/img/dish.png" alt="classo thumb">-->
      <div class="classo-details">
        <div class="classo-title">${data.name}</div>
        <div class="classo-details">${data.time}</div>
        <div class="classo-details">${data.details}</div>
        <div class="classo-details small">${data.date}</div>
      </div>
      <div class="classo-edit"  >
        <a href="#editpop" class="modal-trigger" data-target="editpop"><i class="material-icons  "  type-id="edit" data-id="${id}">edit</i></a>
      </div>
      <div class="classo-delete">
        <i class="material-icons"  type-id="delete" data-id="${id}">delete_outline</i>
      </div>
    </div>
  `;

  classes.innerHTML += html;

};

// remove classo
const removeclasso = (id) => {
  const classio = document.querySelector(`.classo[data-id=${id}]`);
  classio.remove();
};

// render edit form 
const renderEditset= (data,id)=>{
    // edits.innerHTML+=htt;
  document.getElementById("titleioe").value=data.name;
  document.getElementById("detailsioe").value=data.details;
  document.getElementById("dateioioe").value=data.date;
  document.getElementById("timeioioe").value=data.time;
  document.getElementById("idioe").value=id;
};
