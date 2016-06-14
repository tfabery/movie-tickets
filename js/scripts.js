//====================BackEnd=====================
function Option(variable, value) {
  this.variable = variable;
  this.value = value;
}

var keanu = new Option("Keanu", 5);
var warcraft = new Option("Warcraft", 12);
var blackway = new Option("Blackway", 3);
var hockney = new Option("Hockney", 5);
var am = new Option("7:00 AM", -1);
var noon = new Option("Noon", -1);
var pm = new Option("8:00 PM", 1);
var midnight = new Option("Midnight", 5);
var child = new Option("Child", 0.95);
var adult = new Option("Adult", 1);
var senior = new Option("Senior", 0.5);
var military = new Option("Military", 0.75);

var nameArray = [keanu, warcraft, blackway, hockney];
var timeArray = [am, noon, pm, midnight];
var ageArray = [child, adult, senior, military];

function Ticket(name, time, age) {
  this.name = name;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function() {
  var price = [];
  for (i=0; i< nameArray.length; i++) {
    if (this.name === nameArray[i].variable) {
      price.push(nameArray[i].value);
    }
  };

  for (i=0; i< timeArray.length; i++) {
    if (this.time === timeArray[i].variable) {
      price.push(timeArray[i].value);
    }
  };

  for (i=0; i< ageArray.length; i++) {
    if (this.age === ageArray[i].variable) {
      price.push(ageArray[i].value);
    }
  };

  return (price[0] + price[1]) * price[2];
}

//====================FrontEnd====================
$(function() {
  var price;
  $('.form').submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var time = $("#time").val();
    var age = $("#age").val();
    var newTicket = new Ticket(name, time, age);
    price = newTicket.price().toFixed(2);
    $('#result').text('$' + price);
    $('#price-result').show();

  });

  // $('.pay').click(function() {
  //   window.location.href = '../bank/index.html' + '#' + price + '#' + ;
  // });

  $('.account').submit(function(event) {
    event.preventDefault();

    var name = $('input#person').val();
    var initial = $('input#initial').val();

    window.location.href = '../bank/index.html' + '#' + price + '-' + name + '-' + initial;
  });
});
