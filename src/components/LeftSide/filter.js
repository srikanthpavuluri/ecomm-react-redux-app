import React, {useState} from 'react';


const Brands = () => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    
    const brands = [{
        name: "Apple",
        key: "apple",
        id: "1"
    }, {
        name: "Lenovo",
        key: "lenovo",
        id: "2"
    }, {
        name: "Dell",
        key: "dell",
        id: "3"
    }, {
        name: "Samsung",
        key: "samsung",
        id: "4"
    }, {
        name: "Acer",
        key: "acer",
        id: "5"
    }];

    const handleChange = (e) => {
        console.log(e, 'e');
        // if item is not added to list
        if (e.target.checked) {
            if (!selectedBrands.includes(e.target.name)) {
                const previousSelectedBrands = selectedBrands;
                // [1,2,3]
                // ...[1, 2, 3] => 1,2,3 => 1,2,3,4 => [1,2,3,4]
                // [1,2,3,4]
                setSelectedBrands([...previousSelectedBrands, e.target.value]);
            }
        }
        // if item is already added to the list
        if (!e.target.checked) {
            if (selectedBrands.includes(e.target.name)) {
                selectedBrands.filter(selectedBrand => 
                    selectedBrand !== e.target.name
                );
            }
        }
    };


    console.log(selectedBrands, 'selectedBrands');

    return (
        <div className='mb-5'>
            <div className='card'>
                <div className='card-header'>
                    Brands
                </div>
                <ul className='list-group list-group-list'>
                    {brands.map((brand, i) => (
                        <li className='list-group-item' key={brand.key}>
                            <input type="checkbox" className='form-check-input' value={brand.name} onChange={(e) => handleChange(e)}/>
                            <label className='form-check-label' style={{display: 'inline-block', marginLeft: '10px'}}>{brand.name}</label> 
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Brands;