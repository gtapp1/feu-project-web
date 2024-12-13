const audio = document.getElementById('background-audio');

        // Play audio after user interacts with the page
        document.addEventListener('click', () => {
            audio.play().catch(error => console.log('Playback error:', error));
        });

        const loader = document.getElementById("pre-loader")

/*window.addEventListener("load", function() {
  loader.style.display = "none";
})*/

window.addEventListener('load', function(load) {
  window.removeEventListener('load', load, false);               
  setTimeout(function(){loader.style.display = 'none'},2000);

},false);