import { ENV, authFetch } from "@/utils"

export class Coments{
  async getAll(){
    try {
      const sortFilter = 'sort=publishedAt:desc'
      const populateFilter = 'populate=*'
      const filters = `${sortFilter}&${populateFilter}` 
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COMENTS}?${filters}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result

    } catch (error) {
        throw error
    }
  }

  async create(data, userId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COMENTS}`
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

  async update(data, comentsId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COMENTS}/${comentsId}`
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

  async delete(comentsId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COMENTS}/${comentsId}`
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

}


