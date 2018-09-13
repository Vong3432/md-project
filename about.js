

new Vue({
	el: '#top-nav',
	data () {
    return {    	
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard',target:'index.html'},
        { title: 'About', icon: 'question_answer' }
      ],
      mini: false,
      right: null
    }
  }
})

new Vue({
  el: '#mobile-app',
  
})

new Vue({
	el: '#parallax',
})

new Vue({
	el:'#interest-chip',
})

new Vue({
  el: '#theFooter',
  data: () => ({
    icons: [
      'fab fa fa-facebook',
      'fab fa fa-twitter',
      'fab fa fa-google-plus',
      'fab fa fa-linkedin',
      'fab fa fa-instagram'
    ]
  })
})