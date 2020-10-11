import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-ac1ee.firebaseio.com/'
})