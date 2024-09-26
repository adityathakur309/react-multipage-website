import { memo } from "react"
import { NavLink } from "react-router-dom"

export const CountryCard = memo(({ data}) => {

  
  return (
    <div className="bg-mutedColor card p-4 rounded-lg shadow-lg  basis-72 grow">
      <h2 className="text-[var(--primary-color)] text-2xl font-bold mb-2">
        {data.countryName}
      </h2>
      <p className="text-[var(--text-color)] mb-2">
        {`population:${data.population}`}
      </p>
      <p className="text-[var(--text-color)] mb-2">
        {`capital:${data.capital}`}
      </p>

      <p className="text-[var(--text-color)] mb-2">
        {data.interestingFact}
      </p>
      <NavLink to={`/country`} className="btn text-center">
        Learn More
      </NavLink>
    </div>
  )

})