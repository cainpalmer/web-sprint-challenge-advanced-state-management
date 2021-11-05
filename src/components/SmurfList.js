import React, {useEffect} from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/index';

 const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return(
    <div className="listContainer">
        {props.smurfs.map(smurf => <Smurf smurf = {smurf} key = {smurf.id} />)}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);