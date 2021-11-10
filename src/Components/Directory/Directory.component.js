import React from "react";
import MenuItem from '../MenuItem/MenuItem.component';
import { connect } from 'react-redux';
import { selectCollectionsPreview } from "../../Redux/Collections/collection.selector";

import {DirectoryMenu} from "./Directory.styles.jsx";



const  Directory = ({ collections }) =>
{
    return (
       
        <DirectoryMenu>
            {
               collections.map( collection => <MenuItem key = { collection.id } image = {  collection.imageUrl } title = { collection.title} size = {  collection.size} url = {  collection.url } />)               
            }
        </DirectoryMenu>
    );
}

const mapStateToProps = state => 
({
    collections : selectCollectionsPreview(state)
});

export default connect(mapStateToProps, null)(Directory);