import React from 'react'
import Sdata from './Sdata'

console.log(Sdata)

function Cards(props){
    return(
        <>
    <div className='Cards'>
        <div className='card'>
            <img src={props.imgsrc} alt='serirs-image' className='imgs' max-width='400' max-height='200'></img>
            <div className='card-info'>
                <span className='card-category'>A Netflix Original Series</span>
                <h3 className='card-title'>{props.title}</h3>
                <a href={props.link}>
                <button>Watch now</button></a>
            </div>
        </div>
    </div>
    </>
    )
}
function ncard(val){
    return(
        <Cards 
        title={val.title}
        imgsrc={val.imgsrc}
        link={val.link}
    />
    );

}

const cards = () => {
  return (
    <><div className='conatiner'>
        {Sdata.map(ncard)}
    </div></>
  )
}

export default cards