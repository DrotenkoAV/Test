const fs = require('fs');
const path = require('path');
const neatCsv = require('neat-csv');

const filePath = path.join(__dirname, 'acme_worksheet.csv');
fs.readFile(filePath, async (error, data) => {
  if (error) {
    return console.log('error reading file');
  }
  const parsedData = await neatCsv(data);
  let obj = {};
  for (let data of parsedData) {

    if (obj[data['Employee Name']]) {
      obj[data['Employee Name']].push({date: data['Date'], work_hours: data['Work Hours']});
    } else {
      obj[data['Employee Name']] = [
      {date: data['Date'], work_hours: data['Work Hours']}];
    }
    // console.log(`name: ${data['Employee Name']}`);
  }
    console.log(obj);
  // }
});