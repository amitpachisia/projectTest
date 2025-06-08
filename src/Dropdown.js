import React, { useState } from 'react';
const Dropdown = () => {
    const options = ['Apple', 'Banana', 'Orange', 'Grapes'];
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div>
            <label htmlFor="fruit">Choose a fruit:</label>
            <select id="fruit" value={selectedOption} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                {options.map((fruit, index) => (
                    <option key={index} value={fruit}>
                        {fruit}
                    </option>
                ))}
            </select>
            {selectedOption && <p>You selected: {selectedOption}</p>}
        </div>
    );
};
export default Dropdown;