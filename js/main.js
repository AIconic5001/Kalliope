console.log("Hello World");

let data, bubbleChart;

// Function to group data by year and sum the counts
function groupDataByYear(data) {
  // Use reduce to sum the count_of_ref for each year
  const grouped = data.reduce((acc, d) => {
    acc[d.year] = (acc[d.year] || 0) + d.count_of_ref;
    return acc;
  }, {});

  // Convert the grouped object into an array of objects
  return Object.keys(grouped).map(year => ({
    year: +year, // Convert the key back to a number
    count_of_ref: grouped[year]
  }));
}

// Load data from CSV file asynchronously and render the chart area
d3.csv('datasets/colors.csv')
  .then(data => {
    console.log("Data loading complete. Work with dataset. Hi There!");
    console.log(data);

    // Process the data: convert string values to numbers
    data.forEach(d => {
      d.year = +d.year;
      d.count_of_ref = +d.count_of_ref;
    });

    // Group the data by year so that duplicate years are summed together
    const groupedData = groupDataByYear(data);
    console.log("The data has been grouped right here:", groupedData);

    // Create the bubble chart using the grouped data
    createBubbleChart("#bubble-chart", groupedData);
  })
  .catch(error => {
    console.error("Error loading the data", error);
  });
