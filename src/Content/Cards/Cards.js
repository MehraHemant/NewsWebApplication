import React from 'react';
// import PropTypes from 'prop-types'
import './Cards.css'

export default function Cards(props) {
  return (
    <section id={`${props.mode}Card`}>
      <div className='card-img'>
        <img src={props.url} alt=''></img>
      </div>
      <div className='card-details'>
        <h2 className='card-heading'><a rel="noreferrer" href={props.newsUrl} target='_blank' className={props.mode}>{props.heading}</a></h2>
        <div className='card-desc'>{props.desc}</div>
        <div className='card-author'>~ By {props.author} on {new Date(props.date).toLocaleString()}</div>
      </div>
    </section>
  )
}
