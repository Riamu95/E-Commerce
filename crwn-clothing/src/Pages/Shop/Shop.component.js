import React from 'react';
import shopData from './Shop_Data';
import ColllectionPreview from '../../Components/Collection-Preview/CollectionPreview.component.js';

class Shop extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
        collections : shopData
      };
    }
    

    render()
    {
        return(
            <div className = "collections">
                <h1>COLLECTIONS</h1>
                {
                    this.state.collections.map( collection => (
                        <div key={collection.id }> <ColllectionPreview title = {collection.title} items = { collection.items }/></div>
                    ))
                }
            </div>
        );    
    }
}

export default Shop;