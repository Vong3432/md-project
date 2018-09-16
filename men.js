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
  el: '#theCarousel',
  data () {
    return {
      items: [
        {
          src: 'image/ad1.jpg'
        },
        {
          src: 'image/ad2.jpg'
        },
        {
          src: 'image/ad3.jpg'
        }        
      ]
    }
  }
})

// ad block detect
$(document).ready(function(){
    if($("#wrapfabtest").height() > 0) {
        alert('No AdBlock :)');
        
    } else {
        alert('AdBlock Detected,Please kindly disable it, this website does not contain any ads but it effect some images. ');
        
    }
});