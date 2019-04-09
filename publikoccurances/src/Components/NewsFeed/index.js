import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux';

class NewsFeed extends React.Component {

    render() {
        return <div>NEWS</div>
    }
}


NewsFeed.propTypes = {

}

const mapStateToProps = (state) => {

}

const mapDispatchToProps= (dispatch) => {

}

const EnstatedNewsFeedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsFeed);

export default EnstatedNewsFeedComponent;