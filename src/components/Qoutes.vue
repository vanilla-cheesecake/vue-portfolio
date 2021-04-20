<template>
  <div
    v-for="(qoutes, index) in qoutesList"
    v-bind:key="index"
    v-bind:selected="index === 0"
  >
    <p>
      Qoute: <i>{{ qoutes.text }}</i>
    </p>
    <p>Author: {{ qoutes.author }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qoutesList: [],
    };
  },
  // FETCH JSON FROM API
  mounted() {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => (this.qoutesList = data))
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>