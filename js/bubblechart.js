// class BubbleChart {
//     /**
//      * Class constructor with basic chart configuration
//      * @param {Object}
//      * @param {array}
//      */
//     constructor(_config,_data) {
//         this.config = {
//             parentElement: _config.parentElement,
//             width: 800,
//             height: 240,
//             contextHeight: 50,
//             margin: {top: 10, right: 10, bottom: 100, left: 45},
//             contextMargin: {top: 280, right: 10, bottom: 20, left: 45}
//         }
//         this.data = _data;
//         this.initVis();
//     }

//     /**
//      * Initalize scales/axes and append static chart elements
//      */
//     initVis() {
//         let vis = this;
//         const containerWidth = vis.config.width - vis.config.margin.left - vis.config.margin.right;
//         const containerHeight = vis.config.height - vis.config.margin.top - vis.config.margin.bottom;

//     }

// }

function createBubbleChart(container, data) {
  // Define chart dimensions and margins
  const margin = { top: 40, right: 20, bottom: 60, left: 60 },
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // Select the SVG element
  const svg = d3
    .select(container)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  // Create a group element to contain the bubble chart
  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // // Define the scales
  // const xScale = d3.scaleLinear()
  //     .domain(d3.extent(data, d => d.year))
  //     .range([0, width])
  //     .nice();

  // const yScale = d3.scaleLinear()
  //     .domain([0, d3.max(data, d => d.count_of_ref)])
  //     .range([height, 0])
  //     .nice();

  // // Define the axes
  // const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
  // const yAxis = d3.axisLeft(yScale);

  // // Append the axes
  // g.append("g")
  //     .attr("transform", `translate(0, ${height})`)
  //     .call(xAxis);

  // g.append("g")
  //     .call(yAxis);

  // // Add x-axis label
  // g.append("text")
  //     .attr("class", "axis-label")
  //     .attr("text-anchor", "middle")
  //     .attr("x", width / 2)
  //     .attr("y", height + 40)
  //     .text("Year");

  // // Add y-axis label
  // g.append("text")
  //     .attr("class","axis-label")
  //     .attr("text-anchor","middle")
  //     .attr("transform","rotate(-90)")
  //     .attr("x", -height / 2)
  //     .attr("y", -40)
  //     .text("Count of References");

  // Create the radius scale
  const rScale = d3
    .scaleSqrt()
    .domain([0, d3.max(data, (d) => d.count_of_ref)])
    .range([5, 50]);

  // Optional color scale
  const colorScale = d3
    .scaleThreshold()
    .domain([5, 10, 15, 20])
    .range(["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]);

  // Draw the bubbles
  // g.selectAll("circle")
  //     .data(data)
  //     .enter()
  //     .append("circle")
  //     .attr("cx", d => xScale(d.year))
  //     .attr("cy", d => yScale(d.count_of_ref))
  //     .attr("r", d => rScale(d.count_of_ref))
  //     .attr("fill", d => colorScale(d.year))
  //     .attr("opacity", 0.7)
  //     .on("mouseover", (event, d) => {
  //         tooltip.style("opacity", 1)
  //             .html(`<strong>Year:</strong> ${d.year}<br/><strong>Count:</strong> ${d.count_of_ref}`)
  //             .style("left", (event.pageX + 10) + "px")
  //             .style("top",  (event.pageY - 28) + "px");
  //     })
  //     .on("mousemove", (event) => {
  //         tooltip.style("left", (event.pageX + 10) + "px")
  //             .style("top",  (event.pageY - 28) + "px");
  //     })
  //     .on("mouseout", () => {
  //         tooltip.style("opacity", 0);
  //     });

  // Create text labels for each bubble
let labels = g.selectAll("text.label")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .text(d => d.year)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("pointer-events", "none")
    .style("fill", "#000")
    .style("font-size", "12px")
    .raise();

  const circles = g
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", (d) => rScale(d.count_of_ref))
    .attr("fill", (d) => colorScale(d.count_of_ref))
    .attr("opacity", 0.7);

  circles
    .on("mouseover", (event, d) => {
      tooltip
        .style("opacity", 1)
        .html(
          `<strong>Year:</strong> ${d.year}<br/><strong>Count:</strong> ${d.count_of_ref}`
        )
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mousemove", (event) => {
      tooltip
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0);
    });

  // Select tooltip
  const tooltip = d3.select("#tooltip");

  // Define the center of the chart
  const centerX = width / 2;
  const centerY = height / 2;

  // Function to drag the bubbles around
  const simulation = d3
    .forceSimulation(data)
    .force("x", d3.forceX(centerX).strength(0.05)) // Force the bubble in the middle of the chart
    .force("y", d3.forceY(centerY).strength(0.05))
    .force(
      "collide",
      d3.forceCollide((d) => rScale(d.count_of_ref) + 1)
    ) // Make the bubbles collide with each other
    // Update the position of the bubbles
    .on("tick", ticked);

  function ticked() {
    circles.attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y);

    labels.attr("x", d => d.x)
   .attr("y", d => d.y);
  }

  circles.call(
    d3
      .drag()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      })
  );

}
