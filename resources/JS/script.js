//---------------------- GANNT -------------------------------------------

function createChart(e) {
    const days = document.querySelectorAll(".chart-values li");
    const tasks = document.querySelectorAll(".chart-bars li");
    const daysArray = [...days];
  
    tasks.forEach(el => {
      const duration = el.dataset.duration.split("-");
      const startDay = duration[0];
      const endDay = duration[1];
      let left = 0,
        width = 0;
  
      if (startDay.endsWith("A")) {
        const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
        left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
      } else {
        const filteredArray = daysArray.filter(day => day.textContent == startDay);
        left = filteredArray[0].offsetLeft;
      }
  
      if (endDay.endsWith("A")) {
        const filteredArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
        width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
      } else {
        const filteredArray = daysArray.filter(day => day.textContent == endDay);
        width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
      }
  
      // apply css
      el.style.left = `${left}px`;
      el.style.width = `${width}px`;
      if (e.type == "load") {
        el.style.backgroundColor = el.dataset.color;
        el.style.opacity = 1;
      }
    });
  }
  
  window.addEventListener("load", createChart);
  window.addEventListener("resize", createChart);

//----------------------    TAG CLOUD    -----------------------------------------


const myTags = [
  'Project Engineer', 'Customer support', 'Technical documents',
  'System auditor', 'Data analyst', 'Technical teacher',
  'Presentations ', 'Dashboards', 'QA/QC supervisor',
  'Executive assistant', 'Silent leader', 'People supervisor',
];

var tagCloud = TagCloud('.content', myTags,{

// radius in px

radius: 250,

// animation speed
// slow, normal, fast
maxSpeed: 'normal',
initSpeed: 'normal',

// 0 = top
// 90 = left
// 135 = right-bottom
direction: 135,

// interact with cursor move on mouse out
keep: true

});

  //----------------------    CHART    -----------------------------------------


  var options = {
    series: [{
    data: [10,10,10,9,8.5,8,7,7,7,6.5,6,6,6,5,5,4],
    name: 'Tech skills'
  }],
  tooltip: {
    enabled: false},

    chart: {
    type: 'bar',
    height: 550
  },
  grid: {
    show: false
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    colors: ['#171717']
  },
  title: {
    text: 'Tech skills',
    align: 'center',
    style: {
      fontSize:  '25px',
      fontFamily:  'Amatic SC',
      color:  '#171717'
    }
  },
  
  xaxis: {
    categories: ['Office 365', 'G-Suite', 'Windows', 'Mac OS','2D CAD', 'MatLab', 'HTML', 'CSS',
      'LaTeX', 'Photoshop', 'Python', 'Tableau', 'SQL', 'React', 'Git','Linux'
    ],
    labels: {show: false},
    style: {
      fontFamily: 'Amatic SC'
    }
  },

  yaxis: {
    
    style: {
      fontFamily: 'Amatic SC'
    }
  }

  };
  


  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();


  //------------------------- TREE MAP .-------------------------------
  var options = {
    series: [
    {
      data: [
        {
          x: 'Organization',
          y: 100
        },
        {
          x: 'Details',
          y: 70
        },
        {
          x: 'Desire to grow',
          y: 75
        },
        {
          x: 'Curiosity',
          y: 100
        },
        {
          x: 'Empathy',
          y: 100
        },
        {
          x: 'Integrity',
          y: 90
        },
        {
          x: 'Desire to help',
          y: 85
        },
        {
          x: 'Learning',
          y: 100
        },
        {
          x: 'Creativity',
          y: 70
        },
        {
          x: 'Listening',
          y: 100
        },
        {
          x: 'Understanding',
          y: 90
        },
        {
          x: 'Proactivity',
          y: 100
        },
        {
          x: 'Focus',
          y: 90
        },
        {
          x: 'Multitasking',
          y: 80
        },
        {
          x: 'Teaching',
          y: 70
        }
      ]
    }
  ],
    legend: {
    show: false
  },
  tooltip: {
   enabled: false
 },
  chart: {
    height: 550,
    type: 'treemap'
  },
  title: {
    text: 'Soft skills',
    align: 'center',
    style: {
      fontSize:  '25px',
      fontFamily:  'Amatic SC',
      color:  '#171717'
    }
    },
    colors: ['#171717'],
    dataLabels: {
        style: {
        fontSize: '14px',
        fontFamily: 'Amatic SC',

    },

    }
    

  
 
  };

  var chart = new ApexCharts(document.querySelector("#tree-map"), options);
  chart.render();