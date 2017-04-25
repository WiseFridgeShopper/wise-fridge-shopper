import React from 'react'
import GridList, {GridTile} from 'material-ui/GridList'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import TextField from 'material-ui/TextField' // used for search bar
import IconButton from 'material-ui/IconButton' // used for purchase button
import MagnetThumbnail from './MagnetThumbnail'
import SpeakerThumbnail from './SpeakerThumbnail'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  // local state search bar handler
  handleChange(evt) {
    this.setState({ query: evt.target.value })
  }

  filterBySpeakerName(item) {
    return item.name.toLowerCase().includes(this.state.query.toLowerCase()) || item.bio.toLowerCase().includes(this.state.query.toLowerCase())
  }

  filterByQuote(item) {
    return item.quote.toLowerCase().includes(this.state.query.toLowerCase())
  }

  filterByTitle(item) {
    return item.title.toLowerCase().includes(this.state.query.toLowerCase())
  }

  renderFilteredMagnets() {
    if (this.state.query) {
      return this.props.magnets && this.props.magnets.filter(item => this.filterByQuote(item) || this.filterByTitle(item))
        .map(item => <MagnetThumbnail key={item.id} id={item.id} image={item.image} />)
    } else {
      return this.props.magnets && this.props.magnets.map(item => <MagnetThumbnail key={item.id} id={item.id} image={item.image} />)
    }
  }

  renderFilteredSpeakers() {
    if (this.state.query) {
      return this.props.speakers && this.props.speakers.filter(item => this.filterBySpeakerName(item))
        .map(item => <SpeakerThumbnail key={item.id} id={item.id} name={item.name} bio={item.bio} image={item.image} />)
    } else {
      return this.props.speakers && this.props.speakers.map(item => <SpeakerThumbnail key={item.id} id={item.id} name={item.name} bio={item.bio} image={item.image} />)
    }
  }

  /* Check global state for selected tab ('magnets' or 'speakers').
  *  Change which filter we run to match the tab. || operator can be used inside gridlist to
  *  render proper thumbnails. */
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <TextField name={'searchFilter'} fullWidth={true} hintText={'search speakers or quotes'} onChange={this.handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <GridList padding={50} cols={3} title='Products' >
              { this.props.selectedTab === 'speakers' ? this.renderFilteredSpeakers() : this.renderFilteredMagnets() }
            </GridList>
          </div>
        </div>
      </div>)
  }
}

const mapStateToProps = (storeState, ownProps) => {
  return {
    selectedTab: storeState.selectedTab,
    speakers: storeState.speaker.allSpeakers,
    magnets: storeState.magnet.allMagnets
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
