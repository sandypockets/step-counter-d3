const monthSvg = d3.select('svg.month'); // Selecting the element to append the data to
const radiusScale = d3.scaleSqrt() // Scale function for circles
  .domain([0, 30000]) // Min and max values
  .range([0, 50]) // Min and max representations in the chart

const monthGroups = monthSvg
  .selectAll('g') // Select a group of items (the circles)
  .data(monthData) // Specify the data (array) to be used
  .enter() // Tell D3 to use the data
  .append('g')
  .attr('transform', (d, i) => {
    const x = (i % 7) * 125 + 50;
    const y = Math.floor(i / 7) * 150 + 60;
    return `translate(${x}, ${y})`
  })

// First ring around circle
monthGroups
  .append('circle')
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('r', radiusScale(10000))
  .attr('class', 'ring')

// Second ring around circle
monthGroups
  .append('circle')
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('r', radiusScale(20000))
  .attr('class', 'ring')

// Circles
monthGroups
  .append('circle')
  // These attr are used to lay the circles out in 7 column grid
  .attr('cx', 0) // x position on the page
  .attr('cy', 0) // y position on the page
  .attr('r', 8) // circle radius
  .attr('class', 'actual')
  .transition()
  .duration(1200) // Each circle load duration
  .delay((d, i) => {return i * 30}) // The delay until the next circle begins loading
  .ease(d3.easeCubicOut) // Load-in effect
  .attr('r', (d, i) => {return radiusScale(d)}) // The size the circle should grow to

// Days along bottom of circles
monthGroups
  .append('text') // Append text to the monthGroup
  .attr('class', 'day') // Give text a class of .day
  .attr('x', 0) // x position relative to monthGroup item
  .attr('y', 65) // y position relative to monthGroup item
  .text((d, i) => {return i + 1}) // Text to append

// Steps on circles
monthGroups
  .append('text') // Append text to the monthGroup
  .attr('class', 'steps') // Give text a class of .day
  .attr('x', 0) // x position relative to monthGroup item
  .attr('y', 65) // y position relative to monthGroup item
  .text((d, i) => {return d}) // Text to append