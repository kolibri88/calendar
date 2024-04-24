function createCalendar(elem, year, month) {
    elem = document.querySelector(elem)
    const myDiv = document.createElement('div')
    let mon = month - 1;
    let d = new Date(year, mon)
    let options = {
        month: 'long'
    }
    let table = `
  <table>
    <caption>${d.toLocaleString("ru", options)} ${year}</caption>
    <tr>
      <th>пн</th>
      <th>вт</th>
      <th>ср</th>
      <th>чт</th>
      <th>пт</th>
      <th>сб</th>
      <th>вс</th>
    </tr>
    <tr>
  `;

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>'
    }

    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>'
        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>'
        }
        d.setDate(d.getDate() + 1)
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>'
        }
    }

    table += '</tr></table>';
    myDiv.innerHTML = table
    elem.append(myDiv)
}

function getDay(data) {
    let day = data.getDay();
    if (day == 0) day = 7;
    return day - 1;
}


for (let i = 1; i <= 12; i++) {
    createCalendar('div', 2024, i)
}