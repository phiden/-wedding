$(document).ready(function() {
  
  console.log('site', window.location.href);
  
  //sophia&gavin, or gavin&sophia?
  var whichURL = location.href;
  
  /*if(whichURL = 'http://gavinandsophia.com') {
    
    $('title').text = '';
    
  } else {
    
    
    
  }*/
  
  $('.slides').slick({
    autoplay:false,
    arrows: true,
    dots: true
  });
  
})