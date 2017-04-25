import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List'
import Paper from 'material-ui/Paper'
import {Card, CardMedia, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {GridList, GridTile} from 'material-ui/GridList'
import AppBar from 'material-ui/AppBar'
import Review from './Review'
import MagnetThumbnail from './MagnetThumbnail'
import {notify} from 'react-notify-toast'
import {addToOrder} from '../reducers/cart'
import store from '../store'

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

const SingleMagnet = props => {
  const getRelatedMagnets = allMagnets => props.allMagnets.filter(magnet => magnet.speaker_id === props.selectedMagnet.speaker_id)
  const addToCart = (evt) => {
    notify.show('Added to cart!', 'success')
    store.dispatch(addToOrder(props.cart.id, props.selectedMagnet.id))
  }
  const placeInCart = (evt) => {
  }

  return (
    <div className={'row'}>
      <div className={'col-md-6'}>
        <Card>
          <AppBar title={props.selectedMagnet.title} style={{backgroundColor: 'black'}} showMenuIconButton={false}/>
          <CardMedia >
            <img src={props.selectedMagnet.image} className={'img-responsive'}/>
            <div className={'col-md-4 col-md-offset-6'}>
              <RaisedButton onClick={addToCart} label='Add to Cart' style={{textAlign: 'center', fontSize: '20px'}} labelStyle={{fontSize: '150%'}} primary={true} />
            </div>
          </CardMedia>
          <CardText >
            <List>
              <ListItem primaryText={`Price: $${props.selectedMagnet.price / 100}`} />
              <ListItem primaryText={props.selectedMagnet.title} />
              <ListItem primaryText={`Size: ${props.selectedMagnet.size[0]}'' x ${props.selectedMagnet.size[1]}''`} />
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
    reviews: storeState.review.reviews,
    cart: storeState.cart
  }
}

const SingleMagnetContainer = connect(mapStateToProps)(SingleMagnet)

export default SingleMagnetContainer
