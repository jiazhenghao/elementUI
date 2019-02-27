<template>
	<div class='hi'>
		<p>{{ greeting }} World!</p>
		<h2>{{element}}</h2>
		<h3>wow!</h3>
    <h3>wow!</h3>
    <h4>wow!</h4>
	</div>
  
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: 'Hello',
      element: 'I love these things'
    }
  }
}
</script>

<style scoped>
.hi {
  font-size: 2em;
  text-align: center;
}
</style>