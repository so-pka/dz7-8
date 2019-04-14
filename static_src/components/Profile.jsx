import React from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { loadProfile } from '../actions/profileActions';

class Profile extends React.Component {

    static propTypes = {
        email: PropTypes.string,
        name: PropTypes.string,
        loadProfile: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {
        return (

            <div className='profile'>
               <h3>Имя: { this.props.name }</h3>
               <h3>e-mail: { this.props.email }</h3>

    </div>


        )
    }
}



const mapStateToProps = ({ profileReducer }) => ({
    name: profileReducer.name,
    email: profileReducer.email,
});

const mapDispatchToProps = dispatch => bindActionCreators({loadProfile}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);