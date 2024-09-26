import { FaLongArrowAltRight } from "react-icons/fa"
import { NavLink } from "react-router-dom"
export const HeroSection = () => {
    return (

        <section className="hero-section container  flex items-center py-6 mb-10">
            <div className="flex flex-wrap justify-between gap-8 items-center">
                <div className="text flex flex-col gap-3 basis-80 grow">
                    <h1 className="text-4xl text-primary">explore the world one country at a time</h1>
                    <p>Exploring the world, one country at a time, opens up new experiences with each destination. Every country offers unique culture, history, and landscapes, inviting travelers to dive into its traditions and connect with its people. </p>
                    <NavLink
                        to={`/country`}
                        className={({ isActive }) =>
                            `${isActive ? "active text-green-500 bg-accent" : "text-white"} btn text-textColor`
                        }>
                        Explore Country
                        <FaLongArrowAltRight />
                    </NavLink>

                </div>
                <div className="hero-img basis-80 grow">
                    <img src="/images/world.png" alt="world image" className="w-full" />
                </div>
            </div>



        </section>
    )
}