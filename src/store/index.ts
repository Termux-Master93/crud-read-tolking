import { configureStore, type Middleware } from "@reduxjs/toolkit";
import userReducer, {rollBackUser} from './users/slice'
import { toast } from "sonner";
const persistenceLocalStorageMiddleware: Middleware = (store) => (next) => (action) =>{
   next(action);
    localStorage.setItem("_redux_state_", JSON.stringify(store.getState()));
}

const SyncWidthDatabaseMiddleware: Middleware = store=> next => action => {
    const { type, payload }= action
    const previusState= store.getState()
    //console.log({type, payload})
    next(action)
    if(type === 'users/deleteUserById'){
        const userIdToRemove=payload
        const userToremove = previusState.users.find(user => user.id === payload)
        fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
            method: 'DELETE'
        })
        
        .then(res=>{
            if(res.ok) {
                toast.success('delete width success')
            } 
            throw new Error('error')
        })
        .catch((err)=>{
            toast.error(`error deleting user ${userIdToRemove}`)
            if(userToremove) store.dispatch(rollBackUser(userToremove))
            console.log(err)
        })
    }
    console.log(store.getState())

}

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
    middleware: [ persistenceLocalStorageMiddleware,SyncWidthDatabaseMiddleware ]

});

export type  RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch