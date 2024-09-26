import { useEffect, useState } from "react"
import dataCountry from "../api/countryData.json"
import { CountryCardContainer } from "../components/UI/CountryCardContainer"

export const AboutPage = () => {
    const [countryData, setCountryData] = useState([])

    // set country data 
    useEffect(() => {
        setCountryData(dataCountry)
    }, [])
    // end 
    return (
        <section className="about-sec container">
            <h2 className="mb-10 sm:text-center">
                here are the interesting facts
                we're proud of
            </h2>
            <CountryCardContainer countryData={countryData}/>

        </section>
    )
}