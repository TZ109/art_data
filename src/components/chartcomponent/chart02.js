/* eslint-disable */
import React, { PureComponent } from 'react';
import './chart.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';
import { RiStoreLine } from 'react-icons/ri';
import XDataFormater from './XDataFormater';
const data=[
    {
        name : `David Hockney : views of hotel well Ⅲ`,
        '전시 관람 체류 시간' : 419,
        '전시 관람객': 525
    }
,
    {
        name : `Joan miro : Fondation22 maeght`,
        '전시 관람 체류 시간' : 347,
        '전시 관람객': 289
    }
    ,
    {
        name : `Pablo Picasso : 3Portrait`,
        '전시 관람 체류 시간' : 583,
        '전시 관람객' : 436
    }
    ,                                  
    {
        name : `David Hoc5kney :
        Views Of Hotel Well Ⅲ`,
        '전시 관람 체류 시간' : 289,
        '전시 관람객': 525
    }
,                    
    {
        name : `Joan miro : Fondatio4n maeght`,
        '전시 관람 체류 시간' : 347,
        '전시 관람객': 289
    }
    
]

function Chart02(){
    return(
        <div>
            <div className="graph_2_title">진행 중인 전시별 관람 정보</div>
            <div className="graph2">
        
                <BarChart width={900}
                height={550}
                data={data}
                margin={{
                    top: 30,
                    right: 10,
                    left: 10,
                    bottom: 30,
                }}
                barSize={20}
                barGap={7}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis interval={0} dataKey="name" type="category" tick={<XDataFormater/>}/>
                <YAxis style={{ fontFamily: 'Lato' }} type="number"/>
                <Tooltip cursor={{fill: 'transparent'}}/>
                <Legend align="right" verticalAlign="top"/>
                <Bar name=' 전시 관람 체류 시간' dataKey='전시 관람 체류 시간' radius={[15, 15, 0, 0]} fill="#191F1D">
                  <LabelList dataKey='전시 관람 체류 시간' position="top"/>
                </Bar>
                <Bar name=' 전시 관람객'dataKey='전시 관람객' radius={[15, 15, 0, 0]}  fill="#D0D0D0" >
                    <LabelList dataKey='전시 관람객' position="top"/>
                </Bar>

                </BarChart>
           
            </div>
        </div>
    )

}
export default Chart02;