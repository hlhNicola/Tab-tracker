 <template>
  <v-layout> <!-- this part is by Vuetify and I delete the column to make it normal-->
    <v-flex xs6 offset-xs3>
      <panel title="Songs">

        <v-btn
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
          class="cyan accent-2"
          light
          small
          absolute
          right
          fab>
          <v-icon>
            add
          </v-icon>
        </v-btn>

        <div v-for="song in songs"
        class="song"
        :key="song.key">
        <v-layout>
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
             <div class="song-genre">
              {{song.genre}}
            </div>
             <v-btn
              dark
              class="cyan"
              @click="navigateTo({
                name: 'song',
                params: {
                  songId: song.id
                }
              })">
              View
            </v-btn>
          </v-flex>
          <v-flex xs6>
            <img class="album-Image" :src="song.albumImageUrl" alt="album-Image">
          </v-flex>
        </v-layout>

        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: {}
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-Image {
  width: 70%;
  margin: 0 auto;
}
</style>
