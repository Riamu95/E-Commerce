import React from "react";
import './directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem.component';
import { connect } from 'react-redux';
import { selectCollectionsPreview } from "../../Redux/Collections/collection.selector";

const  Directory = ({ collections }) =>
{
    return (
        <div className="directory-menu">
            {
               collections.map( collection => <MenuItem key = { collection.id } image = {  collection.imageUrl } title = { collection.title} size = {  collection.size} url = {  collection.url } />)               
            }
        </div>
    );
}

const mapStateToProps = state => 
({
    collections : selectCollectionsPreview(state)
});

export default connect(mapStateToProps, null)(Directory);