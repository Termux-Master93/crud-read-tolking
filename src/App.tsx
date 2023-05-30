
import './App.css'
import { CreateNewUsers } from './componets/CrteateNewUsers'
import { ListOfUsers } from './componets/ListOfUsers'
import { Toaster } from 'sonner'
function App() {

  return (
    <>
      <h2>we proyect width redux</h2>
      <CreateNewUsers/>
      <ListOfUsers />
      <Toaster richColors />
    </>

  )
}

export default App
