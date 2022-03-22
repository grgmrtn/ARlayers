
let renderer;

        	import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			renderer = new THREE.WebGLRenderer({
				alpha:true
			});
			renderer.setSize( window.innerWidth, window.innerHeight);
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			cube.position.x = -6.3;
			cube.position.z = -10
			cube.position.y = 1
			
			scene.add( cube );
			scene.background = new THREE.Color('white');
			camera.position.z = 3;

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			sizeOverlay();

			animate();


		
			$(window).resize(function(){
				sizeOverlay();
			})


			function sizeOverlay() {

				


				const imgWidth = 1891; // THESE ARE THE DIMENSIONS OF THE BACKGROUND IMAGE
				const imgHeight	=	1098;
				const imgRatio = (imgHeight / imgWidth)  //WE USE THIS RATIO TO DETERMINE IF THE SCREEN IS WIDER OR NARROWER THAN THE IMAGE DIMENSIONS
				
				const windowRatio = ($(window).height() / $(window).width())     // container ratio
				
				 if (windowRatio < imgRatio)	{

					const canvasWidth = $(window).width(); //THESE FIGURE OUT THE SIZE THE CANVAS NEEDS TO BE
				
					renderer.setSize(canvasWidth,canvasHeight,false) //RE-RENDER THE SCENE

					$("canvas").css({
						"width":canvasWidth, //THESE OVERCOME THE INLINE STYLE APPLIED TO THE CANVAS
						"height":canvasHeight,
						"top":($(window).height()-canvasHeight)/2  //THIS MOVES THE CANVAS SO THAT IT IS LARGER THAN THE CROP OF THE WINDOW
					})
				
				}  else  {

					const canvasWidth = $(window).height()/imgRatio;
					const canvasHeight = $(window).height();
					
					renderer.setSize(canvasWidth,canvasHeight,false)

					$("canvas").css({
						"width":canvasWidth,
						"height":canvasHeight,
						"left":($(window).width()-canvasWidth)/2
					})


			}
		}