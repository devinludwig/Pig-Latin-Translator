var input;
var splitters = [" ", "!", "?", ".", "&", "(", ")",",","1","2","3","4",'5','6','7','8','9','0','-']
var array = []
var start = 0
var end = 0

var separate = function(text) {
  array = [];
  start = 0;
  for(var index = 0; index <= text.length; index ++) {
      end = index
    if (splitters.indexOf(text[index-1])!== -1 && splitters.indexOf(text[index])!== -1) {
      var section2 = text.slice(index, index + 1)
      array.push(section2);
      start = index + 1;
    } else if (splitters.indexOf(text[index])!== -1){
      var section =  text.slice(start, index)
      var section2 = text.slice(index, index + 1)
      array.push(section);
      array.push(section2);
      start = index + 1
    };

    if (index === text.length) {
      var section =  text.slice(start, end)
      array.push(section);
    return(array);
    };
  };
};

var translate = function(text) {
  
}


$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    $(".result").empty();
    input = $("input").val();
    $(".result").append(separate(input));
    alert(array);
  });
});
