import { useState } from "react"
import { navContext } from "../../context/navContext"
import Header from "./Header"
import MobileNav from "./MobileNav"
import ScrolledHeader from "./ScrolledHeader"
const Nav = () => {
    const [status, setStatus] = useState(false)
  return (
    <navContext.Provider value={[status, setStatus]}>
             <Header />
             <ScrolledHeader />
             <MobileNav />
    </navContext.Provider>
  )
}

export default Nav