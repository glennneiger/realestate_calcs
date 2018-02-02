<template>
  <div class="caprate-calc mb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="card card-body text-center mt-5">
            <h1 class="heading display-5 pb-3">Cap Rate Calculator</h1>
            <form class="cap-form">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                  </div>
                  <input v-model="amount" type="number" class="form-control" id="amount" placeholder="Purchase Price">
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                  </div>
                  <input v-model="rent" type="number" class="form-control" id="rent"  placeholder="Montly Rental Income">
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                  </div>
                  <input v-model="tax" type="number" class="form-control" id="tax"  placeholder="Montly Taxes">
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                  </div>
                  <input v-model="insurance" type="number" class="form-control" id="insurance"  placeholder="Montly Insurance">
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">%</div>
                  </div>
                  <input v-model="vacancy" type="number" class="form-control" id="vacancy"  placeholder="Vacancy Rate">
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">%</div>
                  </div>
                  <input v-model="repairs" type="number" class="form-control" id="repairs"  placeholder="Repairs">
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">%</div>
                  </div>
                  <input v-model="pm" type="number" class="form-control" id="pm"  placeholder="Property Management Fee">
                </div>
              </div>
              <div class="form-group">
                <button @click="calculateResluts" class="btn btn-dark btn-block" type="button" value="send">Calculate</button>
              </div>
              <hr>
              <div id="caprate" class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">Cap Rate</div>
                </div>
                <input v-model="cap" type="text" class="form-control" id="cap">
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
        amount: '',
        rent: '',
        tax: '',
        insurance: '',
        vacancy: '',
        repairs: '',
        pm: '',
        cap: '',
        vacancyAmount: '',
        repairAmount: '',
        propMangAmount: '',
        totalExpenses: '',
        cashFlow: '',
        yearlyCashFlow: ''
      }
    },

    methods: {
      calculateResluts() {
        this.vacancyAmount = parseFloat(this.rent) * (this.vacancy / 100);
        this.repairAmount = parseFloat(this.rent) * (this.repairs / 100);
        this.propMangAmount = parseFloat(this.rent) * (this.pm / 100);

        this.totalExpenses = parseFloat(this.tax) + parseFloat(this.insurance) + parseFloat(this.vacancyAmount) + parseFloat(this.repairAmount) + parseFloat(this.propMangAmount);

        this.cashFlow = parseFloat(this.rent) - this.totalExpenses;
        this.yearlyCashFlow = this.cashFlow * 12;

        this.cap = ((this.yearlyCashFlow / parseFloat(this.amount)) * 100).toFixed(2) + '%';

        e.preventdefault();
      }
    }
  }
</script>

<style>

</style>