import React from 'react'

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt='Image' className="card_image" />
                    <div className="card_info">
                        <span className="card_title">{props.title}</span>
                        <h3 className="card_name">{props.sname}</h3>
                        <a href={props.link} target='_blank'>
                            <button className="button"> Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;