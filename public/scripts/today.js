const todaySvg = d3.select('svg.today');
const barScale = d3.scaleLinear()
  .domain([0, 2000]) // Data input range
  .range([1, 112]) // Data output range

// Grouping bars and text
const todayGroups = todaySvg
  .selectAll('g')
  .data(todayData)
  .enter()
  .append('g')
  .attr('transform', (d, i) => {return `translate(${i * 36}, 0)`})

// An invisible group of rectangles stretching across the canvas
// This enables the hover states to trigger when the user hovers _above_ the bar
todayGroups
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 24)
  .attr('height', 140)
  .attr('class', 'transparent')

// Adding bars
todayGroups
  .append('rect')
  .attr('x', 0) // Setting pixel width
  .attr('y', (d, i) => {return 120}) // Converting data to barScale params
  .attr('width', 24)
  .attr('height', 0) // Converting the data to the barScale params
  .transition()
  .delay((d, i) => {return i * 20})
  .attr('y', (d, i) => {return 120 - barScale(d)}) // Converting data to barScale params
  .attr('height', (d, i) => {return barScale(d)}) // Converting the data to the barScale params

// Text along bottom of bars
todayGroups
  .append('text')
  .attr('x', 12)
  .attr('y', 140)
  .attr('class', 'hours')
  .text((d, i) => {return i}) // Bottom text is = to the index, representing hours

// Text along top of bars
todayGroups
  .append('text')
  .attr('x', 12)
  .attr('y', (d, i) => {return 110 - barScale(d)}) // Position the text above the bar based on the barScale and datapoint (d)
  .attr('class', 'steps')
  .text((d, i) => {return d})