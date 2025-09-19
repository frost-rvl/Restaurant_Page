import "../styles/contact.css";

export default function loadContact() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.classList.remove("homeWrapper", "menuWrapper");
  content.classList.add("contactWrapper");

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

  // --- Section 2: Nos addresses ---
  const addressSection = document.createElement("section");
  addressSection.classList.add("address--section");

  const addressTitle = document.createElement("h1");
  addressTitle.textContent = "Nos adresses";

  const addressUl = document.createElement("ul");
  addressUl.classList.add("address--list", "column");

  const addressList = [
    {
      name: "Yummy noodle",
      addr: "185 rue de Lancry 75010 Paris",
      tel: "+331 44 33 55 22",
      time: "Lundi à Dimanche - 12h à 23h",
    },
    {
      name: "Yu Noodle My",
      addr: "350 rue Saint-Guillaume 75007 Paris",
      tel: "+331 44 33 55 22",
      time: "Lundi à Dimanche - 12h à 22h",
    },
    {
      name: "Les Yummy Nouilles",
      addr: "208 rue au Maire",
      tel: "+331 44 33 55 22",
      time: "Lundi à Dimanche - 12h à 23h",
    },
  ];

  addressList.forEach((restaurant) => {
    const addressLi = document.createElement("li");
    addressLi.classList.add("address--item", "column");

    const addressName = document.createElement("em");
    addressName.textContent = restaurant.name;

    const addressAddr = document.createElement("address");
    addressAddr.textContent = restaurant.addr;

    const addressTel = document.createElement("address");
    addressTel.textContent = restaurant.tel;

    const addressTime = document.createElement("p");
    addressTime.textContent = restaurant.time;

    addressLi.append(addressName, addressAddr, addressTel, addressTime);
    addressUl.append(addressLi);
  });

  addressSection.append(addressTitle, addressUl);
  content.appendChild(addressSection);

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
