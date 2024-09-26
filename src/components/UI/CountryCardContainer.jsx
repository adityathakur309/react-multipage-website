import { memo } from "react"
import { CountryCard} from "../UI/CountryCard"

export const CountryCardContainer = memo(({countryData}) =>{
    return (
        <div className="flex flex-wrap justify-between gap-5">
                {countryData.map((data) => {
                    return <CountryCard key={data.id} data={data} />
                })

                }
            </div>
    )
})