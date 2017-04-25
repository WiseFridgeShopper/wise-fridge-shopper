import React from 'react'
import {Link} from 'react-router'
import {GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton' // used for purchase button

const SpeakerThumbnail = props => (
    <Link key={props.id} to={`/speakers/${props.id}`}>
      <GridTile key={props.id} title={props.name} actionIcon={<IconButton children={<i className="material-icons md-light">add shopping cart</i>}></IconButton>}>
        {<img src={props.image}/>}
      </GridTile></Link>
    )

export default SpeakerThumbnail
