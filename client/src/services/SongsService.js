import Api from '@/services/Api'

export default {
  index () { // /songs
    return Api().get('songs')
  },
  post (song) { // /songs
    return Api().post('songs', song)
  },
  show (songId) { // /songs
    return Api().get(`songs/${songId}`)
  }
}
