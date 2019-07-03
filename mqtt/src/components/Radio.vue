<template>
  <div class="container">
    <div class="bgimg"></div>
    <div class="post-img">
      <img src='@/img/post.jpg'/>
    </div>
    <div class="song-name">songName</div>
    <div class="controller">
      <img src="@/img/previous.png"/>
      <img class="play" src="@/img/play.png"/>
      <img src="@/img/next.png"/>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {playOrPause : '@/img/play.png'}
  },
  computed:{
    // playOrPause: function(){
    //   if(this.playOrPause==='@/img/play.png'){
    //     this.playOrPause = '@/img/pause.png'
    //   } else{
    //     this.playOrPause = '@/img/play.png'
    //   }
    //   return this.playOrPause;
    // }
  },
  methods: {
    onTap: function(){
      if(this.playOrPause==='@/img/play.png'){
        this.playOrPause = '@/img/pause.png'
      } else{
        this.playOrPause = '@/img/play.png'
      }
      return this.playOrPause;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 400px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.bgimg{
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url('../img/post.jpg');
  background-repeat: no-repeat;
  z-index: -1;
  filter: blur(40px);
}

.post-img{
  margin-top: 20px;
}

.post-img img{
  width: 300px;
  height: 300px;
}
.song-name{
  margin: 5px auto;
  font-size: 20px;
  color: black;
}
.controller{
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.controller img{
  width: 30px;
  height: 30px;
}
img.play{
  margin: 0 10px;
  width: 30px;
  height: 30px;
}
.controller img:nth-child(3){
  /* transform: rotateX(-180deg); */
  transition: rotateX(-180deg);
}
</style>
