<template>
  <panel title="Song Metadata">
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
            name: 'song-edit',
            params: {
              songId: song.id
            }
          })">
          Edit
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-Image" :src="song.albumImageUrl" alt="album-Image">
          <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>

</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  width: 80%;
  margin: 0 auto;
}
</style>
