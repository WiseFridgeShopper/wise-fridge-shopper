import React from 'react'
import {Link} from 'react-router'
import {GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton' // used for purchase button
import {notify} from 'react-notify-toast'

const style = {
  minHeight: '220px',
  maxHeight: '220px',
}

const addToCart = (evt) => {
  notify('Added to cart!', 'success')
}

const MagnetThumbnail = props => (
    <Link key={props.id} to={`/magnets/${props.id}`}>
      <GridTile key={props.id} style={style} actionIcon={<IconButton onClick={addToCart} children={<i className="material-icons md-light">add shopping cart</i>}></IconButton>}>
        <img src={`${props.image}`}/>
      </GridTile></Link>
    )

export default MagnetThumbnail
