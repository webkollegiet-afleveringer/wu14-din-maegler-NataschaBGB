import './HousesSort.sass';


export default function HousesSort({ homes, setSelectedType, setPrice, price }) {

    // map through homes and create new array with only the property types
    // new Set is a built in JavaScript object that stores unique values, so it will only keep one of each property type
    const homeTypes = [...new Set(homes.homes.map(home => home.type))];

    return (
        <section className='sort'>
            <div className="container">
                
                <h2>Søg efter dit drømmehus</h2>

                <section className='sort__options'>

                    <div className="sort__type">
                        <label htmlFor="sort">Ejendomstype</label>
                        {/* set the selected property type to the value of the select element */}
                        {/* on change - update the type state */}
                        <select name="sort" id="sort" onChange={e => setSelectedType(e.target.value)}>
                            <option value="default">Ejendomstype</option>
                            {/* get all unique property types from the homes data, loop through them and make an option for each */}
                            {homeTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="sort__price">
                        <label htmlFor="price">Pris-interval</label>
                        
                        {/* slider to set price range */}
                        {/* e.target.value is the current value of the input */}
                        {/* on change - update the price state and show the chosen price */}
                        <input type="range" name="price" id="price" min="0" max="12000000" step="500000" value={price} onChange={e => setPrice(Number(e.target.value))} />
                        
                        <div className="price-range">
                            <span>0 kr.</span>
                            {/* display the selected price on the slider */}
                            {/* if price is greater than 0, display the formatted price */}
                            <span className='price-value'>
                                {price > 0 
                                    ? `${price.toLocaleString('da-DK')} kr.` 
                                    : ''}
                            </span>
                            <span>12.000.000 kr.</span>
                        </div>
                        
                    </div>

                </section>

            </div>
        </section>
    );
}
