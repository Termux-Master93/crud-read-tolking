import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
const DEFAULT_STATE = [
    {
        id: '10101010',
        name: "Peter Doe",
        email: 'nose@gmail.com',
        github: 'Termux-Master93'

    },
    {

        id: '20202020',
        name: "Roxi Vega",
        email: 'nose@gmail.com',
        github: 'nose'

    },
    {

        id: '30303030',
        name: "Luiggi Paredez",
        email: 'nose@gmail.com',
        github: 'nose'

    }
]
export interface User {
    name: string,
    email: string,
    github: string,
}

export type UserId = string;
export interface UserWidthId extends User {
    id: string,
}
const initialState: UserWidthId[] = (()=>{
    const persistenceState=localStorage.getItem("_redux_state_");
    if(persistenceState) {
        return JSON.parse(persistenceState).users;
    }
    return DEFAULT_STATE;
})()


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>)=>{
            const id =crypto.randomUUID()
            return [...state, { id, ...action.payload }]

        },
        deleteUserById: (state,action: PayloadAction<UserId>)=>{
            const id = action.payload;
            return state.filter((user)=> user.id !=id );
        },
        rollBackUser: (state, action: PayloadAction<UserWidthId>)=> {
            const isAllReadyDefined = state.some(user=>user.id ===action.payload.id)
            if(!isAllReadyDefined){
             return [...state, action.payload]

            }
        }
    }
})
export default usersSlice.reducer
export const { addNewUser , deleteUserById,rollBackUser } = usersSlice.actions
