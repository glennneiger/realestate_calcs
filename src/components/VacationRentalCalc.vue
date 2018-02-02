<template>
  <div class="vr-analysis">
    <div class="container">
      <div class="col-md-6 mx-auto">
        <div class="card card-body text-center my-5">
          <h1 class="heading display-5 pb-3">Vacation Rental Calculator</h1>
          <form id="vr-form">
            <h2 class="purchace-heading p-3">Purchase Info</h2>

            <!-- Purchase Info -->
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">$</div>
                </div>
                <input v-model="purchasePrice" type="number" class="form-control" placeholder="Purchse Price" >
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">%</div>
                </div>
                <input v-model="interest" type="number" class="form-control" placeholder="Interest Rate" >
              </div>
              <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text"></div>
                  </div>
                  <input v-model="years" type="number" class="form-control" placeholder="Payment Years" >
                </div>
            </div>

            <!-- Expenses -->
            <h2 class="expenses-heading p-3">Expenses</h2>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">$</div>
                </div>
                <input v-model="hoa" type="number" class="form-control" placeholder="Montly HOA">
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">$</div>
                </div>
                <input v-model="tax" type="number" class="form-control" placeholder="Montly Tax">
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">$</div>
                </div>
                <input v-model="insurance" type="number" class="form-control" placeholder="Monthly Insurance">
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">$</div>
                </div>
                <input v-model="utilities" type="number" class="form-control" placeholder="Montly Utilities">
              </div>
            </div>

            <!-- Income -->
            <div class="form-group">
              <h2 class="income-heading p-3">Income</h2>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">$</div>
                    </div>
                    <input v-model="high" type="number" class="form-control" placeholder="High Season Rate">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">$</div>
                    </div>
                    <input v-model="base" type="number" class="form-control" placeholder="Base Rate">
                  </div>
                </div> 
              </div>
            </div>


            <!-- Calculate Button -->
            <div class="form-group">
              <button @click="calculateResluts" class="btn btn-dark btn-block" type="button" value="send">Calculate</button>
            </div>
          </form>

          <!-- Results -->
          <div id="results">
            <h1 class="results-heading my-4">Results</h1>
            <h2 class="expense-total-heading mb-3">Expenses</h2>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">25% Down Payment</div>
                </div>
                <input v-model="downPayment" type="text" class="form-control">
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">Loan Amount</div>
                </div>
                <input v-model="loanAmount" type="text" class="form-control">
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">Mortgage Payment</div>
                </div>
                <input v-model="monthlyPayment" type="text" class="form-control">
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">Total Montly Expenses</div>
                </div>
                <input v-model="totalExpenses" type="text" class="form-control">
              </div>

              <!-- Total Montly Income -->
              <h2 class="total-income-header mt-5 mb-3">Total Montly Income</h2>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">70% Occupancy Rate</div>
                </div>
                <input v-model="seventy" type="text" class="form-control">
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">80% Occupancy Rate</div>
                </div>
                <input v-model="eighty" type="text" class="form-control">
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">90% Occupancy Rate</div>
                </div>
                <input v-model="ninety" type="text" class="form-control">
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
          // Mortgage
          purchasePrice: '',
          interest: '',
          years: '',
          monthlyPayment: '',
          principal: '',
          calculatedInterest: '',
          calculatedPayments: '',
          x: '',
          monthly: '',

          // Expenses
          hoa: '',
          tax: '',
          insurance: '',
          utilities: '',

          // Income
          high: '',
          base: '',

          // Results
          downPayment: '',
          loanAmount: '',
          mortgage: '',
          totalEx: '',
          totalExpenses: '',
          highTotal: '',
          baseTotal: '',
          monthlyIncome: '',
          seventy: '',
          eighty: '',
          ninety: ''
        }
      },

      methods: {
        calculateResluts(e) {
          // Mortgage Calculation
          this.principal = parseFloat(this.purchasePrice);
          this.calculatedInterest = parseFloat(this.interest) / 100 / 12;
          this.calculatedPayments = parseFloat(this.years) * 12;
          this.x = Math.pow(1 + this.calculatedInterest, this.calculatedPayments);
          this.monthly = (this.principal*this.x*this.calculatedInterest)/(this.x-1);

          // Calculate Down Payment
          this.downPayment = parseFloat(this.purchasePrice * 0.25).toLocaleString(undefined, {style: "currency", currency: "USD"});;

          // Calculate Loan Amount
          this.loanAmount = parseFloat(this.purchasePrice * 0.75).toLocaleString(undefined, {style: "currency", currency: "USD"});; 

          // Calculate Mortgage Payment
          if(isFinite(this.monthly)) {
            this.monthlyPayment = this.monthly.toLocaleString(undefined, {style: "currency", currency: "USD"});
          };

          // Calculate Total Expenses
          this.totalEx = this.monthly + parseFloat(this.hoa) + parseFloat(this.tax) + parseFloat(this.insurance) + parseFloat(this.utilities);
          this.totalExpenses = this.totalEx.toLocaleString(undefined, {style: "currency", currency: "USD"});

          // Calculate Income Amounts
          this.highTotal = parseFloat(this.high) * 105;
          this.baseTotal = parseFloat(this.base) * 260;
          this.monthlyIncome = (this.highTotal + this.baseTotal) / 12;

          this.seventy = (this.monthlyIncome * 0.70).toLocaleString(undefined, {style: "currency", currency: "USD"});
          this.eighty = (this.monthlyIncome * 0.80).toLocaleString(undefined, {style: "currency", currency: "USD"});
          this.ninety = (this.monthlyIncome * 0.90).toLocaleString(undefined, {style: "currency", currency: "USD"});

          // Show Results
          document.getElementById('results').style.display = 'block';
        }
      }
    }
  </script>

  <style scoped>
  #results {
    display: none;
  }
  </style>