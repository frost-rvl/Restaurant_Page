import "../styles/menu.css";
import LogoS from "../images/Logo S.svg";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.classList.remove("homeWrapper", "contactWrapper");
  content.classList.add("menuWrapper");

  // --- Section 1: CTA Background ---
  const ctaSection = document.createElement("section");
  ctaSection.classList.add("cta--section");

  const ctaP = document.createElement("p");
  ctaP.textContent = "Commandez maintenant !";

  const ctaA = document.createElement("a");
  ctaA.href = "#";
  ctaA.classList.add("cta");
  ctaA.textContent = "CLICK & COLLECT";

  ctaSection.append(ctaP, ctaA);
  content.appendChild(ctaSection);

  // --- Section 2: Menu ---
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu--section", "column");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";

  const divMenu = document.createElement("div");
  divMenu.classList.add("menu--container", "column");

  const menuLogo = document.createElement("img");
  menuLogo.classList.add("menu--logo");
  menuLogo.src = LogoS;
  menuLogo.alt = "Restaurant Logo";

  const menuList = document.createElement("ul");
  menuList.classList.add("menu--list");

  const menuItems = [
    {
      name: "ENTRÉES",
      choice: [
        "Jiaozi faits maison végétariens",
        "Tofu frit",
        "Xiaolongbao à la truffe",
      ],
    },
    {
      name: "PLATS",
      choice: [
        "Biang biang mian végétariennes",
        "Soupe de nouilles au boeuf",
        "Nouilles froides au sésame",
      ],
    },
    { name: "DESSERTS", choice: ["Pudding au tofu"] },
    {
      name: "BOISSONS",
      choice: ["Taiwan Beer", "Bubble tea à la mûre", "Thé Oolong"],
    },
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu--item", "column");

    const itemName = document.createElement("h2");
    itemName.textContent = item.name;

    const menuChoices = document.createElement("ul");
    menuChoices.classList.add("menu--choices");

    item.choice.forEach((choice) => {
      const itemChoice = document.createElement("li");
      itemChoice.textContent = choice;
      menuChoices.appendChild(itemChoice);
    });

    menuItem.append(itemName, menuChoices);
    menuList.appendChild(menuItem);
  });

  divMenu.append(menuLogo, menuList);
  menuSection.append(menuTitle, divMenu);
  content.appendChild(menuSection);

  // --- Section 6: Contact ---
  const contactSection = document.createElement("section");
  contactSection.classList.add("column");

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "CONTACTEZ-NOUS";

  const contactP = document.createElement("p");
  contactP.innerHTML =
    "Vous souhaitez poser une question, nous faires un feedback, ou tout simplement nous contacter ? Écrivez-nous à <em>yummy@noodles.fr</em> ou appelez nous au <em>01 13 86 23 42</em>";

  contactSection.append(contactTitle, contactP);
  content.appendChild(contactSection);
}
