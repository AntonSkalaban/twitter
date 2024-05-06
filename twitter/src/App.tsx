import { Route,  Routes ,} from "react-router-dom"
import { Home, SignUp } from "./pages"


function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-up" element={<SignUp />} />
  </Routes>
  )
}

export default App
