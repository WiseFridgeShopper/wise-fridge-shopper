import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List'
import Paper from 'material-ui/Paper'
import {Card, CardMedia, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import {GridList, GridTile} from 'material-ui/GridList'
import AppBar from 'material-ui/AppBar'
import Review from './Review'
import MagnetThumbnail from './MagnetThumbnail'
import store from '../store'
import {notify} from 'react-notify-toast'

const styles = {
  description: {
    backgroundColor: 'grey'
  },
  reviews: {
    backgroundColor: 'white'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  }
}

const addToCart = (evt) => {
  notify.show('Added to cart!', 'success')
}

const SingleMagnet = props => {
  const getRelatedMagnets = allMagnets => props.allMagnets.filter(magnet => magnet.speaker_id === props.selectedMagnet.speaker_id)

  return (
    <div className={'row'}>
      <div className={'col-md-6'}>
        <Card>
          <AppBar title={props.selectedMagnet.title} style={{backgroundColor: 'black'}} showMenuIconButton={false}/>
          <CardMedia >
            <img src={props.selectedMagnet.image} className={'img-responsive'}/>
          </CardMedia>
          <CardText >
            <List>
              <ListItem primaryText={`Price: $${props.selectedMagnet.price}`}><FlatButton onClick={addToCart} label='Add to Cart' primary={true}></FlatButton></ListItem>
              <ListItem primaryText={props.selectedMagnet.title} />
              <ListItem primaryText={`Size: ${props.selectedMagnet.size}`} />
              <ListItem primaryText={`Item #: ${props.selectedMagnet.itemNumber}`} />
              <ListItem primaryText={`Mood: ${props.selectedMagnet.mood}`} />
            </List>
          </CardText>
        </Card>
      </div>
      <div className='col-md-6'>
        <AppBar title={'Reviews'} style={{backgroundColor: 'black'}} showMenuIconButton={false}/>
        {props.reviews && props.reviews.map(review => {
          return <Review name={review.user.name} rating={review.rating} text={review.comment} />
        })}
        <hr />
        <Card>
          <AppBar title={'More From This Author'} style={{backgroundColor: 'black'}} showMenuIconButton={false}/>
            <GridList style={styles.gridList} cols={2.2}>
              {getRelatedMagnets(props.allMagnets).map((magnet) => (
                <MagnetThumbnail id={magnet.id} image={magnet.image} />
              ))}
            </GridList>
        </Card>

      </div>
    </div>
  )
}

function mapStateToProps(storeState) {
  return {
    selectedMagnet: storeState.magnet.selectedMagnet,
    allMagnets: storeState.magnet.allMagnets,
    reviews: storeState.review.reviews
  }
}

const SingleMagnetContainer = connect(mapStateToProps)(SingleMagnet)

export default SingleMagnetContainer
