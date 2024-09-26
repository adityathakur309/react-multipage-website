import { memo } from "react";
import { NavLink } from "react-router-dom";

export const CountryCard2 = memo(({country}) =>{
    let {flags,name,population,region,capital} = country;

    return(
        <>
        <div className="bg-mutedColor card p-4 rounded-lg shadow-lg">
            <img src={flags.svg} alt={flags.alt} className="w-full"/>
      <h2 className="text-[var(--primary-color)] text-2xl font-bold mb-2">
        {name.common}
      </h2>
      <p className="text-[var(--text-color)] mb-2">
       { `region:${region}`}
      </p>
      <p className="text-[var(--text-color)] mb-2">
        {`population:${population}`}
      </p>
      <p className="text-[var(--text-color)] mb-2">
        {`capital:${capital[0]}`}
      </p>

     
      <NavLink to={`/country/${name.common}`} className="btn">
        explore more
      </NavLink>
    </div>
        </>
    )

})