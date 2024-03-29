import { ENV, authFetch } from "@/utils"

export class Products{
  async getAll(){
    try {
      const sortFilter = 'sort=publishedAt:desc'
      const populateFilter = 'populate=*'
      const filters = `${sortFilter}&${populateFilter}` 
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?${filters}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result

    } catch (error) {
        throw error
    }
  }

  async getById(id){
    try {
      const filterId = `filters[id][$eq]=${id}`
      const populateFilter = 'populate=*'
      const filters = `${filterId}&${populateFilter}`
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?${filters}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result.data[0]

    } catch (error) {
        throw error
    }
  }

  async getBySlug(slug){
    try {
      const filterId = `filters[slug][$eq]=${slug}`
      const populateFilter = 'populate=*'
      const filters = `${filterId}&${populateFilter}`
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?${filters}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result.data[0]

    } catch (error) {
        throw error
    }
  }

  async create(data, userId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}`
      const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: {
        ...data,
        user: userId,
      },
    }),
    }

    const response = await authFetch(url, params)
    const result = await response.json()

    if(response.status !== 200) throw result

      return result

    } catch (error) {
       throw error
    }
  }

  async update(data, productId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}/${productId}`
      const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data}),
    }

    const response = await authFetch(url, params)
    const result = await response.json()

    if(response.status !== 200) throw result

      return result

    } catch (error) {
       throw error
    }
  }

  async delete(productId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}/${productId}`
        const params = {
          method: 'DELETE',
        }

        const response = await authFetch(url, params)
        const result = await response.json()

        if(response.status !== 200) throw result

        return result

    } catch (error) {
        throw error
    }
  }

  async searchProducts(text, page) {
    try {
      const filters = `filters[title][$contains]=${text}`
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`
      const populate = 'populate=*'
      const urlParams = `${filters}&${pagination}&${populate}`
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?${urlParams}`

      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result

    } catch (error) {
        throw error
    }
  }

}


