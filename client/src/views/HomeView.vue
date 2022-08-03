<script lang="ts">
  import axios from "axios";

  const API_URL = import.meta.env.VITE_API_URL;

  export default {
    data() {
      return {
        numberValue: 0
      }
    },
    created() {
      this.fetchNumberValue();
    },
    methods: {
      async fetchNumberValue() {
        const response = await axios.get(`${API_URL}/number-value`);
        this.numberValue = response.data.currentValue;
      },
      async increment() {
        const response = await axios.post(`${API_URL}/number-value/increment`);
        this.numberValue = response.data.newValue;
      }
    }
  }
</script>

<template>
  <main>
    <label>Current value: {{numberValue}}</label>
    <br>
    <button @click="increment()">Increase</button>
  </main>
</template>
