// Fit data inside table
async function loadIntoTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const { headers, rows } = await response.json();
    // const data = await response.json();

    // console.log(data);


    // clear the table (lam moi du lieu khi nhap du lieu moi)
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    //Populate the headers (lap lai thog qua tieu de)
    for (const headersText of headers) {
        const headerElement = document.createElement("th");

        headerElement.textContent = headersText;
        tableHead.querySelector("tr").appendChild(headerElement);
    }


    // populate the rows
    for (const row of rows) {
        // tao 1 row element moi
        const rowElement = document.createElement("tr");

        // tao bang cho row
        for (const cellText of row) {
            const cellElement = document.createElement("td");

            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
        }


        tableBody.appendChild(rowElement);
    }

}

// call toi (1)
loadIntoTable("./data.json", document.querySelector("table"));

