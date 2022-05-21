import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data={
    labels:  ['Level1','Level2','Level3','Level4'],
    datasets:[{
        data:[12,20,7,10],
        backgroundColor:[
            'purple',
            'orange',
            'grey',
            'blue',
        ]
    }]
  };

const barchart = () => {
  return (
    <div className='mb0' style={{width:'500px', height:'500px',margin:'0'}} >
    <Bar data={data} />
    </div>
  )
}

export default barchart