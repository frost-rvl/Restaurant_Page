import "./style.css";

import loadHome from "./scripts/home_module.js";
import loadMenu from "./scripts/menu_module.js";
import loadContact from "./scripts/contact_module.js";

//initial load
loadHome();

document.getElementById("home").addEventListener("click", loadHome);
document.getElementById("menu").addEventListener("click", loadMenu);
document.getElementById("contact").addEventListener("click", loadContact);
