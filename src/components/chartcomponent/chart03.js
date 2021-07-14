import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css'
const data = [
  {
    name: '10:00',
    '관람객': 1000,
  },
  {
    name: '11:00',
    '관람객': 2000,
  },
  {
    name: '12:00',
    '관람객': 1500,
  },
  {
    name: '13:00',
    '관람객': 2000,
  },
  {
    name: '14:00',
    '관람객': 1700,
  },
  {
    name: '15:00',
    '관람객': 900,
  },
  {
    name: '16:00',
    '관람객': 800,
  },
  {
    name: '17:00',
    '관람객': 1200,
  },
  {
    name: '18:00',
    '관람객': 2500,
  },
  {
    name: '19:00',
    '관람객': 700,
  }
  
];

export default function Chart03(){
  
   
      return (
        <div className="graph3">
          <LineChart width={869} height={389} data={data}
            margin={{
              top: 30,
              right: 30,
              left: 30,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" type="category" />
            <YAxis type="number" />
            <Tooltip cursor={{fill: 'transparent'}}/>
            <Legend />
            <Line dataKey="관람객" stroke="#191F1D" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
      )
    
}
