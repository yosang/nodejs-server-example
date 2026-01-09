// CRUD

// CREATE

// READ
document.addEventListener("DOMContentLoaded", async () => {
  const contentDiv = document.getElementById("content");

  const response = await fetch("http://localhost:3001/pizzas");
  const data = await response.json();

  if (!response.ok) {
    console.log("Fetch failed");
  }

  data.forEach((item) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <p>${item.name}</p>
    <img src="${item.image}" width="200" height="200">
    `;

    contentDiv.appendChild(div);
  });
});

// UPDATE

// DELETE
