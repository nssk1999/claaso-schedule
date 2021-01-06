const classes = document.querySelector(".classes");
const dates = document.querySelector(".dropdown-content");
var fromid = document.getElementById("addform");
// var ttle = M.FormSelect.getInstance(document.getElementById("title"));
// console.log(forme.titleioe);
var dateset = [];
document.addEventListener("DOMContentLoaded", function () {
  // dates drop-down
  var elems = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(elems, { alignment: "left" });
  // nav menu
  const menus = document.querySelectorAll(".side-menu");
  M.Sidenav.init(menus, { edge: "right" });
  // add classo form
  const forms = document.querySelectorAll(".side-form");
  M.Sidenav.init(forms, { edge: "left" });
});

// renderdates
const renderdates = (date) => {
  // var dd=new Date(data.date.seconds*1000).toLocaleDateString("en-US");

  if (
    dateset.find(function (ele) {
      return ele === date;
    }) === undefined
  ) {
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
  if (!document.getElementById("loading").classList.contains("hide")) {
    // console.log("hide-2");
    document.getElementById("loading").classList.add("hide");
    // document.getElementById("addform").classList.remove('hide');
  }

  // var dd=new Date(data.date.seconds*1000).toLocaleDateString("en-US");
  const html = `
    <div class="card-panel classo white  row"  data-id="${id}">
      <div class="classo-name center "><span class="center">${data.name[0]}</span></div>
     <!-- <img src="/img/dish.png" alt="classo thumb">-->
      <ul class="classo-details">
       <li class="classo-title">${data.name[1]}</li>
        <li class="classo-details">${data.time[0]}-${data.time[1]}</li>
        <li onclick="gURL(value)" value="${data.cid}" class="classo-details bold"><img
        src="https://www.gstatic.com/meet/meet_logo_dark_2020q4_8955caafa87e403c96e24e8aa63f2433.svg"
        alt="Google meet link"
        height="30px"
        width="70px"
      /></li>
        <li class="classo-details small">${data.date}</li>
      </ul>
      
      <div class="classo-delete hide">
        <i class="small  material-icons"  type-id="delete" data-id="${id}">delete_outline</i>
      </div>
    </div>
  `;

  classes.innerHTML += html;
};

const renderclassoauth = (data, id) => {
  // console.log("renderclaso initiated ");
  if (!document.getElementById("loading").classList.contains("hide")) {
    // console.log("hide-2");
    document.getElementById("loading").classList.add("hide");
    // if(fromid.classList.contains("hide")) document.getElementById("addform").classList.remove('hide');
  }

  // var dd=new Date(data.date.seconds*1000).toLocaleDateString("en-US");
  const html = `
    <div class="card-panel classo white  row"  data-id="${id}">
      <div class="classo-name center "><span class="center">${data.name[0]}</span></div>
     <!-- <img src="/img/dish.png" alt="classo thumb">-->
      <ul class="classo-details">
        <li class="classo-title">${data.name[1]}</li>
        <li class="classo-details">${data.time[0]}-${data.time[1]}</li>
        <li onclick="gURL(value)" value="${data.cid}" class="classo-details bold"><img
        src="https://www.gstatic.com/meet/meet_logo_dark_2020q4_8955caafa87e403c96e24e8aa63f2433.svg"
        alt="Google meet link"
        height="30px"
        width="70px"
      /></li>
        <li class="classo-details small">${data.date}</li>
      </ul>
      
      <div class="classo-delete ">
        <i class="small  material-icons"  type-id="delete" data-id="${id}">delete_outline</i>
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
