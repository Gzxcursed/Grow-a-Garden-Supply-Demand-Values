
document.getElementById("search").addEventListener("keyup", function () {
  let filter = this.value.toUpperCase();
  let rows = document.querySelector("#pet-table tbody").rows;
  for (let row of rows) {
    row.style.display = row.cells[0].textContent.toUpperCase().includes(filter) ? "" : "none";
  }
});

function sortTable(n) {
  let table = document.getElementById("pet-table"), rows, switching = true, dir = "asc", switchcount = 0;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (let i = 1; i < rows.length - 1; i++) {
      let shouldSwitch = false;
      let x = rows[i].getElementsByTagName("TD")[n];
      let y = rows[i + 1].getElementsByTagName("TD")[n];
      let xVal = isNaN(x.innerHTML.replace(/[^\d.]/g, "")) ? x.innerHTML.toLowerCase() : parseFloat(x.innerHTML.replace(/[^\d.]/g, ""));
      let yVal = isNaN(y.innerHTML.replace(/[^\d.]/g, "")) ? y.innerHTML.toLowerCase() : parseFloat(y.innerHTML.replace(/[^\d.]/g, ""));
      if ((dir === "asc" && xVal > yVal) || (dir === "desc" && xVal < yVal)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else if (switchcount === 0 && dir === "asc") {
      dir = "desc";
      switching = true;
    }
  }
}

function sortByDropdown() {
  const selected = document.getElementById("sortOptions").value;
  if (selected === "value") sortTable(1);
  else if (selected === "demand") sortTable(2);
}
