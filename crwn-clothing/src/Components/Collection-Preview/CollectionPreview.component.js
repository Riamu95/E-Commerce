import React from 'react';
import './collectionPreview.style.scss'
import CollectionItem from '../CollectionItem/CollectionItem.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import {categoryItems} from '../../Redux/Shop/shop.selector';

const ColllectionPreview = ({collectionCategory, shopItems, history}) =>
{
   
    return(
      
        <div className="collection-preview">
            <h2  onClick={ () => history.push(`/${collectionCategory.title}`)} className='title'>{collectionCategory.title.toUpperCase()}</h2>
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
    shopItems : categoryItems(ownProps.collectionCategory.id)(state)
});

export default withRouter(connect(mapStateToProps, null)(ColllectionPreview));