import { Route, BrowserRouter,Link,Switch,withRouter} from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import React, { Component } from 'react';  
import Logo from './logo.jpg';




const Result = () => {



  const data1 = [
    {
      name: 'LO1', uv: 4000, pv: 70, amt: 2400,
    },
    {
      name: 'LO2', uv: 3000, pv: 80, amt: 2210,
    },
    {
      name: 'LO3', uv: 2000, pv: 50, amt: 2290,
    },
    {
      name: 'LO4', uv: 2780, pv: 60, amt: 2000,
    },
    {
      name: 'LO5', uv: 1890, pv: 75, amt: 2181,
    },
  ];
  
  
  const getIntroOfPage = (label) => {
    if (label === 'LO1') {
      return "relate physical layer protocols, services and their standards to support communications across data networks";
    } if (label === 'LO2') {
      return "use Address Resolution Protocol (ARP) to resolve MAC addresses for frame encapsulation in LAN networks.";
    } if (label === 'LO3') {
      return "select an IP address scheme and a routing protocol plan for a given network design";
    } if (label === 'LO4') {
      return ' transport layer protocols based on reliable end-to-end data transmission over a medium';
    } if (label === 'LO5') {
      return 'analyse application layer protocols to simulate commonly used end user applications';
    } compare
  };
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
         
          <p className="intro">{getIntroOfPage(label)}</p>
        </div>
      );
    }
  
    return null;
  };





  return (
    <div>
<div class= "header">
          <img src={Logo} alt ='weblogo' />
          <h1>
              <Link className="header" to='/'  >
                  Faculty of Engineering University of Ruhuna
              </Link>
          </h1>
                            
          <h2>Outcome Based Education System</h2>

        </div>
      <div className="container">
        <h3 className="center">Student</h3>
        <h4>Students registered on database</h4>
      

        <BarChart
        width={900}
        height={300}
        data={data1}
        margin={{
          top: 5, right: 0, left: 160, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="pv" barSize={30} fill="#8884d8" />
      </BarChart>

      </div>
    </div>
  )
}

export default Result