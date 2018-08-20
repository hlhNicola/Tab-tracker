<template>
<div>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song" />
    </v-flex>
    <v-flex xs6>
      <youtube  :youtubeId="song.youtubeId" class="ml-2"/>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex xs6>
      <tabs :song="song"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <lyrics :song="song"/>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import Youtube from './Youtube'
import Lyrics from './Lyrics'
import Tabs from './Tabs'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
    SongMetadata,
    Youtube,
    Lyrics,
    Tabs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
