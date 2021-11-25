import React from "react";
import MenuItem from '../MenuItem/MenuItem.component';
import { useSelector } from 'react-redux';
import { selectCollectionsPreview } from "../../Redux/Collections/collection.selector";

import {DirectoryMenu} from "./Directory.styles.jsx";

const  Directory = () =>
{
    const collections = useSelector((state) => selectCollectionsPreview(state));
    console.log( collections);
    return (
        <DirectoryMenu>
            {
               collections.map( collection => <MenuItem key = { collection.id } image = {  collection.imageUrl } title = { collection.title} size = {collection.size} url = {  collection.url } />)               
            }
        </DirectoryMenu>
    );
}

export default Directory;