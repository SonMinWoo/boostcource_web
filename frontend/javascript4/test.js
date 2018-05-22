var el = document.querySelector(".outside");

el.addEventListener("click", function(e){
  var target = e.target;
  //console.log("clicked!",e);
  console.log(target.className, target.Nodename);
  console.log(target.innerText);
  debugger;
});
