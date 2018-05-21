import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getSources, getSource} from '../../store/actions/source'
import './Sources.css';

class Sources extends Component {

  static propTypes = {
    getSources: PropTypes.func.isRequired,
    getSource: PropTypes.func.isRequired,
    sources: PropTypes.array.isRequired
  }

  static defaultProps = {
    Sources: []
  }

  componentWillMount() {
    this.props.getSources();
  }

  getSource(id){
    
  }

  render() {

    return (
      <div className= "sources form-group">
        <label for="exampleFormControlSelect1">Select Source</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option value="Select_Source">--------</option>
        {this.props.sources.map(source =>
          <React.Fragment key={source.id}>
                  <option value = {source.name}>{source.name} ({source.language})</option>
          </React.Fragment>
        )}
        </select>

        </div>
    );//end return
  }
}

const mapStateToProps = (state) => ({
  sources: state.sources
})

const dispatchToProps = (dispatch) => ({
   getSources: () => dispatch(getSources())
})

export default connect(mapStateToProps, dispatchToProps)(Sources);
