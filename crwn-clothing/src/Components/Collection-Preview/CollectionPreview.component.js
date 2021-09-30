import React from 'react';
import './collectionPreview.style.scss'
import CollectionItem from '../CollectionItem/CollectionItem.component';

const ColllectionPreview = ({title, items}) =>
{
    return(
        <div className="collection-preview">
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div className="preview">
               {
                    items.filter((item, idx) => idx < 4 )
                    .map((item) => (
                        <CollectionItem key={item.id} {...item} /> 
                    ))
                }
            </div>
        </div>
    );
}

export default ColllectionPreview;