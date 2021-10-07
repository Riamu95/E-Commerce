import React from "react";
import { connect } from 'react-redux';
import { selectCollections } from "../../Redux/Collections/collection.selector";
import ColllectionPreview from '../Collection-Preview/CollectionPreview.component';
import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({Collections}) => 
{
    console.log(Collections);
    return(
        <div className = "collections">
        <h1>COLLECTIONS</h1>
        {
            Object.keys(Collections).map( collection => (
                <div className='collection' key={Collections[collection].id}> 
                    <ColllectionPreview  collectionCategory={Collections[collection]}/>
                </div>
            ))
        }
    </div>
    );
};

const mapStateToProps = state => {
    return {
        Collections : selectCollections(state)
    };
};

export default connect(mapStateToProps, null)(CollectionsOverview);