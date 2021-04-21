let monthData = [
  8429, 10345, 13505, 10222, 11102, 5721, 8091,
  18081, 9123, 3724, 11401, 12230, 8534, 16034,
  8429, 10345, 13505, 10222, 11102, 6721, 8091,
  18081, 9123, 9724, 27401, 12230, 6534, 16034,
]

let todayData = [
  51, 0, 0, 0, 0, 0, 0, 0,
  293, 352, 1782, 644, 328, 828, 905,
  371, 373, 440, 471, 1321, 769, 1660,
  663, 1329
]

const todaySvg = d3.select('svg');

const barScale = d3.scaleLinear()
  .domain([0, 2000]) // Data input range
  .range([1, 112]) // Data output range

// Grouping bars and text
const todayGroups = todaySvg
  .selectAll('g')
  .data(todayData)
  .enter()
  .append('g')
  .attr('transform', (d, i) => {return `translate(${i * 30}, 0)`})


// Adding bars
todayGroups
  .append('rect')
  .attr('x', 0) // Setting pixel width
  .attr('y', (d, i) => {return 112 - barScale(d)}) // Converting data to barScale params
  .attr('height', (d, i) => {return barScale(d)}) // Converting the data to the barScale params
  .attr('width', 24)

// Adding text
todayGroups
  .append('text')
  .attr('x', 12)
  .attr('y', 130)
  .text((d, i) => {return i})

// Note: the dataPoint, index, and d, i variables are the same thing.
// the full words were used for learning purposes