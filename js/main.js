console.log("Hello World");

let data, bubbleChart;
// Load data from CSV file asynchronously and render the chart area
d3.csv('datasets/large-data.csv')
    .then(data => {
    console.log("Data loading complete. Work with dataset. Hi There!");
    console.log(data);

    //process the data - this is a forEach function
    data.forEach(d=> {
        d.year = +d.year;
        d.count_of_ref = +d.count_of_ref;
    });

    createBubbleChart("#bubble-chart",data);
})
.catch(error => {
    console.error("Error loading the data");
})
