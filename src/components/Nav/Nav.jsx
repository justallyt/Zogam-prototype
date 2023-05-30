import { useState } from "react"
import { navContext } from "../../context/navContext"
import Header from "./Header"
import MobileNav from "./MobileNav"
const Nav = () => {
    const [status, setStatus] = useState(false)
  return (
    <navContext.Provider value={[status, setStatus]}>
             <Header />
             <MobileNav />
    </navContext.Provider>
  )
}

export default Nav