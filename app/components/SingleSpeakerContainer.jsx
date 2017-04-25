import React from 'react'
import {connect} from 'react-redux'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {GridList, GridTile} from 'material-ui/GridList'
import AppBar from 'material-ui/AppBar'
import MagnetThumbnail from './MagnetThumbnail'
import SpeakerThumbnail from './SpeakerThumbnail'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
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

const SingleSpeaker = props => {
  return (
    <div className={'row'}>
      <div className={'col-md-6'}>
        <SpeakerThumbnail
          key={props.selectedSpeaker.id}
          id={props.selectedSpeaker.id}
          name={props.selectedSpeaker.name}
          bio={props.selectedSpeaker.bio}
          image={props.selectedSpeaker.image} />
          <Card>
            <CardText>
              {props.selectedSpeaker.bio}
            </CardText>
          </Card>
      </div>
      <div className={'col-md-6'}>
        <Card>

          <AppBar title={`Magnets by ${props.selectedSpeaker.name}`}
            style={{backgroundColor: 'black'}}
            showMenuIconButton={false}/>
            <GridList style={styles.gridList} cols={2.2}>
              {props.allMagnets.filter(magnet => magnet.speaker_id === props.selectedSpeaker.id).map((magnet) => (
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
    selectedSpeaker: storeState.speaker.selectedSpeaker,
    allMagnets: storeState.magnet.allMagnets,
  }
}

const SingleSpeakerContainer = connect(mapStateToProps)(SingleSpeaker)

export default SingleSpeakerContainer
