import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import {selectCollectionItems} from '../../Redux/Shop/shop.selector';
import { ReactComponent as LeftArrowLogo} from '../../Assets/leftArrow.svg';
import { ReactComponent as RightArrowLogo} from '../../Assets/rightArrow.svg';
import { CollectionPreviewContainer, TitleContainer , PreviewContainer, LeftArrowContainer, RightArrowContainer} from './Collection-Preview.styles';
import WithSpinner from '../WithSpinner/WithSpinner.component';
export  { LeftArrowLogo, RightArrowLogo };

class  ColllectionPreview extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            startIndex : 0,
            endIndex : 3,
            maxItems :  props.shopItems.items?  props.shopItems.items.length -1 : 0,
            previewCount  : 4,
            title : this.props.collectionCategory.title
        };
    }

   

    onArrowClick = (direction) => {
        //max amount of items to preview on screen per category
        const previewCount = this.state.previewCount;
        //caluclate offset from array boundary to closest index based on direction
        const diff = direction  === 'right' ? (this.state.maxItems - this.state.endIndex) :  ((0 - this.state.startIndex) * -1);
        //if at array boundary do nothing
        if(diff === 0)
            return null;
            //if array boundary is closer than the max amount 0of items we can display on screen
            //move furthest index to render newest item
            //move closest index to render the last item
            diff <= previewCount ?
                direction === 'left' ?  this.setState({ endIndex : this.state.startIndex - 1, startIndex : this.state.startIndex - diff}) :
                this.setState({ startIndex : this.state.endIndex + 1, endIndex : this.state.endIndex + diff})
            :
                direction === 'left' ?  this.setState({ endIndex : this.state.startIndex - 1, startIndex : this.state.startIndex - previewCount}) :
                this.setState({ startIndex : this.state.endIndex + 1, endIndex : this.state.endIndex + previewCount})

    };

    render()
    {
        return(
            <CollectionPreviewContainer> 
                <TitleContainer  onClick={ () => this.props.history.push(`${this.props.match.url}/${this.state.title}`)}> {this.state.title.toUpperCase()}</TitleContainer>
                <PreviewContainer>
                    <LeftArrowContainer onClick={() => this.onArrowClick('left')}/>
                   {                                          //render only the indexs we have chosen max of 4
                        this.props.shopItems.items.filter((item, idx) => (idx >= this.state.startIndex && idx <= this.state.endIndex) )
                        .map((item) => (
                            <CollectionItem key={item.id} {...item} /> 
                        ))
                    }
                    <RightArrowContainer onClick={() => this.onArrowClick('right')}/>
                </PreviewContainer>
            </CollectionPreviewContainer>
        );
    }
}

const mapStateToProps = (state,ownProps) => ({
    shopItems : selectCollectionItems(ownProps.collectionCategory.title)(state)
});

export default withRouter(connect(mapStateToProps, null)(ColllectionPreview));