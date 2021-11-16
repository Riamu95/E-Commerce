import React  from "react";
import CollectionItem from "../../Components/CollectionItem/CollectionItem.component";
import { selectCollectionItems } from "../../Redux/Shop/shop.selector";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import './CollectionsPage.styles.scss';

const CollectionsPage = () => 
{ 
    const { collectionId } = useParams();
    const { title, items} = useSelector((state) => selectCollectionItems(collectionId)(state));
  
    return(     
        <div className='collections-page'>
            <h2 className='title'> { title.toUpperCase()} </h2>
            <div className='items'>
                {
                    items.map( item => 
                        <CollectionItem  key={item.id} {...item} />)
                }
             </div>    
        </div>
    );
};

export default CollectionsPage;