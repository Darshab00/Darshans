import React from 'react'
// import Searchfilter from './Searchfilter';

const Result = (props) => {
    const img=`https://source.unsplash.com/random/300*300/?${props.Search}`;
  return (
    <div>
    <img src={img} height='300' width='400' alt='SerachResultImg'/>
    </div>
  )
}

export default Result