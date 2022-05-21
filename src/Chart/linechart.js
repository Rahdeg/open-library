import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data={
    labels:  ['Demand','Supply','Equilibrum','Decline'],
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

const linechart = () => {
  return (
    <div style={{width:'500px', height:'500px'}}>
    <Line data={data} />
    </div>
  )
}

export default linechart