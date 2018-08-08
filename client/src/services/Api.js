import axios from 'axios'// library which deal with the http request to the back end

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}// set up connecter to the back end
