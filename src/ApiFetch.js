import { useState } from 'react';

function ApiFetch() {
    const [fetchCountry, setFetchCountry] = useState();
    const [inputValue, setInputValue] = useState();
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    function getCountry() {



        fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
            .then((response) => {
                if (!response.ok) {
                    setError(true);


                }
                return response.json();
            })
            .then((country) => {
                setFetchCountry(country[0]);

            })
            .catch(() => {
                setError(true);

            });


    };
    return (
        <div>
            <input
                type="text"
                placeholder="Country name"
                value={inputValue}
                onChange={handleInputChange}
            />
            {error && <p className="">Country not found</p>}
            {/* {error.message ? <p className="">Country not found</p> : null} */}

            <button type="button" onClick={getCountry}>
                Get
            </button>

            <div className="dataMain">
                {fetchCountry && (
                    <div className="dataList">
                        <p><strong>Name:</strong> {fetchCountry.name.common}</p>
                        <img src={fetchCountry.flags.png} alt="Flag" width="100" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ApiFetch;
