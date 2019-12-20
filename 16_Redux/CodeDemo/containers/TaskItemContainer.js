import { connect } from 'react-redux';
import { toogleTask } from '../actions';
import TaskItemComponent from '../components/TaskItemComponent';
/**
 *  Chuyển đổi sate sau khi thay đổi thành props => cập nhật thay đổi lên view
 */
const mapStateToProps = state => {
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
}

/**
 * Chuyển đổi action người dùng thực hiện thành props 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        onClickToggle: (taskId) => {
            dispatch(toogleTask(taskId))
        }
    };
}

const TaskItemContainer = connect(mapStateToProps, mapDispatchToProps)(TaskItemComponent);
export default TaskItemContainer;