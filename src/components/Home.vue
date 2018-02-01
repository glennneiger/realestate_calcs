<template>
  <div id="home">
    

    <section class="calculators text-center">
      <div class="container">
        <div class=" row">
          <div class="col-lg-3 col-md-6">
            <div class="buttonpic">
              <img src="../assets/house.svg" alt="" class="img-fluid img-thumbnail">
              <router-link tag="button" to="/mortgage" class="btn btn-success">Mortgage Calculator</router-link>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="buttonpic">
              <img src="../assets/apartments.svg" alt="" class="img-fluid img-thumbnail">
              <router-link tag="button" to="/caprate" class="btn btn-success">Cap Rate Calculator</router-link>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="buttonpic">
              <img src="../assets/rehab.svg" alt="" class="img-fluid img-thumbnail">
              <router-link tag="button" to="/seventy" class="btn btn-success">70% Rule Calculator</router-link>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="buttonpic">
              <img src="../assets/beachfront.svg" alt="" class="img-fluid img-thumbnail">
              <router-link tag="button" to="/vacation" class="btn btn-success">Vacation Rental Calculator</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
.calculators {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 30px;
}

.buttonpic {
  margin: 10px 20px 10px 20px;
}

img {
  margin: 20px 0 20px 0;
  width: 120%;
}

.btn {
  margin-bottom: 40px;
}


</style>
