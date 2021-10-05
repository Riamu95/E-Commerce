import React from "react";
import { connect } from 'react-redux';
import { selectCollectionsArray } from "../../Redux/Collections/collection.selector";
import ColllectionPreview from '../Collection-Preview/CollectionPreview.component';
import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({Collections}) => 
{
    return(
        <div className = "collections">
        <h1>COLLECTIONS</h1>
        {
             Collections.map( collection => (
                <div className='collection' key={collection.id}> 
                    <ColllectionPreview title={collection.title} collectionCategory={collection}/>
                </div>
            ))
        }
    </div>
    );
};

const mapStateToProps = state => {
    return {
        Collections : selectCollectionsArray(state)
    };
};

export default connect(mapStateToProps, null)(CollectionsOverview);