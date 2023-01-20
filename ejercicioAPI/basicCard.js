const basicCard = (array) => {
  const section = document.createElement("section");
  section.classList.add("container", "my-5");
  document.body.appendChild(section);

  const container = document.createElement("div");
  container.classList.add("row", "justify-content-around");
  section.appendChild(container);

  const title = document.createElement("h1");
  title.textContent = "Characters";
  container.classList.add("justify-content-center", "align-middle");
  container.appendChild(title);

     array.forEach((element) => {
    const card = document.createElement("div");
    card.id = element.id;
    card.classList.add(
      "card",
      "m-3",
      "col-5",
      "bg-secondary",
      "d-flex",
      "flex-row"
    );
    card.style = "width: 28rem;";
    container.appendChild(card);
    // // image
    const cardImage = document.createElement("img");
    cardImage.src = element.image;
    cardImage.classList.add("card-img-top", "mt-1", "m-2", "rounded");
    card.appendChild(cardImage);
    // //card Body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    // //title
    const title = document.createElement("h5");
    title.textContent = `Name: ${element.name}`;
    title.classList.add("card-title", "d-block", "my-3");
    cardBody.appendChild(title);
    
    const verMas = document.createElement("Button");
    verMas.textContent = "Ver mas"
    verMas.classList.add("btn", "btn-primary", "my-2", "d-block", "verMasButton")
    verMas.id = element.id
    title.appendChild(verMas);
  });
};

export default basicCard;
