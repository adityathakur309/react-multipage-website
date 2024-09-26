
import { HeroSection } from "../components/UI/HeroSection"
import { AboutPage } from "./About"

export const HomePage = () =>{
    return (
        <main className="py-5">
           <HeroSection/>
           <AboutPage/>
        </main>
    )
}