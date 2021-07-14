import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css'
const data = [
  {
    name: '10',
    'Day': 10,
  },
  {
    name: '11',
    'Day': 11,
  },
  {
    name: '12',
    'Day': 15,
  },
  {
    name: '13',
    'Day': 20,
  },
  {
    name: '14',
    'Day': 17,
  },
  {
    name: '15',
    'Day': 9,
  },
  {
    name: '16',
    'Day': 8,
  },
  {
    name: '17',
    'Day': 12,
  },
  {
    name: '18',
    'Day': 19,
  },
  {
    name: '19',
    'Day': 7,
  }
  
];

export default function Chart05(){
  
   
      return (
        <div>
          <BarChart width={800} height={330} data={data}
            margin={{
              top: 80,
              right: 30,
              left: 30,
              bottom: 10,
            }}
            barSize={15}
            
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" type="category" />
            <YAxis type="number" />
            <Tooltip cursor={{fill: 'transparent'}}/>
            
            <Bar dataKey="Day" stroke="#191F1D" fill="#191F1D" radius={[15, 15, 0, 0]} />
         
         </BarChart>
        </div>
      )
    
}
