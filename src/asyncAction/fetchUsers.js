import {addManyUsersAction} from "../store/userReducer";

export const fetchUsers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => dispatch(addManyUsersAction(data)))
    }
}