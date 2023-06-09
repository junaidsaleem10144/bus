const apiUrl = process.env.GATSBY_API_URL

export const request = async ({ url, method = 'GET', params }) => {
  return new Promise(async (resolve, reject) => {
    const route = params
      ? `${url}?${new URLSearchParams(params).toString()}`
      : url
    const endpoint = apiUrl + route

    await fetch(endpoint, {
      method,
    })
      .then(async (response) => {
        const result = await response.json()
        resolve(result)
      })
      .catch((error) => {
        // catch error
      })
  })
}
