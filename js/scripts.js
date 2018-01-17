/*Count to: 30
Count by: 5
Output: 5, 10, 15, 20, 25, 30 */
$(document).ready(function() {


  $("button").click(function(event) {
    var bla = parseInt($('#txt_name1').val());
    var bla2 = parseInt($('#txt_name2').val());
    var bla3 = parseInt($('#txt_name3').val());

    console.log(bla+" "+bla2+" "+bla3);
      for (var i = bla; i <= bla2; i+=bla3) {
        //console.log(bla+" "+bla2+" "+bla3);
        console.log(i);
        event.preventDefault();
      }

    });

});;
