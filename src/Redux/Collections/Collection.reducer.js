const INITIAL_STATE = {
    collections : {
       hats :  {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          url : 'hats',
          size : 'medium',
          linkUrl: 'shop/hats'
        },
        jackets : {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          url : 'jackets',
          size : 'medium',
          linkUrl: 'shop/jackets'
        },
        sneakers : {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          url : 'sneakers',
          size : 'medium',
          linkUrl: 'shop/sneakers'
        },
        womens: {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          url : 'womens',
          id: 4,
          linkUrl: 'shop/womens'
        },
        mens : {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          url : 'mens',
          id: 5,
          linkUrl: 'shop/mens'
        }
    }
};


const collectionReducer = (state=INITIAL_STATE, action) => 
{
    switch(action.payload)
    {
        default :
        return {
            ...state
        };
    }
}

export default collectionReducer;