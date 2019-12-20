import {connect} from 'react-redux';
import CounterComponent from '../components/CounterComponent';

//Action
import {increaseAction} from '../actions';
import {decreaseAction} from '../actions';

const mapStateToProps = (state) => {
    return{
        times: state.counterReducers ? state.counterReducers : 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onDecrement: (step) => {
            dispatch(decreaseAction(step));
        },
        onIncrement: (step) => {
            dispatch(increaseAction(step))
        }
    }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;