import React from 'react';

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} height='500px' width='850px' alt="myPic" className='card_img' />
                    <div className="card__info">
                        <span className="card__category">{props.title}</span>
                        <h3 className="card__title">{props.sname}</h3>
                        <a href={props.link} className="btn" target="_blnk">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;