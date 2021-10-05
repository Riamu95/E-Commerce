import React from "react";
import CollectionItem from "../../Components/CollectionItem/CollectionItem.component";
import { categoryItems } from "../../Redux/Shop/shop.selector";
import { connect } from "react-redux";
import './Category.styles.scss';

const CategoryPage = ({match, shopItems}) => 
{ 
    console.log('shopItems', shopItems.items);
    return(     
        <div className='category'>
            <h2> { shopItems.title.toUpperCase()} </h2>
                {
                    shopItems.items.map( item => 
                        <CollectionItem  key={item.id} {...item} />)
                }
        </div>
    );
};

const mapStateToProps = (state,ownProps) => ({
    shopItems : categoryItems(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps,null)(CategoryPage);