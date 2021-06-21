const fetch = require('node-fetch')

const fetchSettings ={
    method: 'GET',
}

exports.getItems = (req, res) => {
    const { search } = { search: req.query.search }
    const fetchUrl = `https://api.mercadolibre.com/sites/MLA/search?q=:${search}`
    fetch(fetchUrl, fetchSettings)
    .then(res => res.json())
    .then((json) => {
      const itemsResults = {
         author: {
             name: 'Danny',
             lastName: 'Urrea'
         },
         categories: json?.filters[0]?.values[0]?.path_from_root.map(({ name }) => name),
         items: json.results.slice(0, 4).map(({id, title, price, currency_id,thumbnail, condition, shipping:{free_shipping}})=>({ 
            id,
            title,
            price:{
                currency: currency_id,
                amount: Math.trunc(price),
                decimals: +(price % 1).toFixed(2)
            },
            picture: thumbnail,
            condition,
            free_shipping
         }))
      }
      res.status(200).json(itemsResults)
    })
    .catch( error => console.log(error))
}

exports.getItemsById = (req, res) =>{
    const { params: {id}} = req
    const fetchItemUrl = `https://api.mercadolibre.com/items/${id}`
    const fetchItemDescriptionUrl = `https://api.mercadolibre.com/items/${id}/description`

    Promise.all([
        fetch(fetchItemUrl, fetchSettings),
        fetch(fetchItemDescriptionUrl, fetchSettings),
    ]).then( responses => (Promise.all( responses.map( response => response.json()))))
    .then((json) => {
        const {id, title, price, currency_id, thumbnail, condition, shipping:{free_shipping}, sold_quantity} = json[0]
        const {plain_text} = json[1]
        const itemResults = {
         author: {
             name: 'Danny',
             lastName: 'Urrea'
         },
         item:{
             id,
             title,
             price: {
                 currency: currency_id,
                 amount: Math.trunc(price),
                 decimals: +(price % 1).toFixed(2)
             },
             picture: thumbnail,
             condition,
             free_shipping,
             sold_quantity,
             description: plain_text
         }
      }
      res.status(200).json(itemResults)
    })
    .catch( error => console.log(error));
}
