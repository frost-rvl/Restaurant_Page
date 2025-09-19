import "../styles/home.css";
import LogoXL from "../images/Logo XL.svg";
import YummyDeLancry from "../images/adresses/Facade_Yummy_Nouille_1_1_20.png";
import YummyDeSaintGuillaume from "../images/adresses/Facade_Yummy_Nouille_2_1_18.png";
import YummyDeMaire from "../images/adresses/Facade_Yummy_Nouille_3_1_34.png";
import Img1 from "../images/social_media_photos/Yummy Nouilles img 1.png";
import Img2 from "../images/social_media_photos/Yummy Nouilles img 2.png";
import Img3 from "../images/social_media_photos/Yummy Nouilles img 3.png";
import Img4 from "../images/social_media_photos/Yummy Nouilles img 4.png";
import Img5 from "../images/social_media_photos/Yummy Nouilles img 5.png";
import Img6 from "../images/social_media_photos/Yummy Nouilles img 6.png";

const social_Grid_src = [Img1, Img2, Img3, Img4, Img5, Img6];

export default function loadHome() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.classList.remove("menuWrapper", "contactWrapper");
  content.classList.add("homeWrapper");

  // --- Section 1: Hero ---
  const heroSection = document.createElement("section");
  heroSection.classList.add("column");

  const heroDiv = document.createElement("div");

  const heroTitle = document.createElement("h1");
  heroTitle.textContent = "Yummy Nouilles";

  const heroP = document.createElement("p");
  heroP.innerHTML =
    "Les nouilles les plus <strong>yummy</strong> de tout Paris";
  // innerHTML needed here only for <strong>, otherwise use textContent

  const heroCta = document.createElement("a");
  heroCta.href = "#";
  heroCta.classList.add("cta");
  heroCta.textContent = "CLICK & COLLECT";

  heroDiv.append(heroTitle, heroP, heroCta);

  const heroImg = document.createElement("img");
  heroImg.src = LogoXL;

  heroSection.append(heroDiv, heroImg);

  content.appendChild(heroSection);

  // --- Section 2: Addresses ---
  const addressesSection = document.createElement("section");
  addressesSection.classList.add("column");

  const addressesTitle = document.createElement("h2");
  addressesTitle.textContent = "NOS ADRESSES";

  const addressesContainer = document.createElement("div");
  addressesContainer.classList.add("column");

  const addressesData = [
    {
      img: YummyDeLancry,
      alt: "Yummy Noddle de Lancry",
      name: "Yummy Noodle",
      address: "185 rue de Lancry \n75010 Paris",
    },
    {
      img: YummyDeSaintGuillaume,
      alt: "Yu Noodle My de Saint-Guillaume",
      name: "Yu Noodle My",
      address: "350 rue Saint-Guillaume \n75007 Paris",
    },
    {
      img: YummyDeMaire,
      alt: "Les Yummy Nouilles de Maire",
      name: "Les Yummy Nouilles",
      address: "208 rue au Maire \n75003 Paris",
    },
  ];

  addressesData.forEach((item) => {
    const addrDiv = document.createElement("div");
    addrDiv.classList.add("column");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.alt;

    const em = document.createElement("em");
    em.textContent = item.name;

    const address = document.createElement("address");
    address.innerHTML = item.address.replace(/\n/g, "<br>");

    addrDiv.append(img, em, address);
    addressesContainer.appendChild(addrDiv);
  });

  addressesSection.append(addressesTitle, addressesContainer);
  content.appendChild(addressesSection);

  // --- Section 3: CTA Background ---
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

  // --- Section 4: Savoir-Faire ---
  const savoirSection = document.createElement("section");
  savoirSection.classList.add("column");

  const savoirTitle = document.createElement("h2");
  savoirTitle.textContent = "NOTRE SAVOIR_FAIRE";

  const savoirP = document.createElement("p");
  savoirP.textContent =
    "Depuis près de 10 ans maintenant, nous partageons avec vous les meilleures recettes. Nos plats ont tous été conçus, et affinés au fil des années et des goûts. Nous vous apportons le meilleur de l’Asie de l’Est en plein coeur de Paris. Chaque année, nous reprenons tous nos plats pour les améliorer, les modifier et qu’ils vous plaisent toujours plus. Nous espérons que vous vous régalerez en dégustant nos plats.";

  savoirSection.append(savoirTitle, savoirP);
  content.appendChild(savoirSection);

  // --- Section 5: Social Media ---
  const socialSection = document.createElement("section");
  socialSection.classList.add("column");

  const socialTitle = document.createElement("h2");
  socialTitle.textContent = "RETROUVEZ_NOUS SUR LES RÉSEAUX SOCIAUX";

  const socialGrid = document.createElement("div");
  socialGrid.classList.add("grid--social_images");

  social_Grid_src.forEach((item) => {
    const img = document.createElement("img");
    img.src = item;
    socialGrid.appendChild(img);
  });

  socialSection.append(socialTitle, socialGrid);
  content.appendChild(socialSection);

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
