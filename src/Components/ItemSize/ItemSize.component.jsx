import React from "react";
import './ItemSize.styles.scss';

const ItemSize = ({ onChange }) => 
{
    return (
        <div className='itemSize'>
           <label for="size-select">Choose a Size:</label>

            <select onChange={ onChange } id="size-select">
                <option value="Medium">Medium</option>
                <option value="Extra Small">Extra Small</option>
                <option value="Small">Small</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
            </select>
        </div>

    );
};

export default ItemSize;