
        	import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

        	function main() {
 
        		//global setups
        		const fov = 40;
        		const aspect = 6;
        		const near = 0.1;
        		const far = 200;
        		var scrollAmt = 0;

        		//color palette
        		const _RED = 	new THREE.Color().setHex("0x99253C");
        		const _ROSE = 	new THREE.Color().setHex("0xE66882");
        		const _LILAC = 	new THREE.Color().setHex("0x8B91EB");
        		const _VIOLET = new THREE.Color().setHex("0x434999");
        		const _HILITE = new THREE.Color().setHex("0xC0E64E");
        		const _GREY = 	new THREE.Color().setHex("0xAAAAAA");
        		const _WHITE = 	new THREE.Color().setHex("0xFFFFFF");
        		const _YELLOW = new THREE.Color().setHex("0xF0E035");

        		const _PT_S = 3 * Math.PI / 2;
        		const _PT_N = Math.PI / 2;
        		const _PT_E = 0;
        		const _PT_W = Math.PI;

        		//m1: existing intersection techniques
        		//m1s1: green light W, red light N/S
        		//m1s2: green light N/S, S car is turning W
        		//m1s3: yellow light N/S, S finishes turning W
        		//m2: centralized
        		//m2s1: drop in intersection manager
        		//m2s2: cars approach and ping manager
        		//m2s3: cars receive order from manager and complete movements
        		//m3: negotiated
        		//m3s1: show manager and explain bidding system
        		//m3s2: cars arrive and send bids to manager
        		//m3s3: cars receive order from manager and complete movements
        		//m4: emergent
        		//m4s1: remove manager and explain evolutionary theory
        		//m4s2: one car drives most aggressively, others brake
        		//m4s3: remaining cars resolve issues



        		const scenes = [];
        		const cameras = [];
        		const lights = [];
        		//each element in the array below spawns a THREEjs renderer and ties it to canvasSelector element provided in the DOM.
        		const canvases = [
        			initCanvas({
        				canvasSelector: "#canvasA",
        				scrollInit: 10,
        				scrollFinal: 33,
        				assets: [
        					{
        						id: "a-hilitecar1",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 0,
	        								finalP: 30,
	        								position: {
	        									init: {
				        							x: -2,
				        							y: 0,
				        							z: 100
				        						},
				        						final: {
				        							x: -2,
				        							y: 0,
				        							z: -20
				        						}
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "a-rosecar",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _ROSE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						position: {
	        							x: 3,
				        				y: 0,
				        				z: 100
	        						},
	        						anims: [
	        							{
	        								initP: 10,
	        								finalP: 27,
	        								position: {
	        									init: {
				        							x: 3,
				        							y: 0,
				        							z: 100
				        						},
				        						final: {
				        							x: 3,
				        							y: 0,
				        							z: -20
				        						}
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "a-hilitecar2",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_N,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 40,
	        								finalP: 70,
	        								position: {
	        									init: {
				        							x: -20,
				        							y: 0,
				        							z: 35
				        						},
				        						final: {
				        							x: 30,
				        							y: 0,
				        							z: 35
				        						}
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "a-rosecar2",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _ROSE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_S,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 45,
	        								finalP: 78,
	        								position: {
	        									init: {
				        							x: 20,
				        							y: 0,
				        							z: 25
				        						},
				        						final: {
				        							x: -30,
				        							y: 0,
				        							z: 25
				        						}
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "a-lilaccar",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _LILAC
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_N,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 50,
	        								finalP: 76,
	        								position: {
	        									init: {
				        							x: -30,
				        							y: 0,
				        							z: 35
				        						},
				        						final: {
				        							x: -3,
				        							y: 0,
				        							z: 35
				        						}
				        					}
	        							},
	        							{
	        								initP: 76,
	        								finalP: 94,
	        								position: {
	        									path: {
				        							aX: -3,
				        							aZ: 25,
				        							xRad: 10,
				        							zRad: 10,
				        							aStart: Math.PI / 2,
				        							aEnd: 2 * Math.PI,
				        							aAntiClock: true //reversed from spec due to xy-xz translation
				        						}
				        					},
				        					rotation: {
	        									init: {
				        							x: 0,
				        							y: _PT_N,
				        							z: 0
				        						},
				        						final: {
				        							x: 0,
				        							y: _PT_W,
				        							z: 0
				        						}
				        					}
	        							},
	        							{
	        								initP: 94,
	        								finalP: 100,
	        								position: {
	        									init: {
				        							x: 7,
				        							y: 0,
				        							z: 25
				        						},
				        						final: {
				        							x: 7,
				        							y: 0,
				        							z: -20
				        						}
				        					}
	        							},	
	        						]
        						}
        					},
        					{
        						id: "a-int",
        						assetType: "plane",
        						hide: true,
        						options: {
        							texture: false,
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 20,
	    	    						h: 50
	        						},
	        						rotation: {
	        							x: Math.PI  /2,
	        							y: 0,
	        							z: Math.PI
	        						},
	        						position: {
	        							x: 0,
	        							y: 0,
	        							z: 40
	        						},
	        						anims: [
	        							{
	        								initP: 0,
	        								finalP: 10,
	        								position: {
	        									init: {
				        							x: 0,
	        										y: -10,
	        										z: 40
				        						},
				        						final: {
				        							x: 0,
	        										y: 0,
	        										z: 40
				        						}
				        					}
	        							},
	        							{
	        								initP: 15,
	        								finalP: 20,
	        								color: {
	        									init: {
				        							_HILITE
				        						},
				        						final: {
				        							_RED
				        						}
				        					}
	        							},
	        							{
	        								initP: 30,
	        								finalP: 32,
	        								rotation: {
	        									init: {
				        							x: Math.PI  /2,
	        										y: 0,
	        										z: Math.PI
				        						},
				        						final: {
				        							x: Math.PI  /2,
	        										y: 0,
	        										z: 3 * Math.PI / 2
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 20,
				        							h: 50
				        						},
				        						final: {
				        							w: 20,
				        							h: 50
				        						}
				        					}
	        							},
	        							{
	        								initP: 30,
	        								finalP: 35,
	        								color: {
	        									init: {
				        							_RED
				        						},
				        						final: {
				        							_HILITE
				        						}
				        					}
	        							},
	        							{
	        								initP: 60,
	        								finalP: 70,
	        								color: {
	        									init: {
				        							_HILITE
				        						},
				        						final: {
				        							_YELLOW
				        						}
				        					}
	        							},
	        							{
	        								initP: 95,
	        								finalP: 97,
	        								opacity: {
	        									init: 1,
				        						final: 0
				        					}
	        							}		
	        						]
        						}
        					},
        				]
        			}),
					initCanvas({
        				canvasSelector: "#canvasB",
        				scrollInit: 33,
        				scrollFinal: 55,
        				assets: [
        					{
        						id: "b-mgr",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _RED
        							},
	        						size: {
		        						w: 1,
	    	    						h: 5,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: -10,
	        							y: 0,
	        							z: 60
	        						},
	        						anims: [
	        							{
	        								initP: 0.1,
	        								finalP: 20,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 10,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 2,
	        										z: 60
	        										
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 40,
	        								color: {
	        									init: {
				        							_RED
				        						},
				        						final: {
				        							_WHITE
				        						}
				        					}
	        							},
	        							{
	        								initP: 40,
	        								finalP: 45,
	        								color: {
	        									init: {
				        							_WHITE
				        						},
				        						final: {
				        							_RED
				        						}
				        					}
	        							},
	        							{
	        								initP: 50,
	        								finalP: 55,
	        								color: {
	        									init: {
				        							_RED
				        						},
				        						final: {
				        							_LILAC
				        						}
				        					}
	        							},
	        							{
	        								initP: 65,
	        								finalP: 70,
				        					color: {
	        									init: {
	        										_LILAC
	        									},
	        									final: {
	        										_ROSE
	        									}
	        								}
	        							},
	        							{
	        								initP: 80,
	        								finalP: 85,
				        					color: {
	        									init: {
	        										_ROSE
	        									},
	        									final: {
	        										_HILITE
	        									}
	        								}
	        							},
	        							{
	        								initP: 95,
	        								finalP: 100,
				        					color: {
	        									init: {
	        										_HILITE
	        									},
	        									final: {
	        										_RED
	        									}
	        								}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "b-int",
        						assetType: "plane",
        						hide: true,
        						options: {
        							texture: false,
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 20,
	    	    						h: 50
	        						},
	        						rotation: {
	        							x: Math.PI  /2,
	        							y: 0,
	        							z: Math.PI
	        						},
	        						position: {
	        							x: 0,
	        							y: 0,
	        							z: 40
	        						},
	        						anims: [
	        							{
	        								initP: 0,
	        								finalP: 10,
	        								position: {
	        									init: {
				        							x: 0,
	        										y: -10,
	        										z: 40
				        						},
				        						final: {
				        							x: 0,
	        										y: 0,
	        										z: 40
				        						}
				        					}
	        							},
	        							{
	        								initP: 20,
	        								finalP: 30,
	        								color: {
	        									init: {
				        							_HILITE
				        						},
				        						final: {
				        							_RED
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 40,
	        								color: {
	        									init: {
				        							_RED
				        						},
				        						final: {
				        							_WHITE
				        						}
				        					}
	        							},
	        							{
	        								initP: 40,
	        								finalP: 45,
	        								color: {
	        									init: {
				        							_WHITE
				        						},
				        						final: {
				        							_RED
				        						}
				        					}
	        							},
	        							{
	        								initP: 50,
	        								finalP: 55,
	        								color: {
	        									init: {
				        							_RED
				        						},
				        						final: {
				        							_LILAC
				        						}
				        					}
	        							},
	        							{
	        								initP: 65,
	        								finalP: 70,
				        					color: {
	        									init: {
	        										_LILAC
	        									},
	        									final: {
	        										_ROSE
	        									}
	        								}
	        							},
	        							{
	        								initP: 80,
	        								finalP: 85,
				        					color: {
	        									init: {
	        										_ROSE
	        									},
	        									final: {
	        										_HILITE
	        									}
	        								}
	        							},
	        							{
	        								initP: 95,
	        								finalP: 100,
				        					color: {
	        									init: {
	        										_HILITE
	        									},
	        									final: {
	        										_RED
	        									}
	        								}
	        							}

	        						]
        						}
        					},
        					{
        						id: "b-hilitecar",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 10,
	        								finalP: 20,
	        								position: {
	        									init: {
				        							x: -2,
				        							y: 0,
				        							z: 100
				        						},
				        						final: {
				        							x: -2,
				        							y: 0,
				        							z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 23,
	        								finalP: 25,
	        								color: {
	        									init: {
	        										_HILITE
	        									},
	        									final: {
	        										_GREY
	        									}
	        								}
	        							},
	        							{
	        								initP: 75,
	        								finalP: 82,
	        								color: {
	        									init: {
	        										_GREY
	        									},
	        									final: {
	        										_HILITE
	        									}
	        								}
	        							},
	        							{
	        								initP: 82,
	        								finalP: 90,
	        								position: {
	        									path: {
				        							aX: 8,
				        							aZ: 45,
				        							xRad: 10,
				        							zRad: 10,
				        							aStart: Math.PI,
				        							aEnd: 3 / 2 * Math.PI,
				        							aAntiClock: false //reversed from spec due to xy-xz translation
				        						}
				        					},
				        					rotation: {
	        									init: {
				        							x: 0,
				        							y: _PT_W,
				        							z: 0
				        						},
				        						final: {
				        							x: 0,
				        							y: _PT_N,
				        							z: 0
				        						}
				        					}
	        							},
	        							{
	        								initP: 90,
	        								finalP: 100,
	        								position: {
	        									init: {
				        							x: 8,
				        							y: 0,
				        							z: 45
				        						},
				        						final: {
				        							x: 30,
				        							y: 0,
				        							z: 45
				        						}
				        					}
	        							},	
	        						]
        						}
        					},
        					{
        						id: "b-hilitecube",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: -4,
	        							y: 1,
	        							z: 55
	        						},
	        						anims: [
	        							{
	        								initP: 23,
	        								finalP: 25,
	        								position: {
	        									init: {
				        							x: -4,
	        										y: 1,
	        										z: 55
				        						},
				        						final: {
				        							x: -4,
	        										y: 3,
	        										z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 25,
	        								finalP: 35,
	        								position: {
	        									init: {
				        							x: -4,
	        										y: 3,
	        										z: 55
				        						},
				        						final: {
				        							x: -10,
	        										y: 6,
	        										z: 60
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 40,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 6,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 2,
	        										z: 60.5
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 1,
				        							h: 1,
				        							d: 1
				        						},
				        						final: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						}	
				        					},
				        					rotation: {
				        						init: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						}	
				        					}
	        							},
	        							{
	        								initP: 40,
	        								finalP: 45,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 2,
	        										z: 60.5
				        						},
				        						final: {
				        							x: -9,
	        										y: 2,
	        										z: 60
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						},
				        						final: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						}	
				        					}
	        							},
	        							{
	        								initP: 85,
	        								finalP: 90,
				        					size: {
				        						init: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						},
				        						final: {
				        							w: 0,
				        							d: 0,
				        							h: 0
				        						}	
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "b-rosecar",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _ROSE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_N,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 10,
	        								finalP: 20,
	        								position: {
	        									init: {
				        							x: -35,
				        							y: 0,
				        							z: 25
				        						},
				        						final: {
				        							x: -20,
				        							y: 0,
				        							z: 25
				        						}
				        					}
	        							},
	        							{
	        								initP: 23,
	        								finalP: 25,
	        								color: {
	        									init: {
	        										_ROSE
	        									},
	        									final: {
	        										_GREY
	        									}
	        								}
	        							},
	        							{
	        								initP: 65,
	        								finalP: 70,
				        					color: {
	        									init: {
	        										_GREY
	        									},
	        									final: {
	        										_ROSE
	        									}
	        								}
	        							},
	        							{
	        								initP: 70,
	        								finalP: 85,
				        					position: {
	        									init: {
				        							x: -20,
				        							y: 0,
				        							z: 25
				        						},
				        						final: {
				        							x: 40,
				        							y: 0,
				        							z: 25
				        						}
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "b-rosecube",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _ROSE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: -20,
	        							y: 1,
	        							z: 25
	        						},
	        						anims: [
	        							{
	        								initP: 23,
	        								finalP: 25,
	        								position: {
	        									init: {
				        							x: -20,
	        										y: 1,
	        										z: 25
				        						},
				        						final: {
				        							x: -20,
	        										y: 3,
	        										z: 25
				        						}
				        					}
	        							},
	        							{
	        								initP: 25,
	        								finalP: 35,
	        								position: {
	        									init: {
				        							x: -20,
	        										y: 3,
	        										z: 25
				        						},
				        						final: {
				        							x: -10,
	        										y: 8,
	        										z: 60
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 40,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 8,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 3,
	        										z: 60.5
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 1,
				        							h: 1,
				        							d: 1
				        						},
				        						final: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						}	
				        					},
				        					rotation: {
				        						init: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						}	
				        					}
	        							},
	        							{
	        								initP: 40,
	        								finalP: 45,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 3,
	        										z: 60.5
				        						},
				        						final: {
				        							x: -9,
	        										y: 3,
	        										z: 60
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						},
				        						final: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						}	
				        					}
	        							},
	        							{
	        								initP: 70,
	        								finalP: 85,
				        					size: {
				        						init: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						},
				        						final: {
				        							w: 0,
				        							d: 0,
				        							h: 0
				        						}	
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "b-lilaccar",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _LILAC
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 12,
	        								finalP: 19,
	        								position: {
	        									init: {
				        							x: 3,
				        							y: 0,
				        							z: 100
				        						},
				        						final: {
				        							x: 3,
				        							y: 0,
				        							z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 23,
	        								finalP: 25,
	        								color: {
	        									init: {
	        										_LILAC
	        									},
	        									final: {
	        										_GREY
	        									}
	        								}
	        							},
	        							{
	        								initP: 50,
	        								finalP: 55,
	        								color: {
	        									init: {
	        										_GREY
	        									},
	        									final: {
	        										_LILAC
	        									}
	        								}
	        							},
	        							{
	        								initP: 55,
	        								finalP: 70,
	        								position: {
	        									init: {
				        							x: 3,
				        							y: 0,
				        							z: 55
				        						},
				        						final: {
				        							x: 3,
				        							y: 0,
				        							z: -30
				        						}
				        					}
	        							},	
	        						]
        						}
        					},
        					{
        						id: "b-lilaccube",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _LILAC
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: 1,
				        				y: 1,
				        				z: 55
	        						},
	        						anims: [
	        							{
	        								initP: 23,
	        								finalP: 25,
	        								position: {
	        									init: {
				        							x: 1,
	        										y: 1,
	        										z: 55
				        						},
				        						final: {
				        							x: 1,
	        										y: 3,
	        										z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 25,
	        								finalP: 35,
	        								position: {
	        									init: {
				        							x: 1,
	        										y: 3,
	        										z: 55
				        						},
				        						final: {
				        							x: -10,
	        										y: 10,
	        										z: 60
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 40,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 10,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 4,
	        										z: 60.5
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 1,
				        							h: 1,
				        							d: 1
				        						},
				        						final: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						}	
				        					},
				        					rotation: {
				        						init: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						}	
				        					}
	        							},
	        							{
	        								initP: 40,
	        								finalP: 45,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 4,
	        										z: 60.5
				        						},
				        						final: {
				        							x: -9,
	        										y: 4,
	        										z: 60
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						},
				        						final: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						}	
				        					}
	        							},
	        							{
	        								initP: 55,
	        								finalP: 70,
				        					size: {
				        						init: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						},
				        						final: {
				        							w: 0,
				        							d: 0,
				        							h: 0
				        						}	
				        					}
	        							}	
	        						]
        						}
        					}
        				]
        			}),
        			initCanvas({
        				canvasSelector: "#canvasC",
        				scrollInit: 60,
        				scrollFinal: 80,
        				assets: [
        					{
        						id: "c-mgr",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _RED
        							},
	        						size: {
		        						w: 1,
	    	    						h: 5,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: -10,
	        							y: 0,
	        							z: 60
	        						},
	        						anims: [
	        							{
	        								initP: 0.1,
	        								finalP: 20,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 10,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 2,
	        										z: 60
	        										
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 40,
	        								color: {
	        									init: {
				        							_RED
				        						},
				        						final: {
				        							_WHITE
				        						}
				        					}
	        							},
	        							{
	        								initP: 40,
	        								finalP: 45,
	        								color: {
	        									init: {
				        							_WHITE
				        						},
				        						final: {
				        							_RED
				        						}
				        					}
	        							},
	        							{
	        								initP: 55,
	        								finalP: 60,
	        								color: {
	        									init: {
				        							_RED
				        						},
				        						final: {
				        							_HILITE
				        						}
				        					}
	        							},
	        							{
	        								initP: 70,
	        								finalP: 75,
				        					color: {
	        									init: {
	        										_HILITE
	        									},
	        									final: {
	        										_LILAC
	        									}
	        								}
	        							},
	        							{
	        								initP: 85,
	        								finalP: 90,
				        					color: {
	        									init: {
	        										_LILAC
	        									},
	        									final: {
	        										_ROSE
	        									}
	        								}
	        							},
	        							{
	        								initP: 95,
	        								finalP: 100,
				        					color: {
	        									init: {
	        										_ROSE
	        									},
	        									final: {
	        										_RED
	        									}
	        								}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "c-int",
        						assetType: "plane",
        						hide: true,
        						options: {
        							texture: false,
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 20,
	    	    						h: 50
	        						},
	        						rotation: {
	        							x: Math.PI  /2,
	        							y: 0,
	        							z: Math.PI
	        						},
	        						position: {
	        							x: 0,
	        							y: 0,
	        							z: 40
	        						},
	        						anims: [
	        							{
	        								initP: 0,
	        								finalP: 10,
	        								position: {
	        									init: {
				        							x: 0,
	        										y: -10,
	        										z: 40
				        						},
				        						final: {
				        							x: 0,
	        										y: 0,
	        										z: 40
				        						}
				        					}
	        							},
	        							{
	        								initP: 20,
	        								finalP: 30,
	        								color: {
	        									init: {
				        							_HILITE
				        						},
				        						final: {
				        							_RED
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 40,
	        								color: {
	        									init: {
				        							_RED
				        						},
				        						final: {
				        							_WHITE
				        						}
				        					}
	        							},
	        							{
	        								initP: 40,
	        								finalP: 45,
	        								color: {
	        									init: {
				        							_WHITE
				        						},
				        						final: {
				        							_RED
				        						}
				        					}
	        							},
	        							{
	        								initP: 55,
	        								finalP: 60,
	        								color: {
	        									init: {
				        							_RED
				        						},
				        						final: {
				        							_HILITE
				        						}
				        					}
	        							},
	        							{
	        								initP: 70,
	        								finalP: 75,
				        					color: {
	        									init: {
	        										_HILITE
	        									},
	        									final: {
	        										_LILAC
	        									}
	        								}
	        							},
	        							{
	        								initP: 85,
	        								finalP: 90,
				        					color: {
	        									init: {
	        										_LILAC
	        									},
	        									final: {
	        										_ROSE
	        									}
	        								}
	        							},
	        							{
	        								initP: 95,
	        								finalP: 100,
				        					color: {
	        									init: {
	        										_ROSE
	        									},
	        									final: {
	        										_RED
	        									}
	        								}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "c-hilite-car1",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 10,
	        								finalP: 20,
	        								position: {
	        									init: {
				        							x: -2,
				        							y: 0,
				        							z: 100
				        						},
				        						final: {
				        							x: -2,
				        							y: 0,
				        							z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 23,
	        								finalP: 25,
	        								color: {
	        									init: {
	        										_HILITE
	        									},
	        									final: {
	        										_GREY
	        									}
	        								}
	        							},
	        							{
	        								initP: 55,
	        								finalP: 60,
	        								color: {
	        									init: {
	        										_GREY
	        									},
	        									final: {
	        										_HILITE
	        									}
	        								}
	        							},
	        							{
	        								initP: 60,
	        								finalP: 70,
	        								position: {
	        									path: {
				        							aX: 8,
				        							aZ: 45,
				        							xRad: 10,
				        							zRad: 10,
				        							aStart: Math.PI,
				        							aEnd: 3 / 2 * Math.PI,
				        							aAntiClock: false //reversed from spec due to xy-xz translation
				        						}
				        					},
				        					rotation: {
	        									init: {
				        							x: 0,
				        							y: _PT_W,
				        							z: 0
				        						},
				        						final: {
				        							x: 0,
				        							y: _PT_N,
				        							z: 0
				        						}
				        					}
	        							},
	        							{
	        								initP: 70,
	        								finalP: 80,
	        								position: {
	        									init: {
				        							x: 8,
				        							y: 0,
				        							z: 45
				        						},
				        						final: {
				        							x: 30,
				        							y: 0,
				        							z: 45
				        						}
				        					}
	        							},	
	        						]
        						}
        					},
        					{
        						id: "c-hilitecube1",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: -4,
	        							y: 1,
	        							z: 55
	        						},
	        						anims: [
	        							{
	        								initP: 23,
	        								finalP: 30,
	        								position: {
	        									init: {
				        							x: -4,
	        										y: 1,
	        										z: 55
				        						},
				        						final: {
				        							x: -4,
	        										y: 3,
	        										z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 25,
	        								finalP: 35,
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 45,
	        								position: {
	        									init: {
				        							x: -4,
	        										y: 3,
	        										z: 55
				        						},
				        						final: {
				        							x: -10,
	        										y: 6,
	        										z: 60
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 45,
	        								finalP: 50,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 6,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 2,
	        										z: 60.5
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 1,
				        							h: 1,
				        							d: 1
				        						},
				        						final: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						}	
				        					},
				        					rotation: {
				        						init: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						}	
				        					}
	        							},
	        							{
	        								initP: 50,
	        								finalP: 55,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 4,
	        										z: 60.5
				        						},
				        						final: {
				        							x: -9,
	        										y: 4,
	        										z: 60
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						},
				        						final: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						}	
				        					}
	        							},
	        							{
	        								initP: 60,
	        								finalP: 65,
				        					size: {
				        						init: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						},
				        						final: {
				        							w: 0,
				        							d: 0,
				        							h: 0
				        						}	
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "c-hilitecube2",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: -4,
	        							y: 1,
	        							z: 55
	        						},
	        						anims: [
	        							{
	        								initP: 23,
	        								finalP: 30,
	        								position: {
	        									init: {
				        							x: -4,
	        										y: 1,
	        										z: 55
				        						},
				        						final: {
				        							x: -4,
	        										y: 5,
	        										z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 25,
	        								finalP: 35,
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 45,
	        								position: {
	        									init: {
				        							x: -4,
	        										y: 5,
	        										z: 55
				        						},
				        						final: {
				        							x: -10,
	        										y: 8,
	        										z: 60
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 45,
	        								finalP: 50,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 8,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 4,
	        										z: 60.5
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 1,
				        							h: 1,
				        							d: 1
				        						},
				        						final: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						}	
				        					},
				        					rotation: {
				        						init: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						}	
				        					}
	        							},
	        							{
	        								initP: 50,
	        								finalP: 55,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 4,
	        										z: 60.5
				        						},
				        						final: {
				        							x: -8,
	        										y: 4,
	        										z: 60
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						},
				        						final: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						}	
				        					}
	        							},
	        							{
	        								initP: 60,
	        								finalP: 65,
				        					size: {
				        						init: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						},
				        						final: {
				        							w: 0,
				        							d: 0,
				        							h: 0
				        						}	
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "c-hilitecube3",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: -4,
	        							y: 1,
	        							z: 55
	        						},
	        						anims: [
	        							{
	        								initP: 23,
	        								finalP: 30,
	        								position: {
	        									init: {
				        							x: -4,
	        										y: 1,
	        										z: 55
				        						},
				        						final: {
				        							x: -4,
	        										y: 7,
	        										z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 25,
	        								finalP: 35,
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 45,
	        								position: {
	        									init: {
				        							x: -4,
	        										y: 7,
	        										z: 55
				        						},
				        						final: {
				        							x: -10,
	        										y: 10,
	        										z: 60
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 45,
	        								finalP: 50,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 10,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 4,
	        										z: 60.5
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 1,
				        							h: 1,
				        							d: 1
				        						},
				        						final: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						}	
				        					},
				        					rotation: {
				        						init: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						}	
				        					}
	        							},
	        							{
	        								initP: 50,
	        								finalP: 55,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 4,
	        										z: 60.5
				        						},
				        						final: {
				        							x: -7,
	        										y: 4,
	        										z: 60
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						},
				        						final: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						}	
				        					}
	        							},
	        							{
	        								initP: 60,
	        								finalP: 65,
				        					size: {
				        						init: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						},
				        						final: {
				        							w: 0,
				        							d: 0,
				        							h: 0
				        						}	
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "c-rosecar",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _ROSE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_N,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 10,
	        								finalP: 20,
	        								position: {
	        									init: {
				        							x: -35,
				        							y: 0,
				        							z: 25
				        						},
				        						final: {
				        							x: -20,
				        							y: 0,
				        							z: 25
				        						}
				        					}
	        							},
	        							{
	        								initP: 23,
	        								finalP: 25,
	        								color: {
	        									init: {
	        										_ROSE
	        									},
	        									final: {
	        										_GREY
	        									}
	        								}
	        							},
	        							{
	        								initP: 85,
	        								finalP: 90,
				        					color: {
	        									init: {
	        										_GREY
	        									},
	        									final: {
	        										_ROSE
	        									}
	        								}
	        							},
	        							{
	        								initP: 90,
	        								finalP: 100,
				        					position: {
	        									init: {
				        							x: -20,
				        							y: 0,
				        							z: 25
				        						},
				        						final: {
				        							x: 40,
				        							y: 0,
				        							z: 25
				        						}
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "c-rosecube",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _ROSE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: -20,
	        							y: 1,
	        							z: 25
	        						},
	        						anims: [
	        							{
	        								initP: 23,
	        								finalP: 30,
	        								position: {
	        									init: {
				        							x: -20,
	        										y: 1,
	        										z: 25
				        						},
				        						final: {
				        							x: -20,
	        										y: 3,
	        										z: 25
				        						}
				        					}
	        							},
	        							{
	        								initP: 25,
	        								finalP: 35,
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 45,
	        								position: {
	        									init: {
				        							x: -20,
	        										y: 3,
	        										z: 25
				        						},
				        						final: {
				        							x: -10,
	        										y: 16,
	        										z: 60
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 45,
	        								finalP: 50,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 16,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 2,
	        										z: 60.5
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 1,
				        							h: 1,
				        							d: 1
				        						},
				        						final: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						}	
				        					},
				        					rotation: {
				        						init: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						}	
				        					}
	        							},
	        							{
	        								initP: 50,
	        								finalP: 55,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 2,
	        										z: 60.5
				        						},
				        						final: {
				        							x: -9,
	        										y: 2,
	        										z: 60
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						},
				        						final: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						}	
				        					}
	        							},
	        							{
	        								initP: 90,
	        								finalP: 95,
				        					size: {
				        						init: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						},
				        						final: {
				        							w: 0,
				        							d: 0,
				        							h: 0
				        						}	
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "c-lilaccar",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _LILAC
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 12,
	        								finalP: 19,
	        								position: {
	        									init: {
				        							x: 3,
				        							y: 0,
				        							z: 100
				        						},
				        						final: {
				        							x: 3,
				        							y: 0,
				        							z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 23,
	        								finalP: 25,
	        								color: {
	        									init: {
	        										_LILAC
	        									},
	        									final: {
	        										_GREY
	        									}
	        								}
	        							},
	        							{
	        								initP: 70,
	        								finalP: 75,
	        								color: {
	        									init: {
	        										_GREY
	        									},
	        									final: {
	        										_LILAC
	        									}
	        								}
	        							},
	        							{
	        								initP: 75,
	        								finalP: 85,
	        								position: {
	        									init: {
				        							x: 3,
				        							y: 0,
				        							z: 55
				        						},
				        						final: {
				        							x: 3,
				        							y: 0,
				        							z: -30
				        						}
				        					}
	        							},	
	        						]
        						}
        					},
        					{
        						id: "c-lilaccube1",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _LILAC
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: 1,
				        				y: 1,
				        				z: 55
	        						},
	        						anims: [
	        							{
	        								initP: 23,
	        								finalP: 30,
	        								position: {
	        									init: {
				        							x: 1,
	        										y: 1,
	        										z: 55
				        						},
				        						final: {
				        							x: 1,
	        										y: 3,
	        										z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 25,
	        								finalP: 35,
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 45,
	        								position: {
	        									init: {
				        							x: 1,
	        										y: 3,
	        										z: 55
				        						},
				        						final: {
				        							x: -10,
	        										y: 12,
	        										z: 60
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 45,
	        								finalP: 50,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 12,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 3,
	        										z: 60.5
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 1,
				        							h: 1,
				        							d: 1
				        						},
				        						final: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						}	
				        					},
				        					rotation: {
				        						init: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						}	
				        					}
	        							},
	        							{
	        								initP: 50,
	        								finalP: 55,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 3,
	        										z: 60.5
				        						},
				        						final: {
				        							x: -9,
	        										y: 3,
	        										z: 60
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						},
				        						final: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						}	
				        					}
	        							},
	        							{
	        								initP: 75,
	        								finalP: 80,
				        					size: {
				        						init: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						},
				        						final: {
				        							w: 0,
				        							d: 0,
				        							h: 0
				        						}	
				        					}
	        							}	
	        						]
        						},
        					},
        					{
        						id: "c-lilaccube2",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _LILAC
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						position: {
	        							x: 1,
				        				y: 1,
				        				z: 55
	        						},
	        						anims: [
	        							{
	        								initP: 23,
	        								finalP: 30,
	        								position: {
	        									init: {
				        							x: 1,
	        										y: 1,
	        										z: 55
				        						},
				        						final: {
				        							x: 1,
	        										y: 5,
	        										z: 55
				        						}
				        					}
	        							},
	        							{
	        								initP: 25,
	        								finalP: 35,
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 35,
	        								finalP: 45,
	        								position: {
	        									init: {
				        							x: 1,
	        										y: 5,
	        										z: 55
				        						},
				        						final: {
				        							x: -10,
	        										y: 14,
	        										z: 60
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						},
				        						final: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						}
				        					}
	        							},
	        							{
	        								initP: 45,
	        								finalP: 50,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 14,
	        										z: 60
				        						},
				        						final: {
				        							x: -10,
	        										y: 3,
	        										z: 60.5
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 1,
				        							h: 1,
				        							d: 1
				        						},
				        						final: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						}	
				        					},
				        					rotation: {
				        						init: {
				        							x: 2 * Math.PI,
				        							y: 2 * Math.PI,
				        							z: 2 * Math.PI
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						}	
				        					}
	        							},
	        							{
	        								initP: 50,
	        								finalP: 55,
	        								position: {
	        									init: {
				        							x: -10,
	        										y: 3,
	        										z: 60.5
				        						},
				        						final: {
				        							x: -8,
	        										y: 3,
	        										z: 60
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 0.5,
				        							d: 0.5,
				        							h: 0.5
				        						},
				        						final: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						}	
				        					}
	        							},
	        							{
	        								initP: 75,
	        								finalP: 80,
				        					size: {
				        						init: {
				        							w: 1,
				        							d: 1,
				        							h: 1
				        						},
				        						final: {
				        							w: 0,
				        							d: 0,
				        							h: 0
				        						}	
				        					}
	        							}
	        						]
	        					}
        					}
        				]
        			}),
        			initCanvas({
        				canvasSelector: "#canvasD",
        				scrollInit: 82,
        				scrollFinal: 100,
        				assets: [
        					{
        						id: "d-hilitecar1",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 0,
	        								finalP: 30,
	        								position: {
	        									init: {
				        							x: -2,
				        							y: 0,
				        							z: 100
				        						},
				        						final: {
				        							x: -2,
				        							y: 0,
				        							z: 45
				        						}
				        					}
	        							}
	        						]
        						}
        					},
        					{
        						id: "c-hilite-checkfoot",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						position: {
	        							x: -4,
				        				y: 4.5,
				        				z: 100
	        						},
	        						anims: [
	        							{
	        								initP: 0,
	        								finalP: 30,
	        								position: {
	        									init: {
				        							x: -4,
				        							y: 4.5,
				        							z: 100
				        						},
				        						final: {
				        							x: -4,
				        							y: 4.5,
				        							z: 45
				        						}
				        					}
	        							},
	        							{
	        								initP: 30,
	        								finalP: 34,
	        								color: {
	        									init: {
				        							_HILITE
				        						},
				        						final: {
				        							_RED
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
	        										y: 0,
	        										z: 0
				        						},
				        						final: {
				        							x: 0,
				        							y: Math.PI,
				        							z: Math.PI
				        						}
				        					},
				        					position: {
				        						init: {
				        							x: -4,
				        							y: 4.5,
				        							z: 45
				        						},
				        						final: {
				        							x: -4,
				        							y: 4.7,
				        							z: 45
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 1,
			    	    							h: 1,
			        								d: 1
			        							},
			        							final: {
				        							w: 2.2,
			    	    							h: 2.2,
			        								d: 2.2
			        							}
			        						}
	        							},
	        							{
	        								initP: 34,
	        								finalP: 38,
	        								color: {
	        									init: {
				        							_RED
				        						},
				        						final: {
				        							_LILAC
				        						}
				        					},
				        					rotation: {
				        						init: {
				        							x: 0,
				        							y: Math.PI,
				        							z: Math.PI
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 0
				        						}
				        					},
				        					position: {
				        						init: {
				        							x: -5,
				        							y: 4.7,
				        							z: 45
				        						},
				        						final: {
				        							x: -4.25,
				        							y: 4.5,
				        							z: 45
				        						}
				        					},
				        					size: {
				        						init: {
				        							w: 2.2,
			    	    							h: 2.2,
			        								d: 2.2
			        							},
			        							final: {
				        							w: 2,
			    	    							h: 2,
			        								d: 2
			        							}
			        						}
	        							}
	        								
	        						]
        						}
        					},
        					/*{
        						id: "c-hilite-checkneck",
        						assetType: "cube",
        						hide: true,
        						options: {
        							color: {
        								init: _HILITE
        							},
        							size: {
		        						w: 3,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: 0,
	        							z: -1 * Math.PI / 4
	        						},
        							position: {
        								x: -4,
				        				y: 5,
				        				z: 100
        							},
	        						text: "What?",
	        						anims: [
	        							{
	        								initP: 0,
	        								finalP: 30,
	        								position: {
	        									init: {
				        							x: -5,
				        							y: 5,
				        							z: 100
				        						},
				        						final: {
				        							x: -5,
				        							y: 5,
				        							z: 45
				        						}
				        					}
	        							},
	        							{
	        								initP: 30,
	        								finalP: 35,
	        								rotation: {
	        									init: {
				        							x: 0,
	        										y: 0,
	        										z: -1 * Math.PI / 4
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: -1 * Math.PI / 2
				        						}
				        					},
				        					position: {
				        						init: {
				        							x: -5,
				        							y: 5,
				        							z: 45
				        						},
				        						final: {
				        							x: -4,
				        							y: 6,
				        							z: 45
				        						}
				        					}
	        							}
	        								
	        						]
        						}
        					},*/
        					{
        						id: "d-rosecar",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _ROSE
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						position: {
	        							x: 3,
				        				y: 0,
				        				z: 100
	        						},
	        						anims: [
	        							{
	        								initP: 10,
	        								finalP: 27,
	        								position: {
	        									init: {
				        							x: 3,
				        							y: 0,
				        							z: 100
				        						},
				        						final: {
				        							x: 3,
				        							y: 0,
				        							z: 40
				        						}
				        					}
	        							}	
	        						]
        						}
        					},
        					{
        						id: "d-lilaccar",
        						assetType: "car",
        						hide: true,
        						options: {
        							color: {
        								init: _LILAC
        							},
	        						size: {
		        						w: 1,
	    	    						h: 1,
	        							d: 1
	        						},
	        						rotation: {
	        							x: 0,
	        							y: _PT_N,
	        							z: 0
	        						},
	        						anims: [
	        							{
	        								initP: 0,
	        								finalP: 40,
	        								position: {
	        									init: {
				        							x: -30,
				        							y: 0,
				        							z: 35
				        						},
				        						final: {
				        							x: -15,
				        							y: 0,
				        							z: 35
				        						}
				        					}
	        							},
	        							{
	        								initP: 76,
	        								finalP: 94,
	        								position: {
	        									path: {
				        							aX: -3,
				        							aZ: 25,
				        							xRad: 10,
				        							zRad: 10,
				        							aStart: Math.PI / 2,
				        							aEnd: 2 * Math.PI,
				        							aAntiClock: true //reversed from spec due to xy-xz translation
				        						}
				        					},
				        					rotation: {
	        									init: {
				        							x: 0,
				        							y: _PT_N,
				        							z: 0
				        						},
				        						final: {
				        							x: 0,
				        							y: _PT_W,
				        							z: 0
				        						}
				        					}
	        							},
	        							{
	        								initP: 94,
	        								finalP: 100,
	        								position: {
	        									init: {
				        							x: 7,
				        							y: 0,
				        							z: 25
				        						},
				        						final: {
				        							x: 7,
				        							y: 0,
				        							z: -20
				        						}
				        					}
	        							},	
	        						]
        						}
        					}
        				]
        			}),
        		];
        		
        		//first call that begins the indefinite render loop
        		canvases.forEach((renderer) => {
        			requestAnimationFrame(render);
        		})
  		
        		function initCanvas(options) {
        			//renderer
        			const canvas = document.querySelector(options.canvasSelector);
        			const renderer = new THREE.WebGLRenderer({canvas, alpha: true});
        			//renderer.shadowMapEnabled = true;
        			//renderer.shadowMapType = THREE.PCFSoftShadowMap;

        			//camera - set per page, based on bg
        			const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	        		camera.position.x = 0;
					camera.position.y = 3.2;
	        		camera.position.z = -16;

	        		//camera rotation - set per page, based on bg
	        		camera.rotation.x = -3.21; //up/down
					camera.rotation.y = 0.033; //left/right
					camera.rotation.z = -3.14;
					//fixed for MBP 13" Retina

	        		cameras.push(camera);

	        		//scene
	        		const scene = new THREE.Scene();
					const helper = new THREE.CameraHelper(camera);
	        		scene.add(helper); //adds reticle and bounding box

	        		//lights
	        		const color = 0xFFF3E0;
	        		const groundColor = 0x999999;
				    const intensity = 1;
				    const light = new THREE.HemisphereLight(color, groundColor, intensity);
				    
				    light.position.set(2, 3, 10);
				    scene.add(light);
				   	lights.push(light);

				   	//constructors for each asset type
				    options.assets.forEach((element, index) => {
				    	
				    	element.scrollInit = options.scrollInit;
				    	element.scrollFinal = options.scrollFinal;

				    	if (element.assetType == "car") {
				    		makeCarInstance(element, scene);
				    	} else if (element.assetType == "line") {
				    		makeLineInstance(element, scene);
				    	} else if (element.assetType == "plane") {
				    		makePlaneInstance(element, scene);
				    	} else if (element.assetType == "text") {
				    		makeTextInstance(element, scene);
				    	} else {
					    	makeCubeInstance(element, scene);
					    }
				    });

				    //debug line grid to show perspective decay
				    var debug = false;
				    if (debug) {
					    for (var y = 0; y < 5; y++) {
						    for (var x = -5; x < 5; x++) {
						    	if (x == 0) {
						    		var colour = "white";
						    	} else if (x < 0) {
						    		var colour = "blue";
						    	} else {
						    		var colour = "yellow";
						    	}
						    	makeLineInstance(colour, x, y, -5, x, y, 100, scene);
						    }
						    makeLineInstance("green", 20, y, -5, -20, y, -5, scene);
					    }
					}

				    scenes.push(scene);
				    return renderer;
				    
        		}

        		function resizeRendererToDisplaySize(renderer) {
					const canvas = renderer.domElement;
					const rendererWidth = canvas.clientWidth;
					const rendererHeight = canvas.clientHeight;

					var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
					var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
					var viewportAspect = viewportWidth / viewportHeight;

					var imgBaseWidth = document.getElementById('bg').naturalWidth;
					var imgBaseHeight = document.getElementById('bg').naturalHeight;
					var imgAspect = imgBaseWidth / imgBaseHeight;

					const needResize = viewportWidth !== rendererWidth || viewportHeight !== rendererHeight;
					if (needResize) {
						sizeOverlay(imgAspect);
						/*if (viewportWidth < imgBaseWidth && viewportHeight < imgBaseHeight) {
							//image fits within viewport entirely; canvas should render 100/100
							document.getElementById('canvasA').style.width = '100%';
							document.getElementById('canvasA').style.height = '100%';
							document.getElementById("camera_tracker").innerHTML = "img asp " + imgAspect.toFixed(2) + ", view asp " + viewportAspect.toFixed(2) + "<br>canvas width 100%, height 100%";

						} else if (imgAspect < viewportAspect) {
							document.getElementById('canvasA').style.width = viewportWidth;
							document.getElementById('canvasA').style.height = 'auto';
							document.getElementById("camera_tracker").innerHTML = "img asp " + imgAspect.toFixed(2) + ", view asp " + viewportAspect.toFixed(2) + "<br>canvas width " + viewportWidth + ", height auto";
						} else {
							document.getElementById('canvasA').style.width = 'auto';
							document.getElementById('canvasA').style.height = viewportHeight;
							document.getElementById("camera_tracker").innerHTML = "img asp " + imgAspect.toFixed(2) + ", view asp " + viewportAspect.toFixed(2) + "<br>canvas width auto, height " + viewportHeight + "";
						}*/
					  	//renderer.setSize(width, height, false);
					}
					return needResize;
				}

				function sizeOverlay(imgAspect) {

                    //IF THE WINDOW IS WIDER THAN THE STANDARD ASPECT RATIO
					if ($(window).height() < $(window).width()*0.58) {

                        var newHeight = (($(window).width()*0.58-$(window).height())/2)*-1
						console.log("nh: "+newHeight)
                        console.log("ch: "+$(window).width()*0.58)
                        console.log("wh: "+$(window).height())
                        $('.anim_canvas').css({
							'width':$(window).width(),
							'height':$(window).width()*0.58,            
                            'top':newHeight
						})
					} else {
						$('.anim_canvas').css({
							'height':$(window).height(),
							'width':$(window).width()
						})
					}
				}

        		function render(time) {
	        		time *= 0.001; //convert time to seconds
	        		var newScrollAmt = 100 * window.pageYOffset / (document.body.scrollHeight - window.innerHeight);

	        		//test window resizing on one renderer
	        		if (resizeRendererToDisplaySize(canvases[0])) {
	        			canvases.forEach((renderer, index) => {
	        				const canvas = renderer.domElement;
							const width = canvas.clientWidth;
							const height = canvas.clientHeight;
							const img = document.getElementById("bg");

							renderer.setSize(width, height, false);
							
							const camera = cameras[index];
		        			camera.aspect = width / height;
	        				camera.updateProjectionMatrix();
						});    			
		        	}
	        			  
	        		
	        		canvases.forEach((renderer, index) => {
	        			
	        			const camera = cameras[index];
	        			
	        			//for performance, check if scroll amount has changed on page before redrawing
	        			//TODO check which canvases are on screen on only redraw those assets
	        			if (newScrollAmt != scrollAmt) {
	        				//update moving primitives by scroll position
	        				scenes[index].traverse(tickMovables);
	        			}

	        			//render and finish
	        			renderer.render(scenes[index], camera);
	        		});
	        		requestAnimationFrame(render);
		        	

		        	scrollAmt = newScrollAmt;
	        	}

	        	function tickMovables(obj) {
	        		
	        		if (obj.type == "Mesh") { //don't try and redraw cameras or lights which are also objects

	        			if (scrollAmt > obj.scrollInit && scrollAmt < obj.scrollFinal) {        				
	        			//if current scroll distance requires this object on screen
	        			//objects inherit scrollInit and scrollFinal from the entire canvas, and have their own % keyframes for the time canvas is on screen        				
	        					
		        				//for each anim, confirm if its timeline is currently active 
		        				//(i.e. initP:0, finalP:40 = is scroll in first 40% of this module's scroll duration?)
		        				var o = obj.options;
		        				o.anims.forEach((anim, index) => {
		        					
		        					//convert % durations in object to scrollY amounts
		        					var thisObjStartInScroll = obj.scrollInit + (anim.initP / 100 * (obj.scrollFinal - obj.scrollInit));
		        					var thisObjEndInScroll = obj.scrollInit + (anim.finalP / 100 * (obj.scrollFinal - obj.scrollInit));
		        					
		        					if (scrollAmt > (thisObjStartInScroll - 5) && scrollAmt < (thisObjEndInScroll + 5)) {
		        						obj.visible = true;
			        					//express current scroll amount as % of way through this animation
			        					//e.g. if an animation is supposed to happen between scroll 10 and 20, a current scroll of 11 would return 0.1 to thisObjectProgress
			        					//added buffer of +/-5% of scroll height to account for quick scrolling that prevents animations from completing

			        					var thisObjectProgress = Math.min(map(thisObjStartInScroll,thisObjEndInScroll,scrollAmt), 1);

			        					//ANIMATE POSITION
			        					if (anim.position) {
			        						if (anim.position.path) { //path is an arc rather than a straight line
			        							var p = anim.position.path;

			        							var curve = new THREE.EllipseCurve(
												    p.aX, p.aZ,             // aX, aY are centroid of ellipse carved by this arc
												    p.xRad, p.zRad,            // xRadius, yRadius
												   	p.aStart, p.aEnd, // aStartAngle, aEndAngle
												    p.aAntiClock             // aClockwise
												);

												var objLocationOnCurve = curve.getPointAt(thisObjectProgress);

												obj.position.set(
				        							objLocationOnCurve.x,
				        							obj.position.y,
				        							objLocationOnCurve.y
			    	    						);
			    	    						//curve is created in xy-plane but boxes move in xz-plane. Preserve y coordinate and use y movement for z.

			        						} else {

			        							var curPos = new THREE.Vector3();
			        							obj.getWorldPosition(curPos);     							
			        							
			        							var initX = anim.position.init.x;
			        							var initY = anim.position.init.y;
			        							var initZ = anim.position.init.z;

			        							var finalX = anim.position.final.x;
			        							var finalY = anim.position.final.y;
			        							var finalZ = anim.position.final.z;
			        							

				        						obj.position.set(
				        							lerp(initX, finalX, thisObjectProgress),
				        							lerp(initY, finalY, thisObjectProgress),
				        							lerp(initZ, finalZ, thisObjectProgress)
			    	    						);
			    	    					}
			        					}

			        					//ANIMATE COLOUR
			        					if (anim.color) {

			        						//linear interpolate between initial colour and final colour by individual channel

			        						var lerpR = lerp(Object.values(anim.color.init)[0].r, Object.values(anim.color.final)[0].r, thisObjectProgress);
			        						var lerpG = lerp(Object.values(anim.color.init)[0].g, Object.values(anim.color.final)[0].g, thisObjectProgress);
			        						var lerpB = lerp(Object.values(anim.color.init)[0].b, Object.values(anim.color.final)[0].b, thisObjectProgress);

			        						//interpolate based on scroll, then recombine and set hex of object
			        						obj.material.color.setRGB(lerpR, lerpG, lerpB);
			        						
			        					}

			        					//ANIMATE SIZE
			        					if (anim.size) {

		        							var initH = anim.size.init.w;
		        							var initW = anim.size.init.h;
		        							var initD = typeof anim.size.init.d === "undefined" || !anim.size.init.d ? 1 : anim.size.init.d;
		        							var finalH = anim.size.final.h;
		        							var finalW = anim.size.final.w;
		        							var finalD = typeof anim.size.final.d === "undefined" || !anim.size.final.d ? 1 : anim.size.final.d;

			        						obj.scale.set(
			        							lerp(initH, finalH, thisObjectProgress),
			        							lerp(initW, finalW, thisObjectProgress),
			        							lerp(initD, finalD, thisObjectProgress)
			        						);
			        						
			        					}

			        					//ANIMATE ROTATION
			        					if (anim.rotation) {
			        						obj.rotation.set(
			        							lerp(anim.rotation.init.x, anim.rotation.final.x, thisObjectProgress),
			        							lerp(anim.rotation.init.y, anim.rotation.final.y, thisObjectProgress),
			        							lerp(anim.rotation.init.z, anim.rotation.final.z, thisObjectProgress)
			        						);
			        					}

			        					//ANIMATE OPACITY
			        					if (anim.opacity) {
			        						var initO = anim.opacity.init;
			        						var finalO = anim.opacity.final;
			        						obj.material.opacity = lerp(initO, finalO, thisObjectProgress);
			        					}

			        				}
		        				});       				

	        			} else {
	        				obj.visible = false;
	        				obj.material.opacity = 1;
	        			}
	        		}

	        		return scrollAmt;
	        	}

	        	//THREE.JS CONSTRUCTOR FUNCTIONS
	        	function makeAssetInstance(element, options, givenScene, assetType) {
	        		givenScene.add(element);

	        		element.options = options.options;
	        		element.hide = options.hide;
	        		element.name = options.id;
	        		element.assetType = assetType;

	        		element.scrollInit = options.scrollInit = typeof options.scrollInit === "undefined" || !options.scrollInit ? 0 : options.scrollInit;
 					element.scrollFinal = options.scrollFinal = typeof options.scrollFinal === "undefined" || !options.scrollFinal ? 100 : options.scrollFinal;

 					if (options.options.color) {
 						element.material.color.setRGB(options.options.color.init.r, options.options.color.init.g, options.options.color.init.b);
 					}

 					if (options.options.position) {
	 					element.position.set(
 							options.options.position.x,
	 						options.options.position.y,
	 						options.options.position.z
				        );
				    }
				    if (options.options.rotation) {
	 					element.rotation.set(
 							options.options.rotation.x,
	 						options.options.rotation.y,
	 						options.options.rotation.z
				        );
				    }
				    if (options.options.size) {
				    	element.scale.set(
	 						options.options.size.w,
	 						options.options.size.h,
	 						options.options.size.d
			        	);
				    }
	        	}

	        	function makeCubeInstance(options, givenScene) {
	        		
	        		var width, depth, height;
	        		if (typeof options.options.size === "undefined" || !options.options.size) {
	        			width = 1;
	        			height = 1;
	        			depth = 1;
	        		} else {
	        			width = typeof options.options.size.w === "undefined" || !options.options.size.w ? 1 : options.options.size.w;
	        			height = typeof options.options.size.h === "undefined" || !options.options.size.h ? 1 : options.options.size.h;
	        			depth = typeof options.options.size.d === "undefined" || !options.options.size.d ? 1 : options.options.size.d;
	        		}
	        		
        			const geometry = new THREE.BoxGeometry(width, height, depth);
        			const material = new THREE.MeshPhongMaterial();
 					const cube = new THREE.Mesh(geometry, material);

 					makeAssetInstance(cube, options, givenScene, 'cube');
        		}

        		function makeCarInstance(options, givenScene) {
	        		
	        		var width, depth, height;
	        		if (typeof options.options.size === "undefined" || !options.options.size) {
	        			width = 1;
	        			height = 1;
	        			depth = 1;
	        		} else {
	        			width = typeof options.options.size.w === "undefined" || !options.options.size.w ? 1 : options.options.size.w;
	        			height = typeof options.options.size.h === "undefined" || !options.options.size.h ? 1 : options.options.size.h;
	        			depth = typeof options.options.size.d === "undefined" || !options.options.size.d ? 1 : options.options.size.d;
	        		}
	        		
        			//define a set of corners for the car, along with their lighting normals and UV (I think not used?)

        			//left body
        			const vertices = [
        			{ pos: [	4,	0,	0], norm: [1, 0, 0], uv: [0, 1], }, //0
        			{ pos: [	4,	0,	7], norm: [1, 0, 0], uv: [0, 1], grille: true}, //1
        			{ pos: [	4,	1.5,	6], norm: [1, 0, 0], uv: [1, 1],  grille: true},  //2
        			{ pos: [	4,	1.5,	0], norm: [1, 0, 0], uv: [1, 1],  glass: false},  //3

        			//right body
        			{ pos: [	0,	0,	0], norm: [-1, 0, 0], uv: [1, 1], },  //4
        			{ pos: [	0,	0,	7], norm: [-1, 0, 0], uv: [1, 1],  grille: true},  //5
        			{ pos: [	0,	1.5,	0], norm: [-1, 0, 0], uv: [0, 1],  glass: false},  //6
        			{ pos: [	0,	1.5,	6], norm: [-1, 0, 0], uv: [0, 1],  grille: true},  //7
        			
        			//roof
        			{ pos: [	3.5,	2.5,	2], norm: [0, 1, 0], uv: [0, 1],  glass: true},  //8
        			{ pos: [	0.5,	2.5,	2], norm: [0, 1, 0], uv: [0, 1],  glass: true}, //9
        			{ pos: [	3.5,	2.5,	0.5], norm: [0, 1, 0], uv: [0, 1],  glass: true},  //10
        			{ pos: [	0.5,	2.5,	0.5], norm: [0, 1, 0], uv: [0, 1],  glass: true},  //11

        			//wipers
        			{ pos: [	4,	1.5,	4], norm: [-3, -8, -4], uv: [0, 1], glass: false},  //12
        			{ pos: [	0,	1.5,	4], norm: [-3, -8, -4], uv: [0, 1], glass: false}, //13

        			]; 

        			const positions = [];
        			const normals = [];
        			const uvs = [];
        			const colors = [];

        			for (const vertex of vertices) {
        				positions.push(...vertex.pos);
        				normals.push(...vertex.norm);
        				uvs.push(...vertex.uv);
        				
        				//colour cars from each corner using this code - quite cool for potential impacts etc
        				/*if (vertex.glass) {
        					colors.push(0, 0, 1);
        				} else if (vertex.grille) {
        					colors.push(1,0,0);
        					//colors.push(0.5, 0.5, 0.5);
        				} else {*/
        					//var init_c = hexToRgb(options.options.color.init);
        					//colors.push(init_c.r / 255, init_c.g / 255, init_c.b / 255);
        				//}
        				
        			}	

        			let carGeo = new THREE.BufferGeometry()//.setFromPoints(points);
        			//essentially: how many numbers are for this property before I move on to next vertex?
        			const positionNumComponents = 3;
        			const normalNumComponents = 3;
        			const uvNumComponents = 2;

        			carGeo.setAttribute(
        				'position', 
        				new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
        			carGeo.setAttribute(
        				'normal', 
        				new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
        			carGeo.setAttribute(
        				'uv', 
        				new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
        			carGeo.setAttribute(
        				'color', 
        				new THREE.BufferAttribute(new Float32Array(colors), positionNumComponents));
        			
        			//remember to use right hand rule for determining which way out triangles should face, otherwise they appear on the inside
        			carGeo.setIndex([
        				3, 1, 0, 	3, 2, 1, //left body
        				4, 5, 6, 	7, 6, 5, //right body
        				1, 2, 5, 	7, 5, 2, //front
        				12, 7, 2, 	7, 12, 13, //hood
        				13, 12, 8, 	8, 9, 13, //windshield
        				10, 9, 8,	9, 10, 11, //roof
        				3, 6, 10, 	11, 10, 6, //rear windshield
        				6, 3, 0, 	0, 4, 6,  //trunk
        				//16, 15, 14, 14, 17, 16, //trunk 2
        				10, 8, 3, 	3, 8, 12, 	//left windows
        				6, 9, 11, 	13, 9, 6 //right windows

        				]);

        			carGeo.computeVertexNormals();

        			const material = new THREE.MeshStandardMaterial(
        				{});
 					const car = new THREE.Mesh(carGeo, material);

 					makeAssetInstance(car, options, givenScene, 'car');
        		}

        		function makeLineInstance(color, x1, y1, z1, x2, y2, z2, givenScene) {
        			
        			const material = new THREE.LineBasicMaterial({color});
	        		
	        		const points = [];
					points.push( new THREE.Vector3( x1, y1, z1));
					points.push( new THREE.Vector3( x2, y2, z2));
					const lgeometry = new THREE.BufferGeometry().setFromPoints( points );

					const line = new THREE.Line( lgeometry, material );
					const options = {};

					makeAssetInstance(line, options, givenScene, 'line');	
        		}

        		function makePlaneInstance(options, givenScene) {

        			//texture
        			var planeTexture;
				    if (options.options.texture) {
					    planeTexture = new THREE.TextureLoader().load( 'planetexture.png' );
					}

        			const geometry = new THREE.PlaneGeometry( 1, 1 );
					const material = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide }); //, map: planeTexture} );
					const plane = new THREE.Mesh( geometry, material );
					plane.assetType = 'plane';
					
					makeAssetInstance(plane, options, givenScene, 'plane');
        		}

        		function makeTextInstance(options, givenScene) {
        			
        			const loader = new THREE.FontLoader();

					loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
						
						const geometry = new THREE.TextGeometry( options.text, {
							font: font,
							size: 80,
							height: 5,
							curveSegments: 12,
							bevelEnabled: true,
							bevelThickness: 10,
							bevelSize: 8,
							bevelOffset: 0,
							bevelSegments: 5
						} );
						const material = new THREE.MeshBasicMaterial({});
						const textMesh = new THREE.Mesh(geometry, material);

						if (options.options.position) {
							textMesh.position.x = options.options.position.x;
							textMesh.position.y = options.options.position.y;
							textMesh.position.z = options.options.position.z;
						}

						if (options.options.rotation) {
							textMesh.rotation.x = options.options.rotation.x;
							textMesh.rotation.y = options.options.rotation.y;
							textMesh.rotation.z = options.options.rotation.z;
						}

						if (options.color) {
							const textColor = options.options.color.init;
	 						textMesh.material.color.setRGB(textColor.r, textColor.g, textColor.b);
						}

						textMesh.name = options.id;
						textMesh.options = options.options;
						givenScene.add(textMesh);

					});
        		}

        		//GENERIC HELPER FUNCTIONS
        		function map(start, end, interval) {
				    //returns float between 0 and 1 of interval's distance between start and end.
				    return (interval - start) / (end - start);
				}

				function lerp(v0, v1, t) {
				    return v0*(1-t)+v1*t
				}

				function hexToRgb(hex) {
				  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
				  return result ? {
				    r: parseInt(result[1], 16),
				    g: parseInt(result[2], 16),
				    b: parseInt(result[3], 16)
				  } : null;
				}

				function componentToHex(c) {
				  var hex = c.toString(16);
				  return hex.length == 1 ? "0" + hex : hex;
				}

				function rgbToHex(r, g, b) {
				  return "0x" + componentToHex(r) + componentToHex(g) + componentToHex(b);
				}

				window.onload = function() {
	        		
	        		//on load tie canvasA,B,C aspect to image aspect
	        		function grabBGAspect() {
	        			var w = document.getElementById("bg").width;
	        			var h = document.getElementById("bg").height;
	        			var aspect = w/h;

	        			
	        		}

	        		document.onkeydown = checkKey;
					function checkKey(e) {

					    e = e || window.event;

					    if (e.keyCode == '55') {
					        // up arrow				        
					       //cameras[0].rotation.x += 0.01;
					       lights[0].target.position.y += 0.01;
					    }
					    else if (e.keyCode == '56') {
					        // down arrow

					       //cameras[0].rotation.x -= 0.01;
					       lights[0].target.position.y -= 0.01;
					    }
					    else if (e.keyCode == '57') {
					       // left arrow
					       //cameras[0].rotation.y -= 0.01;
					       lights[0].target.position.x += 0.01;
					       
					    }
					    else if (e.keyCode == '58') {
					       // right arrow
					       //cameras[0].rotation.y += 0.01;
					       lights[0].target.position.x -= 0.01;

					    }else if (e.keyCode == '49') {
					       // 1 
					       cameras[0].position.x += 0.1;

					    }else if (e.keyCode == '50') {
					       // 2 
					       cameras[0].position.x -= 0.1;

					    }else if (e.keyCode == '51') {
					       // 3 
					       cameras[0].position.y += 0.1;

					    }else if (e.keyCode == '52') {
					       // 4 
					       cameras[0].position.y -= 0.1;

					    }else if (e.keyCode == '53') {
					       // 5 
					       cameras[0].position.z += 0.1;

					    } else if (e.keyCode == '54') {
					       // 6 
					       cameras[0].position.z -= 0.1;

					    }

					    cameras[0].updateProjectionMatrix();
					    console.log("R: " + cameras[0].rotation.x + " " + cameras[0].rotation.y + " " + cameras[0].rotation.z + " ");
					    console.log("P: " + cameras[0].position.x + " " + cameras[0].position.y + " " + cameras[0].position.z + " ");

					}
	        	}
        	}

        	main();