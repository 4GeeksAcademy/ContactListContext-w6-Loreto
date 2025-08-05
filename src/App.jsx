import { Routes, Route } from "react-router-dom"
import ContactList from "./pages/ContactList"
import AddContact from "./pages/AddContact"
import EditContact from "./pages/EditContact"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit" element={<EditContact />} />
    </Routes>
  )
}

export default App