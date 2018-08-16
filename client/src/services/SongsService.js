import Api from '@/services/Api'

export default {
  index () { // /songs
    return Api().get('songs')
  }
}
