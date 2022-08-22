// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a new "buildTable" function & pass "data" (our imported data file), as the argument.
//  Functions can call other functions
function buildTable(data) {
  tbody.html("");  //tells javascript to create a blank canvas for new filtering
}

//chain a for loop to our data & add dataRow as arguement to represent each row of the data
data.forEach((dataRow) => {
  // Append a row to the table body
  let row = tbody.append("tr");
  //tell code to put each sighting onto its own table cell. (Loop through each field in the dataRow and add each value as a table cell (td)
  Object.values(dataRow).forEach((val) => {  
  // append data into a table.  1st: create a variable to append data to a table data tag (<td>)
  let cell = row.append("td");               
  // 2. Now add the values.
  cell.text(val);                            
  }
  );
});

// START OF FILTERING THE TABLE CREATED

// Handling the click button to filter on date:
//create a couple of variables to hold our date data, both filtered and unfiltered
function handleClick() {
  // Grab the datetime value from the filter (d3 handles listening for a filter click)
  let date = d3.select("#datetime").property("value");
  //set a default filter and save it to a new variable
  let filterData = tableData;

  //add an if statement to check for a date filter and execute code
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
}

  //Attach an event to the listen for the form button (click to filter by date), links our code to the filter button
  d3.selectAll("#filter-btn").on("click", handleClick);

  // Build the original (full), filterable table when the page loads
  buildTable(tableData);


