import axiosClient from './axiosClient'

export const getPosts = async () => {
  const response = await axiosClient.get('/posts')

  return response.data
}

export const getPostById = async (id: number) => {
  return await axiosClient.get(`/posts${id}`)
}

export const addPost = async (data: any) => {
  return await axiosClient.post('/posts', JSON.stringify(data))
}
