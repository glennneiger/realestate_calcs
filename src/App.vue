<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-success">
      <a href="#" class="navbar-brand">REI Calcs</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" ><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/" tag="li" active-class="active" exact>Home</router-link>
          <router-link class="nav-item nav-link" to="/mortgage" tag="li" active-class="active">Mortgage Calc</router-link>
          <router-link class="nav-item nav-link" to="/caprate" tag="li" active-class="active">Cap Rate Calc</router-link>
          <router-link class="nav-item nav-link" to="/seventy" tag="li" active-class="active">70% Rule Calc</router-link>
          <router-link class="nav-item nav-link" to="/vacation" tag="li" active-class="active">Vacation Rental Calc</router-link>
        </ul>
      </div>
    </nav>

    <div id="header" class="bg-secondary">
      <div  class="container text-light text-center">
        <h1 class="home-title">Real Estate Investment Calculators</h1>
        <p class="lead">Real Estate Investing can be complex, however, there are some general principals that are useful as quick starting points when evaluating properties.  The following calculators are great for getting a quick read on a property.  As always, do your due dilligence when investing in real estate and use these caclulators as one of your evaluation tools.</p>
      </div>
    </div>

    <router-view></router-view>

    <footer>
      <div class="container-fluid bg-dark text-white text-center">
        Summit Web Designs &copy; 2018
      </div>
    </footer>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

body {
  background-color: #ebf0f6;
}

#header {
  padding: 50px;
}

#header h1 {
  font-size: 40px;
}

footer div {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
