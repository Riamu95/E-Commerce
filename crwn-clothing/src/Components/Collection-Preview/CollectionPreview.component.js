import React from 'react';
import './collectionPreview.style.scss'
import CollectionItem from '../CollectionItem/CollectionItem.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import {selectCollectionItems} from '../../Redux/Shop/shop.selector';

const ColllectionPreview = ({collectionCategory, shopItems, history, match}) =>
{
    return(
        <div className="collection-preview"> 
            <h2  onClick={ () => history.push(`${match.url}/${collectionCategory.title}`)} className='title'>{collectionCategory.title.toUpperCase()}</h2>
            <div className="preview">
               {
                    shopItems.items.filter((item, idx) => idx < 4 )
                    .map((item) => (
                        <CollectionItem key={item.id} {...item} /> 
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state,ownProps) => ({
    shopItems : selectCollectionItems(ownProps.collectionCategory.title)(state)
});

export default withRouter(connect(mapStateToProps, null)(ColllectionPreview));