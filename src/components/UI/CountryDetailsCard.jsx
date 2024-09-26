import { memo } from "react";
import { useNavigate } from "react-router-dom";

export const CountryDetailsCard = memo(({ country }) => {
    let navigate = useNavigate();

    return (
        <div className="flex flex-wrap justify-between gap-5 bg-mutedColor p-5 rounded-lg shadow-lg">
            <div className="md:w-1/2 mb-4 md:mb-0 basis-80 grow">
                <img
                    src={country?.flags?.png || '/default-flag.png'} // Fallback if no flag URL is provided
                    alt={country?.flags?.alt || 'Flag'} 
                    className="w-full object-cover object-center rounded-lg"
                />
            </div>
            <div className="md:w-1/2 md:pl-6 basis-80 grow">
                <h2 className="text-3xl font-bold mb-2">
                    {country?.name?.common || 'Country Name'}
                </h2>
                <p className="mb-2"><strong>Region:</strong> {country?.region || 'N/A'}</p>
                <p className="mb-2"><strong>Population:</strong> {country?.population?.toLocaleString() || 'N/A'}</p>
                <p className="mb-2"><strong>Capital:</strong> {country?.capital ? country.capital[0] : 'N/A'}</p>
                <p className="mb-2">
                    <strong>Languages:</strong> {country?.languages ? Object.values(country.languages).join(', ') : 'N/A'}
                </p>
                <p className="mb-2"><strong>Subregion:</strong> {country?.subregion || 'N/A'}</p>
                <p className="mb-2">
                    <strong>Currencies:</strong> {country?.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A'}
                </p>
                <button onClick={() => navigate(-1)} className="btn mt-4">
                    Go Back
                </button>
            </div>
        </div>
    );
});
