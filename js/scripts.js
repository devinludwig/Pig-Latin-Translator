var input;
var splitters = [" ", "!", "?", ".", "&", "(", ")",",","1","2","3","4",'5','6','7','8','9','0','-']
var array = []
var start = 0
var end = 0
var vowels = ['a','e','i','o','u','A','E','I','O','U']
var consonants = ['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','W','R','T','P','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']

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
  for(i=0;i<text.length;i++){
    if ((text[i][0] === "q" || text[i][0] === "Q") && (text[i][1] === "u" || text[i][1] === "U")) {
      text[i] = text[i].slice(2) + text[i].slice(0,2) + 'ay';
    } else if (vowels.indexOf(text[i][0])!== -1) {
      text[i] = text[i] + 'ay';
      console.log("word: "+text[i] + " array: "+text);
    } else if (text[i][0] === 'y' || text[i][0] === 'Y' || consonants.indexOf(text[i][0])!== -1 && consonants.indexOf(text[i][1])=== -1) {
      text[i] = text[i].slice(1) + text[i].slice(0,1) + 'ay';
    } else if (consonants.indexOf(text[i][0])!== -1 && consonants.indexOf(text[i][1])!== -1) { for(index=0;index<text[i].length;index++) {
        if (consonants.indexOf(text[i][index]) === -1) {
        text[i] = text[i].slice(index) + text[i].slice(0,index) + 'ay';
        break;
        } else if ((text[i][index] === "q" || text[i][index] === "Q") && (text[i][index+1]    === "u" || text[i][index+1] === "U")) {
        text[i] = text[i].slice(index+2) + text[i].slice(0,index+2) + 'ay';
        break;
        }
      }
    }
  }
return text
}


$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    $(".result").empty();
    input = $("input").val();
    separate(input);
    // $(".result").append(separate(input));
    $(".result").append(translate(array));

  });
});
