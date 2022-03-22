
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

			animate();


		
			$(window).resize(function(){
				sizeOverlay();
			})


			function sizeOverlay() {


				const imgWidth = 1891;
				const imgHeight	=	1098;
				const imgRatio = (imgHeight / imgWidth)  
				
				const containerRatio = ($(window).height() / $(window).width())     // container ratio

				let finalWidth, finalHeight;
				 if (containerRatio < imgRatio)	{


					const containerWidth = $(window).width();
					const containerHeight = $(window).width()*imgRatio;
				


					 finalHeight = containerHeight
					 finalWidth = (containerHeight / imgRatio)
					
					renderer.setSize(containerWidth,containerHeight,false)

					$("canvas").css({
						"width":containerWidth,
						"height":containerHeight,
						"top":($(window).height()-containerHeight)/2
					})
				

					
				}  else  {

				
					const containerWidth = $(window).height()/imgRatio;
					const containerHeight = $(window).height();
				


					 finalHeight = containerHeight
					 finalWidth = (containerHeight / imgRatio)
					
					renderer.setSize(containerWidth,containerHeight,false)

					$("canvas").css({
						"width":containerWidth,
						"height":containerHeight,
						"left":($(window).width()-containerWidth)/2
					})


			}
		}