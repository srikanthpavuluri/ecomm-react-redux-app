import React from 'react';
import Filter from './filter';

const LeftSide = (props) => {
    return (
        <div style={{ width: "20%"}}>
            <Filter selectedBrands={props.updateSelectedBrands}/>
        </div>
    )
};

export default LeftSide;