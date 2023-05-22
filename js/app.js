$(document).ready(function(){
    console.log("hey");

    // Start Our Rooms Section
    $('.magnific-popups').magnificPopup({
        type: 'image'
        // other options
      });      
    // End Our Rooms Section
});

// Start Banner 
var getbanners = document.querySelector(".banners");

function* genfun(){
  var idx = 8;

  while(true){
    yield idx++;

    if(idx > 13){
      idx = 9;
    }
  }
}

var getgen = genfun();
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);

function setbackground(){
  getbanners.style.backgroundImage = `url('./assets/img/banner/banner${getgen.next().value}.jpg')`;
  // console.log(getbanners);
}

setbackground();
setInterval(setbackground,3000);

// End banner 

// Start Our Partners 
var contenttitle = document.querySelector(".content-titles");
var contentrole = document.querySelector(".content-role");
var contentparam = document.querySelector(".content-params");

var repcontents = [
  {
    name:"V47 Fashion",
    role : "Our Fashion Partner",
    content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt cupiditate maxime deleniti quos, similique vitae, sapiente aspernatur iusto temporibus architecto cumque voluptate esse, quasi eum nobis iste doloribus repudiandae libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit vero, velit ipsa voluptatibus modi amet beatae culpa exercitationem impedit soluta quasi laborum explicabo omnis tenetur pariatur architecto saepe voluptates."
  },

  {
    name:"SkyTree Park & Restaurant",
    role : "Our Outlet",
    content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt cupiditate maxime deleniti quos, similique vitae, sapiente aspernatur iusto temporibus architecto cumque voluptate esse, quasi eum nobis iste doloribus repudiandae libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit vero, velit ipsa voluptatibus modi amet beatae culpa exercitationem impedit soluta quasi laborum explicabo omnis tenetur pariatur architecto saepe voluptates."
  },

  {
    name:"Beach Bar",
    role : "Our Beach",
    content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt cupiditate maxime deleniti quos, similique vitae, sapiente aspernatur iusto temporibus architecto cumque voluptate esse, quasi eum nobis iste doloribus repudiandae libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit vero, velit ipsa voluptatibus modi amet beatae culpa exercitationem impedit soluta quasi laborum explicabo omnis tenetur pariatur architecto saepe voluptates."
  },

  {
    name:"Cool & Freshy Swimming Pool",
    role : "Our Lexuary",
    content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt cupiditate maxime deleniti quos, similique vitae, sapiente aspernatur iusto temporibus architecto cumque voluptate esse, quasi eum nobis iste doloribus repudiandae libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit vero, velit ipsa voluptatibus modi amet beatae culpa exercitationem impedit soluta quasi laborum explicabo omnis tenetur pariatur architecto saepe voluptates."
  }
];

let idx = 0;


function partners(){

  var {name,role,content} = repcontents[idx];

  contenttitle.textContent = name;
  contentrole.textContent = role;
  contentparam.textContent = content;

  idx++;
}

partners();
setInterval(partners,10000);

// console.log(contenttitle,contentrole,contentparam);

// End Our Partners 


// Start Property Section
var getlistbtns = document.querySelectorAll(".property-lists");
var getfilters = document.querySelectorAll(".filters");
// console.log(getfilters,getlistbtns);

getlistbtns.forEach(function(getlistbtn){
  var getlistdatas = getlistbtn.getAttribute("list-data");
  // console.log(getlistdatas);

  getlistbtn.addEventListener("click",function(){
    for(var i = 0; i < getfilters.length ; i++){
      if(getfilters[i].classList.contains(this.getAttribute("list-data"))){
        // console.log("hey");
        getfilters[i].style.display = "block";
      }else{
        getfilters[i].style.display = "none";
      }
    }
  });
});
// End Property Section

// Start Contact Us Section 
// function contactus(contact,e,color){
//   var gettabboxes = document.querySelectorAll(".tabboxes");
//   var gettabbtns = document.querySelectorAll(".tabbtns");
//   console.log(gettabbtns);
//   // console.log(gettabboxes);

//   e.target.style.backgroundColor = "#fff";

//   gettabboxes.forEach(function(gettabbox){
//     if(gettabbox.classList.contains(contact)){
//       gettabbox.style.display = "block";
//       gettabbox.style.backgroundColor = color;
//       gettabbox.style.borderColor = color;

//       gettabbtns.forEach(function(gettabbtn){
//         e.target.style.backgroundColor = color;
//       });
//       // console.log(gettabbox);
//     }else{
//       gettabbox.style.display = "none";
//     }
//   })
// }

function contactus(contact,e,color){
  var gettabboxes = document.querySelectorAll(".tabboxes");
  var gettabbtns = document.querySelectorAll(".tabbtns");

  for(var i = 0 ; i < gettabboxes.length ; i++){
    gettabboxes[i].style.display = "none";
    gettabbtns[i].style.backgroundColor = "";
  }

  e.target.style.backgroundColor = color;
  document.getElementById(contact).style.backgroundColor = color;
  document.getElementById(contact).style.display = "block";
  document.getElementById(contact).style.borderColor = color;

}

document.querySelector(".tabbtns").click();
// End Contact Us Section 

// Start Footer Section
var year = new Date();
document.querySelector('.getyear').textContent = year.getUTCFullYear();
// End Footer Section

// Start Chat Box
function openform(){
  document.getElementById("mychat").style.display = "block";
}

function closeform(){
  document.getElementById("mychat").style.display = "none";
}
// End Chat Box 