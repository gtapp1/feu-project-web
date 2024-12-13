const loader = document.getElementById("pre-loader")

/*window.addEventListener("load", function() {
  loader.style.display = "none";
})*/

window.addEventListener('load', function(load) {
  window.removeEventListener('load', load, false);               
  setTimeout(function(){loader.style.display = 'none'},2000);

},false);