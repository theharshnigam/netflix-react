import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import "./index.css";



ReactDOM.render(
    <>
        <h1 className='heading_style'>Top 5 Webseries on Netflix</h1>
        {Sdata.map((val) => {
            return (
                <Card key={val.id}
                    imgsrc={val.imgsrc}
                    sname={val.sname}
                    title={val.title}
                    link={val.link} />
            );
        })}
    </>, document.getElementById('root')
);