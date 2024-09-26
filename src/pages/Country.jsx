import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/PostApi";
import { CountryCard2 } from "../components/UI/CountryCArd2";
import { SearchFilter } from "../components/UI/SearchFilter";

export const CountryPage = () => {
    // state variable for country data
    const [isPending, startTranstion] = useTransition();
    const [countryData, setCountryData] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");


    // end  
    useEffect(() => {
        startTranstion(async () => {
            let res = await getCountryData();
            setCountryData(res.data);
        })

    }, [])

    // search country 
    let searchCountry = (country) => {
        if (search) {
            return country.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        }
        else {
            return country;
        }
    }
    // end 


    // filter countries function
    let filterCountry = (country) => {
        if (filter === "all") {
            return country;

        }
        else {
            return country.region.toLocaleLowerCase() === filter.toLocaleLowerCase();

        }
    }
    // end 
    // filter with filter method
    let filterCountries = [...countryData].filter((country) => {
        return searchCountry(country) && filterCountry(country)

    })
    // end 


    if (isPending) {
        return (
            <div className="flex container justify-between mb-10">
                <div className="loader mx-auto my-5"></div>
            </div>
        )
    }
    return (
        <section className="country-page py-5 container">
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countryData={countryData} setCountryData={setCountryData} />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 max-w-72-lg mx-auto">
                {
                    filterCountries.map((country, index) => {

                        return <CountryCard2 key={index} country={country} />


                    })
                }
            </div>



        </section>
    )
}