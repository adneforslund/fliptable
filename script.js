function addMobileTableData() {
  // Get all the tables in the document
  var tables = document.querySelectorAll("table");

  // If there are tables, loop through them
  if (tables) {
    for (var i = 0; i < tables.length; i++) {
      // Get the current table and its tbody rows
      var table = tables[i];
      var rows = table.querySelectorAll("tbody tr");

      // Get the table headers and convert them to an array
      var headers = table.querySelectorAll("th");
      var headerArray = Array.from(headers);

      // Loop through each row of the table
      for (var j = 0; j < rows.length; j++) {
        var cells = rows[j].querySelectorAll("td");
        var cellArray = Array.from(cells);

        // Loop through each cell in the row
        for (var k = 0; k < cellArray.length; k++) {
          // If the cell has the same index as the header, skip it
          if (k === headerArray.length) {
            continue;
          }

          // Set the data-label attribute on the cell using the header text
          if (headerArray.length > 0) {
            var headerText = headerArray[k].innerHTML;
            var labelText = headerText.replace(/<\/?[^>]+(>|$)/g, "");
            cellArray[k].setAttribute("data-label", labelText);
          }
        }
      }
    }
  }
}
