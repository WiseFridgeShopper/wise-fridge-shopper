import React from 'react'
import {Link} from 'react-router'

const ServerNotice = props => (
    <div className='row'>
      <div className='col-md-12'>
        <h1 className='text-center'>{props.message}</h1>
        <h2 className='text-center'>{`Return to the magnets:`}</h2>
        <Link to='/home'><img className='img-fluid' src='https://cdn.shopify.com/s/files/1/0273/4903/files/frontpage2_mini.jpg?1262g' /></Link>
      </div>
    </div>)

export default ServerNotice
