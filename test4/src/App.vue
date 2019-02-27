<template>
	<div class='hi'>
		<p>{{ greeting }} World!</p>
		<h2>{{element}}</h2>
	</div>
  
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: 'Hello',
      element: '湖人总冠军'
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