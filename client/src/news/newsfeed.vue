<template>
  <div id="newsfeed">
    <div>
        <router-link to = "/profile"><button class = "btn btn-primary btn-sm">Back</button></router-link>
    </div>
   <div class="container" id="main_container">
      
        <select-news v-on:newVendor="newVendor"/>

        <news :articles="articles"/>
   </div>

  </div>
</template>

<script>
import Selectnews from './selectNews'
import News from './news'

export default {
  name: 'newsfeed',
  components:{
    'select-news':Selectnews,
    'news':News
  },
  data () {
    return {
      source:'',
      articles:[]
    }
  },
  methods:{
    newVendor:function(value){
      this.source=value;
      this.$http.get('https://newsapi.org/v2/top-headlines?sources='+this.source+'&apiKey=2b83f1da42e14fc8a4e48dde834121e3')
      .then(function(response){
        return JSON.parse(response.bodyText);
      })
      .then(function(response){
        this.articles=response.articles;
      })
      .catch(function(err){
        console.log(err);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
