import React from "react";
import CollectionItem from "../../Components/CollectionItem/CollectionItem.component";
import { selectCollectionItems } from "../../Redux/Shop/shop.selector";
import { connect } from "react-redux";
import './CollectionsPage.styles.scss';

const CollectionsPage = ({match, shopItems}) => 
{ 
    const { title, items} = shopItems;

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

const mapStateToProps = (state,ownProps) => ({
    shopItems : selectCollectionItems(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps,null)(CollectionsPage);