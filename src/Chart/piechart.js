import React from 'react'
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const data={
    labels:  ['Introduction','Reference','Index','Biography'],
    datasets:[{
        data:[12,16,7,10],
        backgroundColor:[
            'blue',
            'grey',
            'white',
            'orange',
        ]
    }]
  };

const piechart = () => {
  return (
    <div style={{width:'500px', height:'500px'}}>
    <Pie data={data} />
    </div>
  )
}

export default piechart