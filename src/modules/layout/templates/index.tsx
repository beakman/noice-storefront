import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"
import NavAlt from "./nav-alt"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavAlt />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
