// $(window).scroll(function(){
//   if($(window).scrollTop() < 80){
//     $('#top-menu').css({
//       'margin-top':'-60px'
//     });
//   }
//   else{
//     $('#top-menu').css({
//       'margin-top':'0px'
//     });
//   }
// });

window.onload = function(){
  $('#loader').css('display', 'none');	
  $('#content').css('opacity', '1');
  $('.content').css('opacity', '1');
}
$('.special.cards .image').dimmer({
  on: 'hover'
});


// $('.ui.modal').modal('setting', 'transition', 'vertical-flip');
var speakers = ['tony-joseph', 'shreya-krishnan', 'prakash-bare','muneer-m', 'athul-pm', 'meghnad-s', 'aswathi-dinil', 'george-mathen', 'kochouseph-chittilappilly', 'major-chandrakant-nair'];

for(var sp=0; sp<speakers.length; sp++){
  document.getElementById(speakers[sp]).addEventListener('click', function(event){
    var id=event.target.parentElement.id;
    $('#'+id+'-modal').modal('show');
  })
}
function modalClick(event){
  $('#'+event.target.id+'-modal').modal('show');
}

window.sr = ScrollReveal({ reset: true });
sr.reveal('footer', { duration: 1000, reset:false});
sr.reveal('#organisers', { duration: 1000, reset:false });
sr.reveal('#venue', { duration: 1000, reset:false });
sr.reveal('#speakers', { duration: 1000, reset:false });
sr.reveal('#about', { duration: 1000, reset:false });

var bg = document.getElementById('background-images');
var bgImages = ['bg-1', 'bg-3'];
var i=0;
setInterval(function(){
    $('#'+bgImages[i]).css({
      'opacity': 0
    });
    i=(i+1)%2;
    console.log(i);
    $('#'+bgImages[i]).css({
      'opacity': 0.6
    });
},3000);
/*document.getElementById('get-tickets').addEventListener('click',function(){
    $('#get-tickets').addClass('loading');
});*/

// document.getElementById('register-btn').addEventListener('click',function(){
//   var college =$('input[name="college"]:checked')[0].value;
//   $('#register-btn').addClass('loading');
//   if (college == 'gec')
//     window.location.href='https://docs.google.com/forms/d/1_hW93ZDgbdK0MTM2jzwpYjc4SMv_8bAyERbOEt66YqE/edit?c=0&w=1';
//   else
//       window.location.href='https://www.yepdesk.com/tedx-gect';
// });
