let clientId = 'iAWLZxxiVRQwFNGpXlPVbg'
let apiKey = 'j1YopgmWLDQyo1pz9FE8VrQpb0pvh8KALWQ8UODi4LL_rgFKjW6inrPeA3DwrzQnYBhTRUraolVB93UHn2AZrAwZ6KsEbdZXC2MQcYkmz0Tw3a4QHX2NRzijoDrOYnYx'

export const Yelp = {
    search(term, location, sortBy) {
        var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        var headers = {
            headers: { Authorization: `Bearer ${apiKey}` }
        }
        return fetch(url, headers)
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    console.log(jsonResponse.businesses)
                    return jsonResponse.businesses.map((business) => {
                        return {
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            id: business.id
                        }
                    })
                }
            })
    }
}
