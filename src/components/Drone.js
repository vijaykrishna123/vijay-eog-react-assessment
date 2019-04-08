import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { withStyles } from "@material-ui/core/styles";
import Map from './Map'
import CustomChart from './Chart'
const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: "10px 0"
  },
  item: {
    margin: 'auto',
    width: '30%',
    fontSize: 22,
    letterSpacing: 3,
    lineHeight: '23px'
  },
  text: {
    marginRight: 100
  }
});

class Drone extends Component {
  state = {
    currentDron: {},
    count: 0
  }
  componentDidMount() {
    this.props.loadDron();
    this.update();
  }
  update() {
    setInterval(() => {
      if (this.props.drone) {
        let { count } = this.state;
        let currentDron = this.props.drone.data[count];
        count += 1;
        if (count >= this.props.drone.data) {
          count = 1;
          this.props.loadDron()
        }
        this.setState({ currentDron, count })
      }
    }, 3000)
  }
  render() {
    const { currentDron,count } = this.state;
    const { classes } = this.props
    if(!currentDron) return null;
    let keys = Object.keys(currentDron);
    return (
      <div>
        <div className={classes.container}>{keys.map(obj => {
          return (
            <div className={classes.item}>
              <span className={classes.text}>{obj}:</span>{currentDron[obj]}
            </div>
          )
        })}
        </div>
        <div>
          {currentDron.latitude && <Map currentDron={currentDron}
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px`, width: '60%' }} />}
            mapElement={<div style={{ height: `100%` }} />} />}
        </div>
        <div>
          {this.props.drone.data && <CustomChart data={this.props.drone.data.slice(count,count+7)}/>}
        </div>
      </div>



    );
  }
}

const mapState = (state) => {
  return {
    drone: state.drone
  };
};

const mapDispatch = dispatch => ({
  loadDron: () => dispatch({ type: actions.LOAD_DRON })
});

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(Drone));
