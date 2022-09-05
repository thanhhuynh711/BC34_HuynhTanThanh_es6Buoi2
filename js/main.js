let dataGlasses = [
  {
    id: "G1",
    src: "./../img/g1.jpg",
    virtualImg: "./../img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./../img/g2.jpg",
    virtualImg: "./../img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./../img/g3.jpg",
    virtualImg: "./../img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./../img/g4.jpg",
    virtualImg: "./../img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./../img/g5.jpg",
    virtualImg: "./../img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./../img/g6.jpg",
    virtualImg: "./../img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./../img/v7.png",
    virtualImg: "./../img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./../img/g8.jpg",
    virtualImg: "./../img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./../img/g9.jpg",
    virtualImg: "./../img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

let content = "";
for (let i of dataGlasses) {
  content += `
  <button class="btn-kinh col-md-4">
  <img style="width: 100%;" src="${i.src}" ></img>
  </button>
  `;
}
document.getElementById("vglassesList").innerHTML = content;

let home = document.querySelectorAll(".btn-kinh");

for (let i in dataGlasses) {
  home[i].onclick = () => {
    document.querySelector(".vglasses__info").style.display = "block";
    document.getElementById(
      "avatar"
    ).innerHTML = `<img src="${dataGlasses[i].virtualImg}" alt="">`;
    document.getElementById("glassesInfo").innerHTML = `
        <h4>${dataGlasses[i].name} - ${dataGlasses[i].brand} (${dataGlasses[i].color})</h4> 
        <div style="background-color: red; padding: 6px 10px; border-radius: 4px; display: inline-block;">$${dataGlasses[i].price}</div>
        <span style="color: #009688;">Stocking</span>
        <p style="margin-top: 10px;">${dataGlasses[i].description}</p>
    `;
  };
}
