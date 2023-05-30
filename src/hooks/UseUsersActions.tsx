import { UserId, deleteUserById, addNewUser } from "../store/users/slice"
import { useAppDispatch } from "./store"

export const UseUsersActions = ()=> {
    const dispatch = useAppDispatch()
    const addUser = ({ name, email, github }) => {
        dispatch(addNewUser({ name, email, github }))
    }
    const removeUser = (id: UserId)=>{
        dispatch(deleteUserById(id))
    };
    return { addUser , removeUser}
}