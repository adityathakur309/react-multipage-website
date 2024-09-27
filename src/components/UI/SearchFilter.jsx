import { memo } from "react";

export const SearchFilter = memo(({ search, setSearch, filter, setFilter, countryData,setCountryData }) => {

    // handle input change 
    const handleSearchInput = (event) => {
        event.preventDefault()
        setSearch(event.target.value);
    }
    // end 
    // handle filter 
    const handleFilter = (event) => {
        event.preventDefault()
        setFilter(event.target.value);

    }
    // end 
    // sort country 
    const sortCountires = (btnValue) => {
        let sortedCountry = [...countryData].sort((a, b) => {
            if (btnValue === "asc") {
                return a.name.common.localeCompare(b.name.common);
            } else {
                return b.name.common.localeCompare(a.name.common);
            }
        });
        setCountryData(sortedCountry);
    };
    
    // end 
    return (
        <div className="my-10 bg-mutedColor p-5 rounded-lg">
            <div className="flex justify-between gap-5 flex-wrap items-center">
                <input type="text" placeholder="search" className="w-full" value={search} onChange={handleSearchInput} />
                <div className="flex gap-4 basis-10 flex-wrap grow">
                    <button className="btn text-lg w-full" onClick={() => {
                        sortCountires("asc");
                    }}>
                        ascending
                    </button>
                    <button className="btn text-lg w-full" onClick={() => {
                        sortCountires("desc");
                    }}>
                        descending
                    </button>


                </div>
                <div className="flex flex-col gap-2 basi-10 grow">
                    <p className="text-xl text-white">
                        select region
                    </p>
                    <select id="region" name="region" className="basis-10 p-3 rounded-md text-lg outline-none grow" value={filter} onChange={handleFilter}>
                    <option value="all">All</option>
                    <option value="Europe">Europe</option>
                    <option value="Americas">Americas</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                </select>

                </div>
                


            </div>

        </div>
    )
})