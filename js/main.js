$(document).ready(function(){
    $('.carousel').carousel({
      interval: 3000
    })
  });   


$('input').on('change', function () {
  console.clear();
  console.log(this.value)
})

var tableRows = $('#myTable tbody tr')
filterBoxes = $('.column.right :checkbox').on('change', filterTable);

console.log(tableRows)
function filterTable() {
  var filter_selector = '';
  $('.column.right :checked').each(function() {
    filter_selector += '[' + $(this).attr('name') + '=' + '"' + $(this).val() + '"]';
    console.log(filter_selector)
  });
  if (filter_selector.length < 1) {
    tableRows.show();
  } else {
    tableRows.hide().filter(filter_selector).show();
  }
}


function myFunction() {
  console.log("hi")
  $(".btn").removeClass("active")
  $("#showAll").addClass("active")
  // Declare variables
  var authorInput, authorFilter, table, tr, td, i, txtValue;
  authorInput = document.getElementById("myInput");
  authorFilter = authorInput.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  var yearInput, yearFilter
  yearInput = document.getElementById("myInput_year");
  yearFilter = yearInput.value.toUpperCase();



  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(authorFilter) > -1 && txtValue.toUpperCase().indexOf(yearFilter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function myFunction_year() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput_year");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

 var table = $("#myTable") 

  table.find('tr').each(function () {
    current_row = $(this); //keep track of the row being checked, iterate through it's cells
                    var rowClass = current_row.attr("class") // class of row
                    console.log(rowClass)
  })

//Sort by class..
function filterSelection(thing) {

  console.log("filtering by thing")

  var rows = $('#myTable').find('tr:not(:has(th))').get();
  console.log(rows)

$("#myTable tr").show()


$('#myTable').find('tr:not(:has(th))').not('thead tr').not("[name*=" + thing + "]").fadeOut(300)




var tabhead = "header"
//$("#myTable tbody tr:not(."+thing + ')').hide();

//$("#myTable tr.header").fadeIn(1)

}


//Sort by class..
function filterSelectionByTopic(thing) {

  console.log("filtering by thing")

  var rows = $('#myTable').find('tr:not(:has(th))').get();
  console.log(rows)

$("#myTable tr").show()


$('#myTable').find('tr:not(:has(th))').not('thead td').not("[name*=" + thing + "]").fadeOut(300)



var tabhead = "header"

$("#myTable").find("tr.header:has(+ tr.header)").hide()
//$("#myTable tbody tr:not(."+thing + ')').hide();

//$("#myTable tr.header").fadeIn(1)

}

//Sort by class..
function filterYear(thing) {

  var rows = $('#myTable').find('tr:not(:has(th))').get();
  console.log(rows)

$("#myTable tr").show()


$('#myTable').find('tr:not(:has(th))').not('thead tr').not("[class*=" + thing + "]").fadeOut(300)

var tabhead = "header"
//$("#myTable tbody tr:not(."+thing + ')').hide();

//$("#myTable tr.header").fadeIn(1)

}

//display all
function displayAll() {


$("#myTable tr").show();

$("#myTable tr.header").show();

}

$('.col-6.col-md-3.p-4.alumni').fadeOut(0);

//$('.col-6.col-md-3.p-4.alumni').css("background-color:red");

// $('.btn').not(".showAll").click(function() {
//     $(".btn").removeClass('active');
// });


$(".showAll").click(function() {
    console.log("showAll")
});

// .btn is the class of the element you want to change color

var $btns = $('.btn.people').click(function() {
  console.log(this.id)
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
    $('.col-6.col-md-3.p-4.alumni').fadeOut(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    console.log($el)
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})


$(function(){
    var current = location.pathname;
    $('.navbar-collapse ul li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
})

// $('.nav .nav-link').click(function(){
//     $('.nav .nav-link').removeClass('active');
//     $(this).addClass('active');
// })






const trs=[...document.querySelector("#myTable>tbody").children];
function fltTbl(pat){
  trs
   .filter(tr=>(tr.style.display="none",tr.classList.contains("header")||
tr.dataset.name&&tr.dataset.name.indexOf(pat)>-1))
   .forEach((tr,i,a)=>{
  if (tr.dataset.name
      || a[i+1]&&a[i+1].dataset.name)
    tr.style.display="";
 });
}