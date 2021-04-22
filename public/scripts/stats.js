d3.select('p.worst-day').text(d3.min(monthData) + ' steps') // Minimum val in monthData array
d3.select('p.average-day').text(Math.floor(d3.mean(monthData)) + ' steps') // Avg of monthData
d3.select('p.best-day').text(d3.max(monthData) + ' steps') // Max val in monthData
d3.select('p.total-month').text(d3.sum(monthData) + ' steps') // Sum of monthData
d3.select('p.total-day').text(d3.sum(todayData) + ' steps') // Sum of todayData