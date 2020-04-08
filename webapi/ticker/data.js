module.exports = function formatData(json) {
  let dates = [];
  Object.entries(json.intraday).forEach(element => dates.push(element[0]));

  let time = [];
  dates.forEach(element => time.push(element.split(' ')[1]));

  let values = [];
  Object.values(json.intraday).forEach(element => values.push(parseFloat(element.open)));

  const data = time.map((x, i) => ({x, y: values[i]}));

  return data;
}