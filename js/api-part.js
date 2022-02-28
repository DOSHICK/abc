


let btnStart = document.querySelector(".btn_green");
btnStart.onclick = function () {
  fetch('https://swapi.dev/api/people/1/')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      let output = document.querySelector(".output__table > tbody");


      const keys = Object.keys(myJson);
      const values = Object.values(myJson);

      for (let i = 0; i < keys.length; i++) {
        let createRow = document.createElement("tr");
        let createNameCell = document.createElement("td");
        let createValueCell = document.createElement("td");

        createNameCell.innerHTML = keys[i]
        createValueCell.innerHTML = values[i]

        createRow.appendChild(createNameCell);
        createRow.appendChild(createValueCell);

        output.appendChild(createRow);
      }

      changeBlocksActivity()
    });
}



