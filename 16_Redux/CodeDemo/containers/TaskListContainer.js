import { connect } from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';

const mapStateToProps = (state) => {
    console.log(`State send to task list = ${JSON.stringify(state.taskReducers)}`)
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
};

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer; 