
        var scene = document.querySelector('a-scene');

        if (scene.hasLoaded) {
          run();
        } else {
          scene.addEventListener('loaded', run);
        }

        function run () {
          
        }



        window.addEventListener("deviceorientation", handleOrientation, true);
        function handleOrientation(event) {
          var absolute = event.absolute;
          var alpha    = event.alpha;
          var beta     = event.beta;
          var gamma    = event.gamma;

          var resultStr = "abs: " + absolute + " alp: " + alpha + " bet: " + beta + " gam: " + gamma;
          console.log(resultStr);
            var q = document.getElementById("extra");
          q.innerHTML = resultStr;
          // Do stuff with the new orientation data
        }

        setInterval(oneSecondFunction, 1000);
       
        var i = 0;
        

        function oneSecondFunction() {
            i++;
            const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
            //console.log(distanceMsg);   // "890 meters"
           
            if (distanceMsg) {
                var p = document.getElementById("dist");
                p.innerHTML = distanceMsg + " away [" + i + "]";
            }
        }

        window.onload = function () {
          document
            .addEventListener("gps-camera-update-position", function () {
              // here you can change also a-scene or a-entity properties, like
              // changing your 3D model source, size, position and so on
              // or you can just open links, trigger actions...
                var p = document.getElementById("dist");
                p.innerHTML = "Position changed!";
            });
        };
