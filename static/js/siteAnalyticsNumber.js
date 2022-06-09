// const counter = document.querySelectorAll('.number-numberdata');
// const speedn = 300;
// counter.forEach(counter=> {
//     const updateCount1 = () =>{
//         const target = +counter.getAttribute('data-n');
//         const targetFinal = target;
//         const count= +counter.innerText;
//         const inc = target/speedn;
//         if (count<target){
//             counter.innerText = Math.ceil(count + inc);
//             setTimeout(updateCount1,1);
//         }
//         else{
//             counter.innerText = targetFinal;
//         }
//     }
//     updateCount1();
// });
// $(document).ready(function(){
//     $(".number-numberdata").counterUp({
//         delay:10,
//         time:1200
//     });
// });





//  Changes what I made down below

// var runAlready;
// var counting;

// function startCounter(a) {
//   runAlready = true;
//   counting = true;
//   $('.number-numberdata').each(function() {
//     var $this = $(this);
//     $this.text(a);
//     countTo = $this.attr('data-count');
//     $({
//       countNum: $this.text()
//     }).animate({
//       countNum: countTo
//     }, 
//     {
//       duration: 2000,
//       easing: 'swing',
//       step: function() {
//         $this.text(Math.floor(this.countNum));
//       },
//       complete: function() {
//         $this.text(this.countNum);
//         counting = false;
//       }
//     });
//   })
// }

// $(window).scroll(function() {
//   var oTop = $('#counter').offset().top;
//   var a = 0;
//   if (!runAlready && $(window).scrollTop() > oTop || !counting && $(window).scrollTop() < oTop) {
//     startCounter(a);
//   }
// });