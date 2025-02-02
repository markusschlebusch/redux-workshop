import {connect} from 'react-redux'
import TimesList from '../components/TimesList/TimesList';
import {addNewTime, loadTimesFromServer} from '../actions/TimeActions';

const mapStateToProps = (state) => {
    return {
        times: state.Times.entries,
        isLoading: state.Times.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewTime: (from, to) => {
            dispatch(addNewTime(from, to));
        },
        onMount: () => dispatch(loadTimesFromServer())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimesList);