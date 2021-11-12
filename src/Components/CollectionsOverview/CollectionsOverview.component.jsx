import React from "react";
import { useSelector } from 'react-redux';
import { selectCollectionsPreview } from "../../Redux/Collections/collection.selector";
import ColllectionPreview from '../Collection-Preview/CollectionPreview.component';
import './CollectionsOverview.styles.scss';

const CollectionsOverview = () => 
{
    const collections = useSelector((state) => selectCollectionsPreview(state));

    return(
        <div className = "collections">
        <h1>COLLECTIONS</h1>
        {
          collections.map( collection => (
                <div className='collection' key={collection.id}> 
                    <ColllectionPreview  collectionCategory={collection}/>
                </div>
            ))
        }
    </div>
    );
};

export default CollectionsOverview;