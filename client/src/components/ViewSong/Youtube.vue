<template>
  <panel title="Youtube Video">
    <youtube
      :video-id="youtubeId"
      player-width=100%
      player-height=100%>
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
} */
</style>
