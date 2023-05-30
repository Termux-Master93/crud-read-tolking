import { Button, Card, TextInput, Title } from "@tremor/react";
import { UseUsersActions } from "../hooks/UseUsersActions";
import { useState } from "react";
export function CreateNewUsers(){
    const {addUser}= UseUsersActions()
    const [result,setresult]=useState<'ok' | 'ko' | null>();
    const handleSubmit=(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setresult(null)
        const form = event.target;
        const formData= new FormData(form)
        const name= formData.get('name') as string
        const email= formData.get('email') as string
        const github= formData.get('github') as string
        if(!name || !email || !github){
            return setresult('ko')
        }

        addUser({name, email, github})
        setresult('ok')
        form.reset()
    }
    return (
        <Card>
            <Title>New User</Title>
            <form onSubmit={handleSubmit} >
                <TextInput 
                     name="name"
                    placeholder="AQUI TU NOMBRE"
                />
                <TextInput 
                    name="email"
                    placeholder="AQUI TU EMAIL"
                />
                <TextInput 
                    name="github"
                    placeholder="AQUI TU GITHUB"
                />
                <Button type="submit">Guardar</Button>
            </form>
        </Card>
    );
}