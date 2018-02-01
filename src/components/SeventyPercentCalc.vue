<template>
    <div id="seventy-percent">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card card-body text-center my-5">
              <h1 class="heading display-5 pb-3">70% Rule Calculator</h1>
              <form class="seventy-rule">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">ARV</div>
                    </div>
                    <input v-model="arv" type="number" class="form-control">
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Rehab Cost</div>
                    </div>
                    <input v-model="rehab" type="number" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <button @click="calculateResluts" class="btn btn-dark btn-block">Calculate</button>
                </div>
                <hr>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Purchase Amount</div>
                  </div>
                  <input v-model="purchase" type="text" class="form-control">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          arv: '',
          rehab: '',
          purchase: '',
          arvPercent: '',
          purchasePrice: '',
          errorDiv: '',
          card: '',
          heading: '',
        }
      },

      methods: {
        calculateResluts(e) {
          this.arvPercent = parseFloat(this.arv) * 0.70;
          this.purchasePrice = this.arvPercent - parseFloat(this.rehab)
          this.purchase = this.purchasePrice.toLocaleString(undefined, {style: "currency", currency: "USD"});
        }
      }
    }
  </script>