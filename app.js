$(document).ready(function(){
  var count = 10000;
  var begin = new Date();
  var end;
  
  // test DOM method read time
  for(var i = 0; i < count; i++){
    $("div.testClass");
  }
  end = new Date();
  console.log('Time for DOM method read: ' + (end.getTime() - begin.getTime()));
  
  // test property read time
  var begin = new Date();
  for(var i = 0; i < count; i++){
    $("div.testClass").html();
  }
  end = new Date();
  console.log('Time for property read: ' + (end.getTime() - begin.getTime()));
  
  // test updating the DOM
  var begin = new Date();
  for(var i = 0; i < count; i++){
    $("div.testClass").append("<br>" + 'x');
  }
  end = new Date();
  console.log('Time for DOM updating the DOM: ' + (end.getTime() - begin.getTime()));
});