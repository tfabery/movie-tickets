//====================BackEnd=====================
var keanu = {
          name: "Keanu",
          value: 5
};
var warcraft = {
          name: "Warcraft",
          value: 12
};
var blackway = {
          name: "Blackway",
          value: 3
};
var hockney = {
          name: "Hockney",
          value: 5
};
var am = {
          time: "AM",
          value: -1
};
var noon = {
          time: "Noon",
          value: -1
};
var pm = {
          time: "PM",
          value: 1
};
var midnight = {
          time: "Midnight",
          value: 5
};
var child = {
          age: "Child",
          value: -1
};
var adult = {
          age: "Adult",
          value: 0
};
var senior = {
          age: "Senior",
          value: -1
};
var military = {
          age: "Military",
          value: -1
};
var nameArray = [keanu, warcraft, blackway, hockney];
var timeArray = [am, noon, pm, midnight];
var ageArray = [child, adult, senior, military];

function Ticket(name, time, age) {
  this.name = name;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function() {
  var namePrice = 0;
  var agePrice = 0;
  var timePrice = 0;

  for (i=0; i< nameArray.length; i++) {
    if (this.name === nameArray[i].name) {
      namePrice = nameArray[i].value;
    }
  };

  for (i=0; i< timeArray.length; i++) {
    if (this.time === timeArray[i].time) {
      timePrice = timeArray[i].value;
    }
  };

  for (i=0; i< ageArray.length; i++) {
    if (this.age === ageArray[i].age) {
      agePrice = ageArray[i].value;
    }
  };

  return namePrice + timePrice + agePrice;
}




//====================FrontEnd====================
$(function() {
  $('.form').submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var time = $("#time").val();
    var age = $("#age").val();
    var newTicket = new Ticket(name, time, age);

    $('#result').text('$' + newTicket.price());
    $('#price-result').show();

  });
});
