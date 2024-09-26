import { useState } from "react"
import { HiBars3BottomRight } from "react-icons/hi2"
import { IoMdClose } from "react-icons/io"
import { NavLink } from "react-router-dom"

export const Header = () => {
    // nav bar active state 
    const [active, setIsActive] = useState(false)
    // ed=nd 
    return <header className="bg-mutedColor py-5 sticky top z-10 mb-10">
        <nav className="flex items-center container justify-between flex-wrap gap-2">
            <div className="logo">
                <h2>WorldAtlas</h2>
            </div>
            <div className={`nav-links  flex gap-5 items-center ${active ? "nav-active" : ""}`}>
                <NavLink
                    to={`/`}
                    className={({ isActive }) =>
                        `text-textColor ${isActive ? "active" : ""} hover:text-primary transition-all`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to={`/about`}
                    className={({ isActive }) =>
                        `text-textColor ${isActive ? "active" : ""} hover:text-primary transition-all`
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to={`/country`}
                    className={({ isActive }) =>
                        `text-textColor ${isActive ? "active" : ""} hover:text-primary transition-all`
                    }
                >
                    Country
                </NavLink>

                <NavLink
                    to={`/contact`}
                    className={({ isActive }) =>
                        `text-textColor ${isActive ? "active" : ""} hover:text-primary transition-all`
                    }
                >
                    Contact
                </NavLink>


            </div>
            <div className="bar cursor-pointer" onClick={() => {
                setIsActive(!active)
            }}>
                {active ? <IoMdClose className="text-textColor text-4xl cursor-po
             " /> : <HiBars3BottomRight className="text-textColor text-4xl cursor-po
             " />}

            </div>


        </nav>

    </header>
}