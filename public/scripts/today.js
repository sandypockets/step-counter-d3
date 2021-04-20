// const todayData = [
//   12, 110, 56, 85, 29, 123, 34, 56, 89, 12, 2, 67, 33, 99, 35, 13, 54, 54, 29, 10
// ];

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

todaySvg
  .selectAll('rect')
  .data(todayData)
  .enter()
  .append('rect')
  .attr('width', 24)
  .attr('height', (dataPoint, index) => {
    return barScale(dataPoint); // Converting the data to the barScale params
  })
  .attr('x', (dataPoint, index) => {
    return 36 * index;
  })
  .attr('y', (dataPoint, index) => {
    return 112 - barScale(dataPoint); // Converting data to barScale params
  })
