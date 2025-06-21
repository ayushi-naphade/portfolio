import React, { useRef, useState, useEffect, useContext } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

import { ThemeContext } from '../../contexts/theme'

const {CanvasJSChart} = CanvasJSReact;

const totalVisitors = 100;

const ChartComponent = () => {
  const chartRef = useRef(null);
   const [{ themeName }] = useContext(ThemeContext);
  const [currentView, setCurrentView] = useState("Skills");
   const [key, setKey] = useState(Math.random());
useEffect(()=>{
setKey(Math.random())
},[])

  const chartData = {
  "Skills": [{
    type: "doughnut",
    name: "",
    toolTip: {
			content: "{name}",
        },
    indexLabel: "{name}",
        indexLabelFontColor: themeName === 'dark' ? '#cdcdff': '#444',
    innerRadius: "80%",
   	showInLegend: true,
    legendMarkerType: "square",
    legend:  {
    fontColor:  '#cdcdff',
    fontSize: 13,
    itemTextFormatter: (e) =>
      `${e.dataPoint.name}`,
  },
    startAngle: 180,
    cursor: "pointer",
    explodeOnClick: false,
    dataPoints: [
        { y: 30, name: "Frontend", color: "#85c1e9", toolTipContent: 'Frontend' },
        { y: 30, name: "UI Libraries/Visualization", color: "#858fe9", toolTipContent: 'UI Libraries/Visualization' },
        { y: 20, name: "Backend", color: "#ad85e9", toolTipContent: 'Backend' },
    { y: 10, name: "DevOps & Tools", color: "#df85e9" , toolTipContent: 'DevOps & Tools' },
        { y: 10, name: "Miscellaneous", color: "#e985c1", toolTipContent: 'Miscellaneous' }
      ],
  }],
"Frontend": [{
    type: "doughnut",
    name: "Frontend",
    innerRadius: "80%",
    toolTip: {
			content: "{name}",
        },
    indexLabel: "{name}",
    legend:  {
    fontColor: '#cdcdff',
    fontSize: 12,
    itemTextFormatter: (e) =>
      `${e.dataPoint.name}`,
  },
    indexLabelFontColor: themeName === 'dark' ? '#cdcdff': '#444',
   	showInLegend: false,
    legendMarkerType: "square",
    startAngle: 180,
    cursor: "pointer",
    explodeOnClick: false,
    dataPoints: [
      { y: 25, name: "React.js", color: "#68b2e3",toolTipContent: "React" },
      { y: 25, name: "Javascript (ES6+)", color: "#7ebde7", toolTipContent: "Javascript" },
      { y: 15, name: "Redux", color: "#85c1e9", toolTipContent: "Redux" },
      { y: 15, name: "React Router", color: "#93c8eb", toolTipContent: "React Router" },
      { y: 10, name: "HTML", color: "#a9d3ef", toolTipContent: "HTML" },
      { y: 10, name: "CSS", color: "#bedef3", toolTipContent: "CSS" }
    ]
  }],
  "Backend": [{
    type: "doughnut",
    name: "Backend",
    innerRadius: "80%",
    toolTip: {
			content: "{name}"
        },
        
        indexLabel: "{name}",
        indexLabelFontColor: themeName === 'dark' ? '#cdcdff': '#444',
 
    legendMarkerType: "square",
    startAngle: 180,
    cursor: "pointer",
      	showInLegend: false,
    explodeOnClick: false,
    dataPoints: [
      { y: 25, name: "Java", color: "#a87ee7", toolTipContent: "Java" },
      { y: 25, name: "Spring Boot", color: "#ad85e9", toolTipContent: "Spring Boot" },
      { y: 20, name: "Python", color: "#b693eb", toolTipContent: 'Python' },
      { y: 20, name: "Django REST Framework", color: "#c5a9ef", toolTipContent:'Django REST Framework' },
      { y: 10, name: "SQL", color: "#d3bef3", toolTipContent: 'SQL' }
    ]
  }],
   "UI Libraries/Visualization": [{
    type: "doughnut",
    name: "UI Libraries/Visualization",
    innerRadius: "80%",
   
    toolTip: {
			content: "{name}"
        },
        
        indexLabel: "{name}",
        indexLabelFontColor: themeName === 'dark' ? '#cdcdff': '#444',
    legendMarkerType: "square",
    startAngle: 180,
      	showInLegend: false,
    cursor: "pointer",
    explodeOnClick: false,
    dataPoints: [
      { y: 25, name: "Ag Grid", color: "#7e88e7", toolTipContent: 'Ag Grid' },
      { y: 25, name: "Material UI", color: "#858fe9", toolTipContent: 'Material UI' },
      { y: 20, name: "Ant Design", color: "#939ceb", toolTipContent: 'Ant Design' },
      { y: 20, name: "Recharts", color: "#a9b0ef", toolTipContent: 'Recharts' },
      { y: 10, name: "Leaflet", color: "#bec4f3", toolTipContent: 'Leaflet' },
    ]
  }],
  "DevOps & Tools": [{
    type: "doughnut",
    name: "DevOps & Tools",
    innerRadius: "80%",
  
    toolTip: {
			content: "{name}"
        },
        
        indexLabel: "{name}",
        indexLabelFontColor: themeName === 'dark' ? '#cdcdff': '#444',
    legendMarkerType: "square",
    startAngle: 180,
      	showInLegend: false,
    cursor: "pointer",
    explodeOnClick: false,
    dataPoints: [
      { y: 25, name: "GitLab", color: "#d153df", toolTipContent: 'GitLab' },
      { y: 15, name: "GitHub", color: "#d768e3", toolTipContent: 'GitHub' },
      { y: 15, name: "JIRA", color: "#dd7ee7", toolTipContent: 'JIRA' },
      { y: 10, name: "Git", color: "#df85e9", toolTipContent: 'Git' },
      { y: 10, name: "Azure", color: "#e293eb", toolTipContent: 'Azure' },
      { y: 10, name: "Cloud", color: "#e8a9ef", toolTipContent: 'Cloud' },
      { y: 5, name: "Grafana", color: "#eebef3", toolTipContent: 'Grafana' },
      { y: 5, name: "Metabase", color: "#f4d4f7", toolTipContent: 'Metabase' },
      { y: 5, name: "Firebase", color: "#f9e9fb", toolTipContent: 'Firebase' },
    ]
  }],
  "Miscellaneous": [{
    type: "doughnut",
    name: "Miscellaneous",
    innerRadius: "80%",
  
    legendMarkerType: "square",
    startAngle: 180,
    showInLegend: false,
    toolTip: {
			content: "{name}",

        },
      indexLabel: "{name}",
      indexLabelFontColor: themeName === 'dark' ? '#cdcdff': '#444',
    cursor: "pointer",
    explodeOnClick: false,
    legend:  {
    fontColor: '#cdcdff',
    
  },
    dataPoints: [
       { y: 20, name: "DevTools", color: "#df53a7", toolTipContent: 'DevTools' },
       { y: 15, name: "ESLint", color: "#e368b2", toolTipContent: 'ESLint' },
      { y: 15, name: "JIRA", color: "#e77ebd", toolTipContent: 'JIRA' },
         { y: 15, name: "Scrum", color: "#e985c1", toolTipContent: 'Scrum' },
         
      { y: 15, name: "Agile", color: "#eb93c8", toolTipContent: 'Agile' },
   
      { y: 10, name: "JUnit", color: "#efa9d3", toolTipContent: 'JUnit' },
      
      { y: 5, name: "Figma", color: "#f3bede", toolTipContent: 'Figma' },
      
      { y: 5, name: "Confluence", color: "#f7d4e9", toolTipContent: 'Confluence' },
      { y: 5, name: "Jest", color: "#fbe9f4", toolTipContent: 'Jest' },
     
    ]
  }],
};

const getChartOptions = (data, title = '', subtitle = '', showLegend = true) => ({
  animationEnabled: true,

  backgroundColor: themeName === 'dark' ? '#23283e': '#fcfcfc',
animationDuration: 1000,
  title: { text: title, fontSize: 14, fontFamily: 'verdana', verticalAlign: "center", fontColor: themeName === 'dark' ? '#cdcdff': '#444',
				
				dockInsidePlotArea: true
 },
  subtitles: subtitle ? [{
    text: subtitle,
    backgroundColor: "#2eacd1",
    fontSize: 12,
    fontColor: "white",
    padding: 5
  }] : [],
   legendMarkerType: "square",
   showInLegend: true,
  legend: showLegend ? {
    fontColor: themeName === 'dark'? '#cdcdff': '#d3d3d3',
    fontSize: 13,
    itemTextFormatter: (e) =>
      `${e.dataPoint.name}`,
  } : undefined,
  axisY: {
    gridThickness: 0,
    includeZero: false,
    lineThickness: 1
  },
  data,
});

  
const handleDataPointClick = (e) => {
    const selectedName = e.dataPoint.name;
    if (chartData[selectedName]) {
      setCurrentView(selectedName);
    }
  setKey(Math.random());
  };
  const getOptions = () => {
    if (currentView === "Skills") {
      return getChartOptions(
        chartData[currentView].map(series => ({
          ...series,
          click: handleDataPointClick
        })),
        
        "Click a skill to drill down"
      );
    } 
      return getChartOptions(chartData[currentView], currentView, '', false);
    
  };

  const handleBackClick = () => {setKey(Math.random()); setCurrentView("Skills");};

  const buttonStyle = {
    borderRadius: '4px',
    padding: '8px',
    border: 'none',
    fontSize: '16px',
    backgroundColor: '#2eacd1',
    color: 'white',
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer'
  };

  return (
    <div style={{ position: 'relative' }}>
      
     <span key={key}><CanvasJSChart style={{fontSize: '0px'}} options={getOptions()} onRef={(ref) => {chartRef.current = ref} }/></span>
      {currentView !== "Skills" && (
        <button type='button' style={buttonStyle} onClick={handleBackClick}>&lt; Back</button>
      )}
    </div>
  );
};

export default ChartComponent;