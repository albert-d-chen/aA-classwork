import React from 'react';
import {Link} from 'react-router-dom';

const BenchIndexItem = ({bench}) => (
    <li key={bench.id}>
        {bench.description}
        <br/>
        {bench.lat}
        <br/>
        {bench.lng}
    </li>
)
        


export default BenchIndexItem;