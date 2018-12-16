<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <p>
            <router-link to="/login">Logout</router-link>
        </p>
    </nav>
    <div class = "row">
        <div class="col-md-6">
            <div class="profile-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:2b83f1da42e14fc8a4e48dde834121e3" alt=""/>
                <div class="file btn btn-lg btn-primary">Change Photo
                    <input id = "profile-image" type="file" name="file"/>
                </div>
            </div>
        </div>
        <div class = "col-md-6">
            <h1>Hi {{account.user.firstName}}!</h1>
            <p>User Name: {{account.user.username}}</p>
            <p>Address: {{account.user.address}}</p>
            <p>Country: {{account.user.country}}</p>
            <p>Phone Number: {{account.user.phoneNumber}}</p>
            <p>Gender: {{account.user.gender}}</p>
        </div>
    </div>    
        <router-link to = "/newsfeed"><button class = "btn btn-primary">Newsfeed</button></router-link>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Selectnews from '../news/newsfeed';

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    }
};
</script>

<style scoped>
/*#profile-image {
    width: 30%;
}*/
.profile-img {
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
/*h1, h2 {
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
}*/
</style>