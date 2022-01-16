// Initialized arrays
let car_model = []
let outcome = []

d3.json("data.json").then(function(data) {
// For loop to populate arrays
  for (let i = 0; i < data.length; i++) {
      row = data.case_number[i];
      car_model.push(row.vehicle_model);
      outcome.push(row.doa_status);
    }
  
    // Trace1 Vehicle Model Data
    let trace1 = {
      x: car_model,
      y: outcome,
      name: "Vehicle Model Accident Outcomes",
      type: "bar"
    };
    
    // Create data array
    //  let data = [trace1, trace2];
    let data = [trace1]
  
    // Apply a title to the layout
    let layout = {
    title: "Fatal & Non-Fatal Outcomes by Vehicle Model"
  };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot-id", data, layout);
});