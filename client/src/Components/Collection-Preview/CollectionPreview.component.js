import React, { useState } from 'react';
import CollectionItem from '../CollectionItem/CollectionItem.component';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom'; 
import {selectCollectionItems} from '../../Redux/Shop/shop.selector';
import { ReactComponent as LeftArrowLogo} from '../../Assets/leftArrow.svg';
import { ReactComponent as RightArrowLogo} from '../../Assets/rightArrow.svg';
import { CollectionPreviewContainer, TitleContainer , PreviewContainer, LeftArrowContainer, RightArrowContainer, ArrowContainer} from './Collection-Preview.styles';
export  { LeftArrowLogo, RightArrowLogo };

const ColllectionPreview = ({collectionCategory}) => 
{
    const shopItems = useSelector((state) => selectCollectionItems(collectionCategory.title)(state))
    
    const [index, setIndex] = useState({
        startIndex : 0,
        endIndex : 3
    });


    const [maxItems] = useState(shopItems.items?  shopItems.items.length -1 : 0);
    const [previewCount] = useState(4);
    const [title] = useState(collectionCategory.title);
    const history = useHistory();
    const  match = useRouteMatch();

    const onArrowClick = (direction) => {
        //max amount of items to preview on screen per category
        
        //caluclate offset from array boundary to closest index based on direction
        const diff = direction  === 'right' ? (maxItems - index.endIndex) :  ((0 - index.startIndex) * -1);
        //if at array boundary do nothing
        if(diff === 0)
            return null;
            //if array boundary is closer than the max amount 0of items we can display on screen
            //move furthest index to render newest item
            //move closest index to render the last item
            diff <= previewCount ?
                direction === 'left' ?  setIndex({ endIndex : index.startIndex - 1, startIndex : index.startIndex - diff}) :
                setIndex({ startIndex :index.endIndex + 1, endIndex : index.endIndex + diff})
            :
                direction === 'left' ?  setIndex({ endIndex : index.startIndex - 1, startIndex : index.startIndex - previewCount}) :
               setIndex({ startIndex : index.endIndex + 1, endIndex : index.endIndex + previewCount})

    };

    return(
        <CollectionPreviewContainer> 
            <TitleContainer  onClick={ () => history.push(`${match.url}/${title}`)}> {title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
               
               {                                          //render only the indexs we have chosen max of 4
                    shopItems.items.filter((item, idx) => (idx >= index.startIndex && idx <= index.endIndex) )
                    .map((item) => (
                        <CollectionItem key={item.id} {...item} /> 
                    ))
                }
                
            </PreviewContainer>
            <ArrowContainer>
                <LeftArrowContainer onClick={() => onArrowClick('left')}/>
                <RightArrowContainer onClick={() => onArrowClick('right')}/>
            </ArrowContainer>
        </CollectionPreviewContainer>
    );

};

export default ColllectionPreview;