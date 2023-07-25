//import "./styles.css";

const form = document.getElementById("show-form");
const showList = document.getElementById("show-list");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let showQuery = document.getElementById("input-show").value;

  try {
    let response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${showQuery}`
    );
    let shows = await response.json();

    showList.innerHTML = "";
    shows.forEach((show) => {
      let div = document.createElement("div");
      div.classList.add("show-data");
      div.innerHTML = `
                  <img src="${
                    show.show.image
                      ? show.show.image.medium
                      : "http://placehold.it/210x295"
                  }">
                  <div class="show-info">
                      <h1>${show.show.name}</h1>
                      ${show.show.summary}
                  </div>
              `;
      showList.appendChild(div);
    });
  } catch (error) {
    console.error("Error:", error);
  }
});
