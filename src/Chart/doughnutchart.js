import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const data={
    labels:  ['Comedy','Tragedy','Horror','Romantic'],
    datasets:[{
        data:[12,16,7,10],
        backgroundColor:[
            'red',
            'blue',
            'yellow',
            'green',
        ]
    }]
  };

const doughnutchart = () => {
  return (
    <div style={{width:'500px', height:'500px'}}>
    <Doughnut data={data} />
    </div>
  )
}

export default doughnutchart