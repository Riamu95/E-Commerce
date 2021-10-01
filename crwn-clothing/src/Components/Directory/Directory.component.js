import React from "react";
import './directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem.component';
import { connect } from 'react-redux';
import { selectCollections } from "../../Redux/Collections/collection.selector";
const  Directory = ({ collection }) =>
{
    return (
        <div className="directory-menu">
            {
                collection.map(({ id , ...properties }) => (
                    <MenuItem key = { id } image = { properties.imageUrl } title = {properties.title} size = { properties.size} url = { properties.url } />                  
                ))
            }
        </div>
    );
}

const mapStateToProps = state => 
({
    collection : selectCollections(state)
});

export default connect(mapStateToProps, null)(Directory);