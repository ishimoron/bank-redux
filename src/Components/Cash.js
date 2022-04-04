import React from 'react';
import styles from '../styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ADD_CASH, cashReducer, GET_CASH} from "../store/cashReducer";
import {ADD_USER, addManyUsers, addUserAction, REMOVE_USER, removeUserAction} from "../store/userReducer";
import {fetchUsers} from "../asyncAction/fetchUsers";

const Cash = () => {
    const cash = useSelector(state => state.cash.cash)
    const users = useSelector(state => state.user.users)
    console.log(users)
    const dispatch = useDispatch()

    const addCash = (cash) => {
        dispatch({type: ADD_CASH, payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: GET_CASH, payload: cash})
    }

    const addUser = (name) => {
        const user = {
            name,
            id: Date.now()
        }
        dispatch(addUserAction(user))
    }


    const deleteUser = (id) => {
        dispatch(removeUserAction(id))
    }
    return (
        <div className={styles.container}>
            You balance is: <span className={styles.cash}>{cash}</span>

            <div className={styles.button}>
                <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
                <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
                <button onClick={() => addUser(prompt())}>Add User</button>
                <button onClick={() => dispatch(fetchUsers())}>Add Many Users</button>
            </div>

            <div>
                {users.length > 0 ?
                    <div>
                        {users.map(user =>
                            <div style={{display: "flex"}}>
                                <div className={styles.users} key={user.id}>{user.name}</div>
                                <button onClick={() => deleteUser(user.id)} className={styles.delete_btn}>Delete User
                                </button>
                            </div>
                        )}
                    </div>
                    : <h1>Клиенты не найдены</h1>
                }
            </div>
        </div>
    );
};

export default Cash;
