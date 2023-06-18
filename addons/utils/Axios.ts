"use strict"
import axios from "axios";


const devMode = process.env.NODE_ENV === 'development'

const $baseApi = axios.create({ baseURL: 'https://baseapi.orbrift.com/rift-v1/', })
// const $contentApi = axios.create({ baseURL: `https://cdn.contentful.comspaces/${appConfig.contentfulSpaceId}/environments/master`, })
const $contentApi = axios.create({ baseURL: 'https://api.orbrift.com/wp-json/wp/v2/', })

const defineGqlRequest = (appConfig)=>{
  const $gqlApi = axios.create({ baseURL: `https://cdn.contentful.comspaces/${appConfig.contentfulSpaceId}/environments/master`})
  // const $gqlApi = axios.create({ baseURL: `https://graphql.contentful.com/content/v1/spaces/${appConfig.contentfulSpaceId}/environments/master`})
  $gqlApi.defaults.headers.common['Authorization'] = `Bearer ${appConfig.contentfulDeliveryKey}`

  $gqlApi.interceptors.request.use(
    function (config) {
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  $gqlApi.interceptors.response.use(
    function (response) {
      if (devMode)
        console.log(response)
  
      return response
    },
  
    /* if error */
    function ({ response }) {
      if (devMode)
        console.log(response)
  
      return Promise.reject(response)
    }
  )

  return $gqlApi
}

// $baseApi.defaults.headers.common['Authorization'] = 'Bearer '
// $contentApi.defaults.headers.common['Authorization'] = 'Bearer '

$baseApi.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
$baseApi.interceptors.response.use(
  function (response) {
    if (devMode)
      console.log(response)

    return response
  },

  /* if error */
  function ({ response }) {
    if (devMode)
      console.log(response)

    return Promise.reject(response)
  }
)

$contentApi.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
$contentApi.interceptors.response.use(
  function (response) {
    if (devMode)
      console.log(response)

    return response
  },

  /* if error */
  function ({ response }) {
    if (devMode)
      console.log(response)

    return Promise.reject(response)
  }
)

export {
  $baseApi,
  $contentApi,
  defineGqlRequest
}