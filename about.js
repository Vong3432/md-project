new Vue({
	el: '#top-nav',

})

new Vue({
  el: '#mobile-app',
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: false,
      right: null
    }
  }
})