import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import {ListItem} from "material-ui/List";
import {push} from "react-router-redux";

class Header extends React.Component {

    handleLink = (link) => {
        this.props.push(link)
    };

    render() {

        const chatProfile =
            <ListItem
                primaryText='профиль'
                onClick={ () => this.handleLink(`/profile/`) }
            />;

        return (

            <div className="header">
                {  chatProfile  }
            </div>)
    }
}


const mapStateToProps = ({}) => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({push}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);