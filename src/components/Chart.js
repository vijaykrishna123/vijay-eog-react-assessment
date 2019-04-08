import React from 'react';
import { LineChart, Line,ResponsiveContainer , CartesianGrid, XAxis, YAxis } from 'recharts';

const CustomChart = props => {

    return (
        <ResponsiveContainer width={1000} height={300} >
        <LineChart  data={props.data}>
            <Line type="monotone" dataKey="accuracy" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="timestamp"/>
            <YAxis dataKey="accuracy" />
        </LineChart>
        </ResponsiveContainer>
    )
}
export default CustomChart;