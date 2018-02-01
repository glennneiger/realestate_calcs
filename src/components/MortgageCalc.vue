<template>
  <div class="mortgage-calc mb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="card card-body text-center mt-5">
            <h1 class="heading display-5 pb-3">Mortgage Loan Calculator</h1>
            <form class="loan-form">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">$ </div>
                  </div>
                  <input v-model="amount" type="number" class="form-control" id="amount" placeholder="Loan Amount">
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">%</div>
                  </div>
                  <input v-model="interest" type="number" class="form-control" id="interest" step="0.01" placeholder="Interest">
                </div>
              </div>
              <div class="form-group">
                <input v-model="years" type="number" class="form-control" id="years" placeholder="Years to Repay">
              </div>
              <div class="form-group">
                <button @click="calculateResluts" class="btn btn-dark btn-block">Calculate</button>
              </div>
            </form>

            <!-- Results -->
            <div id="results">
              <h5>Results</h5>
              <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Monthly Payment</div>
                    </div>
                  <input v-model="monthlyPayment" type="text" class="form-control" id="monthly-payment" disabled>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Total Payment</div>
                    </div>
                  <input v-model="totalPayment" type="text" class="form-control" id="total-payment" disabled>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Total Interest</div>
                    </div>
                  <input v-model="totalInterest" type="text" class="form-control" id="total-interest" disabled>
                </div>
              </div>
            </div>
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
        amount: '',
        interest: '',
        years: '',
        monthlyPayment: '',
        totalPayment: '',
        totalInterest: '',
        principal: '',
        calculatedInterest: '',
        calculatedPayments: '',
        x: '',
        monthly: ''
      }
    },

    methods: {
      calculateResluts(e) {
        this.principal = parseFloat(this.amount);
        this.calculatedInterest = parseFloat(this.interest) / 100 / 12;
        this.calculatedPayments = parseFloat(this.years) * 12;
        this.x = Math.pow(1 + this.calculatedInterest, this.calculatedPayments);
        this.monthly = (this.principal*this.x*this.calculatedInterest)/(this.x-1);

        // Calculate Results
        if(isFinite(this.monthly)) {
          this.monthlyPayment = this.monthly.toLocaleString(undefined, {style: "currency", currency: "USD"});
          this.totalPayment = (this.monthly * this.calculatedPayments).toLocaleString(undefined, {style: "currency", currency: "USD"});
          this.totalInterest = ((this.monthly * this.calculatedPayments) - this.principal).toLocaleString(undefined, {style: "currency", currency: "USD"});

          // Show Results
          document.getElementById('results').style.display = 'block';

        }; 
      }
    }
  }
</script>

<style>
#results {
      display: none;
}


  
</style>


