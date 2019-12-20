/**
 * Help Component dispatch Actions
 * Convert Component's state => prop
 * Convert Component's dispatch => props
 */

 import AddComponent from '../components/AddComponent';
 import {addNewTask} from '../actions';
 import {connect} from 'react-redux';

 const mapStateToProps = state => {
     return{
        
     }
 }

 const mapDispatchToProps = (dispatch) => {
     return{
         onClickAdd: (inputTaskName) => {
             dispatch(addNewTask(inputTaskName))
         }
     };
 }

 export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);