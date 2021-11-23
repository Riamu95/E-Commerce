import React  from "react";
import CollectionItem from "../../Components/CollectionItem/CollectionItem.component";
import { selectCollectionItems } from "../../Redux/Shop/shop.selector";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { CollectionsPageContainer , Title, Items} from './CollectionPage.styles';

const CollectionsPage = () => 
{ 
    const { collectionId } = useParams();
    const { title, items} = useSelector((state) => selectCollectionItems(collectionId)(state));
  
    return(     
       <CollectionsPageContainer>
           <Title>  { title.toUpperCase()} </Title>
           <Items>
                {
                    items.map( item => 
                        <CollectionItem  key={item.id} {...item} />)
                }
           </Items>  
        </CollectionsPageContainer>
    );
};

export default CollectionsPage;