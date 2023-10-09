// JavaScript code to make the HTTP request to Flask
fetch('/get_csv_data')
.then(response => response.json())
.then(data => {
    const table = document.getElementById('csv-table');
    const headerRow = table.createTHead().insertRow(0);

    // Create column headers based on keys from the first data object
    for (const key in data[0]) {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    }

    // Populate the table with data
    data.forEach(rowData => {
        const row = table.insertRow();
        for (const key in rowData) {
            const cell = row.insertCell();
            cell.textContent = rowData[key];
        }
    });
})
.catch(error => console.error(error));