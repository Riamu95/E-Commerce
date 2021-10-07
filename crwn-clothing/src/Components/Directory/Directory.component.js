import React from "react";
import './directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem.component';
import { connect } from 'react-redux';
import { selectCategoryCollections } from "../../Redux/Collections/collection.selector";

const  Directory = ({ collection }) =>
{
    const collections = collection[0];
 
    return (
        <div className="directory-menu">
            {
                Object.keys(collections).map( collection => <MenuItem key = { collections[collection].id } image = {  collections[collection].imageUrl } title = { collections[collection].title} size = {  collections[collection].size} url = {  collections[collection].url } />)               
            }
        </div>
    );
}

const mapStateToProps = state => 
({
    collection : selectCategoryCollections(state)
});

export default connect(mapStateToProps, null)(Directory);