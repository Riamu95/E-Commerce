import React from "react";
import './directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem.component';

class Directory extends React.Component {
    
    constructor() {
        super();

        this.state = {
             sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  url : 'hats',
                  size : 'medium',
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  url : 'jackets',
                  size : 'medium',
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  url : 'sneakers',
                  size : 'medium',
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  url : 'womens',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  url : 'mens',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render()
    {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id , ...properties }) => (
                        <MenuItem key = { id } image = { properties.imageUrl } title = {properties.title} size = { properties.size} url = { properties.url } />                  
                    ))
                }
            </div>
        )
    }
}

export default Directory;