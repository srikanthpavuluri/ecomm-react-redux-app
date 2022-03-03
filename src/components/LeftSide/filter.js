import React, {useState, useEffect} from 'react';
import ProductListData from '../../modules/productList/sampleData';

const Brands = (props) => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [allBrands, setAllBrands] = useState(ProductListData.brands);

    useEffect(() => {
        // callback to the parent components via props
        props.selectedBrands(selectedBrands);
    }, [selectedBrands]);

    const handleChange = (e) => {
        console.log(e, 'e');
        const previousSelectedBrands = selectedBrands;
        // if item is not added to list
        if (e.target.checked) {
            if (!selectedBrands.includes(e.target.value)) {
                // [1,2,3]
                // ...[1, 2, 3] => 1,2,3 => 1,2,3,4 => [1,2,3,4]
                // [1,2,3,4]
                setSelectedBrands([...previousSelectedBrands, parseInt(e.target.value)]);
            }
        } else if (!e.target.checked) {
            // if item is already added to the list 
            if (selectedBrands.includes(parseInt(e.target.value))) {
                const updatedBrands = selectedBrands.filter(
                    selectedBrand => selectedBrand !== parseInt(e.target.value)
                );
                setSelectedBrands(updatedBrands);
            }
        }
    };

    
    return (
        <div className='mb-5'>
            <div className='card'>
                <div className='card-header'>
                    Brands
                </div>
                <ul className='list-group list-group-list'>
                    {allBrands.map((brand, i) => (
                        <li className='list-group-item' key={brand.id}>
                            <input type="checkbox" className='form-check-input' value={brand.id} onChange={(e) => handleChange(e)}/>
                            <label className='form-check-label' style={{display: 'inline-block', marginLeft: '10px'}}>{brand.name}</label> 
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Brands;