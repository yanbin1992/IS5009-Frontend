import React, { Component } from 'react';
import { message } from 'antd';
import { connectAlita } from 'redux-alita';
import ReactEcharts from 'echarts-for-react';
import { piechartdata } from "../../Helper/DataHelper"
class piechart extends Component {
  render() {
    const piedata = piechartdata[0];
    var option = {
      title: {
        //text: 'Current Asset Allocation',
        //  subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: piedata,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    return (
      <div>
        <ReactEcharts
          option={option}
          style={{ height: '350px', width: '100%' }}
          className={'react_for_echarts'}
        />
      </div>
    )
  }

}

export default connectAlita()(piechart);