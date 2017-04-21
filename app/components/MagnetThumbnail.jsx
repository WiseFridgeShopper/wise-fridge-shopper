import React from 'react'
import {Link} from 'react-router'
import {GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton' // used for purchase button

const style = {
  minHeight: '220px',
  maxHeight: '220px',
}

const MagnetThumbnail = props => (
    <Link key={props.id} to={`/magnets/${props.id}`}>
      <GridTile key={props.id} style={style} actionIcon={<IconButton children={<i className="material-icons md-light">add shopping cart</i>}></IconButton>}>
        <img src={`http://${props.image}`}/>
      </GridTile></Link>
    )

export default MagnetThumbnail
