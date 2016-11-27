var onReadyEvents = function(){
  var co = new Checkout();
  var person = new Person();
  var output;
  $("#items").html("0");
};

  $("#tie").click(function() {
     co.scan(person, co.items[0]);
     output = co.total(person);
    //  a.forEach(function(entry) {
    //   if(entry.id === "001") {
    //     totalties.push(entry);
    //  };???
     $("#items").html(output);
  });

  $("#sweater").click(function() {
     co.scan(person, co.items[1]);
     output = co.total(person);
     $("#items").html(output);
  });

  $("#skirt").click(function() {
    co.scan(person, co.items[2]);
    output = co.total(person);
    $("#items").html(output);
  });
