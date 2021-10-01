import React from 'react';
import { connect } from 'react-redux';
import ColllectionPreview from '../../Components/Collection-Preview/CollectionPreview.component.js';
import { shopCollections } from '../../Redux/Shop/shop.selector.js';

const Shop = ({collections}) => 
{
    return(
        <div className = "collections">
            <h1>COLLECTIONS</h1>
            {
                 collections.map( collection => (
                    <div key={collection.id }> <ColllectionPreview title = {collection.title} items = { collection.items }/></div>
                ))
            }
        </div>
    );    
}

const mapStateToProps = state => ({
    collections : shopCollections(state)
});

export default connect(mapStateToProps,null)(Shop);