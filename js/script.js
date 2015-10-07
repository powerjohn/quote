(function() {
  function randomQuote() {
  var array=[["To Be Or Not To Be. ","Will Shakespeare"], ["I Have Nothing To Declare But My Genius. ",
"Oscar Wilde"],["No-one Get's outta here alive ", "Jim Morrisson"],["May you never lay your head down alone ",
"John Martyn"], ["Eat my Shorts ", "Bart Simpson"],["Welcome to the dark-side ", "Darth Vader"],
["Design is content with intent, Content without intent is noise, Intent without content is decoration", 
"Joe Sparano"]],
  index = Math.floor(Math.random() * array.length);
  document.getElementById("txtbox").innerHTML = "<p class=\"quote\">" + array[index][0]  
  +"<\p><p class = \"author\"><em>" + "-- " + array[index][1] + "</em></p>";
}

function testClick() {
  var t = document.getElementById("txtbox").textContent;
  t = t.replace(/\s/g, "\%20");
  document.getElementById("tweetbtn").href = "https://twitter.com/intent/tweet?text=" + t;
}
  document.getElementById("req").addEventListener("click", randomQuote);
  document.getElementById("tweetbtn").addEventListener("click", testClick);

})()