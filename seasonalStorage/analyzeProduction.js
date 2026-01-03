function performAnalysis() {
  experimentData = [
    {t:'13:50', v:2.0, c:0.0000, g: 0, n:'leichte Wasserstoffbildung', temp: 21, pressure: 1020},
    {t:'13:55', v:2.2, c:0.0015},
    {t:'13:57', c:0.0017},
    {t:'13:59', c:0.0019},
    {t:'14:15', c:0.0030},
    {t:'14:33', c:0.0040},
    {t:'14:38', c:0.0043},
    {t:'14:45', c:0.0044},
    {t:'15:00', c:0.0047},
    {t:'15:10', c:0.0049, n:'Chlor 0,5; pH 7,0'},
    {t:'15:26', c:0.0053},
    {t:'15:39', c:0.0055},
    {t:'15:52', c:0.0057},
    {t:'16:08', c:0.0061},
    {t:'16:17', c:0.0063},
    {t:'16:38', c:0.0072},
    {t:'16:50', c:0.0075},
    {t:'17:06', c:0.0080},
    {t:'17:24', c:0.0083},
    {t:'18:15', c:0.0088},
    {t:'18:27', c:0.0089, g:10},
    {t:'18:39', c:0.0090},
    {t:'18:55', c:0.0091},
    {t:'19:12', c:0.0090},
    {t:'19:19', c:0.0091, n:'Blasen abgeklopft'},
    {t:'19:30', c:0.0090},
    {t:'20:08', c:0.0086, g:25, n:'Strom pausiert'},
    {t:'20:09', v: 0.0, c:0.0000},
    {t:'21:16', v: 0.0, c:0.0000},
    {t:'21:17', v: 2.2, c:0.0079, n:'Erneuter Start; Strom innerhalb weniger Sekunden auf den Wert gestiegen'},
    {t:'21:19', c:0.0084},
    {t:'21:20', c:0.0086},
    {t:'21:32', c:0.0092},
    {t:'22:12', c:0.0091},
    {t:'22:56', c:0.0082},
    {t:'23:13', c:0.0069},
    {t:'23:14', c:0.0006, h:35, n:'wahrscheinlich Stromfluss an Sauerstoffelektrode unterbrochen; grob 30-40 cm³; Chlor+pH unverändert'},
  ]
  experiment = {
    intervals: [
      {from:'13:50', to:'20:08', name:'0 bis 25, d.h. bis zur Pause'}, 
      {from:'18:27', to:'20:08', name:'zwischen 10 und 25'}
    ],
    data: experimentData
  }
  fillMinutes(experiment);
  fillVoltage(experiment);
  fillPower(experiment);
  fillInputEnergy(experiment);
  fillCharge(experiment);
  fillH2Theoretical(experiment);
  fillTemp(experiment);
  fillPressure(experiment);
  fillH2(experiment);
  fillH2Energy(experiment);
  printTable(experiment);
  printIntervals(experiment);
}

function fillMinutes(experiment) {
  let d = experiment.data;
  d[0].sumOfMinutes = 0;
  for (let i = 1; i < d.length; i++) {
    let absTimeStart = parseTime(d[i-1].t);
    let absTimeEnd = parseTime(d[i].t);
    d[i].minutes = absTimeEnd - absTimeStart;
    d[i].sumOfMinutes = d[i-1].sumOfMinutes + d[i].minutes;
  }
}

function fillVoltage(experiment) {
  let d = experiment.data;
  let prev = d[0].v;
  for (let i = 1; i < d.length; i++) {
    if (!d[i].v) {
      d[i].v = prev;
    } else {
      prev = d[i].v; 
    }
  }
}

function fillPower(experiment) {
  let d = experiment.data;
  for (let i = 0; i < d.length; i++) {
    d[i].power = d[i].v * d[i].c;
  }
}

function fillCharge(experiment) {
  let d = experiment.data;
  d[0].sumOfCharge = 0;
  for (let i = 1; i < d.length; i++) {
    let currentStart = d[i-1].c;
    let currentEnd = d[i].c;
    let averageCurrent = (currentStart + currentEnd) / 2;
    d[i].sumOfCharge = d[i-1].sumOfCharge + averageCurrent * d[i].minutes * 60;
  }
}

function fillInputEnergy(experiment) {
  let d = experiment.data;
  d[0].sumOfInputEnergy = 0;
  for (let i = 1; i < d.length; i++) {
    let currentStart = d[i-1].c;
    let currentEnd = d[i].c;
    let averageCurrent = (currentStart + currentEnd) / 2;
    d[i].sumOfInputEnergy = d[i-1].sumOfInputEnergy + averageCurrent * d[i-1].v * d[i].minutes * 60;
  }
}

function fillTemp(experiment) {
  let d = experiment.data;
  let prev = d[0].temp;
  for (let i = 1; i < d.length; i++) {
    if (!d[i].temp) {
      d[i].temp = prev;
    } else {
      prev = d[i].temp; 
    }
  }
}

function fillPressure(experiment) {
  let d = experiment.data;
  let prev = d[0].pressure;
  for (let i = 1; i < d.length; i++) {
    if (!d[i].pressure) {
      d[i].pressure = prev;
    } else {
      prev = d[i].pressure; 
    }
  }
}

function fillH2(experiment) {
  let d = experiment.data;
  for (let i = 0; i < d.length; i++) {
    if (typeof(d[i].g) === 'number') {
      d[i].h2 = volumeToAmount(d[i].g * 2 / 3, d[i].temp, d[i].pressure);
    }
  }
}

function fillH2Theoretical(experiment) {
  let d = experiment.data;
  for (let i = 0; i < d.length; i++) {
    // Faradaysches Gesetz; 1 Molekül H2 braucht 2 Elektronen
    d[i].h2Theoretical = d[i].sumOfCharge / 96485 / 2;
  }
}

// liefert die Stoffmenge eines Gases in Mol auf Basis des Volumens mit der idealen Gasgleichung 
function volumeToAmount(volumeCCM, temperatureCelsius, pressureHectoPascal) {
  let temperatureKelvin = temperatureCelsius + 273.15;
  let universalGasConstant = 83144.6261815324;
  return pressureHectoPascal * volumeCCM / temperatureKelvin / universalGasConstant;
}

function fillH2Energy(experiment) {
  let d = experiment.data;
  for (let i = 0; i < d.length; i++) {
    if (typeof(d[i].h2) === 'number') {
      // 241,8 kJ/mol
      d[i].h2energy = d[i].h2 * 241800;
    }
  }
}

function parseTime(t) {
  let i = t.indexOf(':');
  return parseInt(t.substring(0, i)) * 60 + parseInt(t.substring(i+1));
}

function printTable(experiment) {
  let tbl = document.getElementById('resultTable');
  experiment.data.forEach((el) => {
    tbl.insertAdjacentHTML('beforeend', '<tr><td>' + toHtml(el.t) + 
      '</td><td>' + toHtml(el.sumOfMinutes) +
      '</td><td>' + toHtml(el.v) +
      '</td><td>' + toHtml(el.c) +
      '</td><td>' + toHtml(el.power) +
      '</td><td>' + toHtml(el.sumOfInputEnergy) +
      '</td><td>' + toHtml(el.sumOfCharge) +
      '</td><td>' + toHtml(el.h2Theoretical) +
      '</td><td>' + toHtml(el.g) +
      '</td><td>' + toHtml(el.h2) +
      '</td><td>' + toHtml(el.h2energy) +
      '</td><td>' + toHtml(el.n) +
      '</td></tr>');
  });
}

function printIntervals(experiment) {
  let div = document.getElementById('intervals');
  experiment.intervals.forEach((intv) => {
    let data = findInterval(experiment.data, intv.from, intv.to);
    div.insertAdjacentHTML('beforeend', formatInterval(intv.name, data));
  });
}

function findInterval(data, from, to) {
  let idxStart = findTime(data, from);
  let idxEnd = findTime(data, to);
  return data.slice(idxStart, idxEnd + 1);
}

function findTime(data, time) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].t === time) {
      return i;
    }
  }
  return -1;
}

function formatInterval(name, data) {
  let dataStart = data[0];
  let dataEnd = data[data.length - 1];
  let minutes = dataEnd.sumOfMinutes - dataStart.sumOfMinutes;
  let coulomb = dataEnd.sumOfCharge - dataStart.sumOfCharge;
  let h2Theoretical = dataEnd.h2Theoretical - dataStart.h2Theoretical;
  let h2Real = dataEnd.h2 - dataStart.h2;
  let inputEnergy = dataEnd.sumOfInputEnergy - dataStart.sumOfInputEnergy;
  let h2energy = dataEnd.h2energy - dataStart.h2energy;
  return '<h2>' + toHtml(name) + '</h2>' +
    'von ' + toHtml(dataStart.t) + ' bis ' + toHtml(dataEnd.t) + ' (' + toHtml(minutes) + ' Minuten)<br/>' +
    'Geflossene Ladung: ' + toHtml(coulomb) + ' As<br/>' +
    'Theoretischer Wasserstoff: ' + toHtml(h2Theoretical) + ' Mol H2<br/>' +
    'Gemessener Wasserstoff: ' + toHtml(h2Real) + ' Mol H2<br/>' +
    'Aufgewandte Energie: ' + toHtml(inputEnergy) + ' J<br/>' +
    'Energie im Wasserstoff: ' + toHtml(h2energy) + ' J<br/>' +
    'Wirkungsgrad: ' + toHtml(h2energy / inputEnergy * 100) + ' %<br/>';
}

function toHtml(val) {
  let t = typeof(val);
  if (t === 'number') {
    return '' + Math.round(val * 100000) / 100000;
  } else if (t === 'string') {
    return val.replace('&', '&amp;').replace('<', '&lt;');
  } else if (t === 'undefined') {
    return '';
  } else {
    return t;
  }
}

