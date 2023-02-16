import React from 'react';
import ReactECharts from 'echarts-for-react';

export function Charts({ data }) {

    const chartData = data.map((item) => {
        return [Date.parse(item.fecha), parseFloat(item.precio)];
    });

    const options = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },

        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'time',
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            boundaryGap: false,
            min: Math.floor(Math.min(...chartData.map(item => item[1]))),
            max: Math.ceil(Math.max(...chartData.map(item => item[1])))
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 20
            },
            {
                start: 0,
                end: 20
            }
        ],
        series: [
            {
                name: 'Price',
                type: 'line',
                smooth: true,
                symbol: 'none',
                areaStyle: {},
                data: chartData
            }
        ]
    };

    return <ReactECharts option={options} />;
}