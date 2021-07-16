interface itemsTypes{ 
    author: {
        name: string,
        lastName: string
    },
    categories: [string],
    items: [{
      id: string,
      picture: string,
      title: string,
      free_shipping: boolean,
      condition: string,
      price:{
        amount: number,
        currency: string, 
        decimals: number
      }
    }]
}

export const mockedItems: itemsTypes = {
    author:{
            name:"MockAuthorName",
            lastName:"mockAuthorLastName"
        },
        categories:[
            "categoryOne"
        ],
        items:[{
          id:"MLA884674542",
          title:"Mock Title",
          price:{
              currency:"ARS",
              amount:6839,
              decimals:0
          },
          picture:"mockImg.jpg",
          condition:"new",
          free_shipping:true
      }]
};
