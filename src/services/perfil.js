import axios from 'axios'

const baseUrl = process.env.REACT_APP_PERFIL

const perfil = async information => {
  const { data } = await axios.post(baseUrl, information)
  return data
}

export default { perfil }