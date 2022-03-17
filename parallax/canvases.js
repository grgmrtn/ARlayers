initCanvas({
        				canvasSelector: "#canvasA",
        				scrollInit: 15,
        				scrollFinal: 34,
        				assets: [
        					{
        						id: "car1",
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
	        							y: Math.PI,
	        							z: Math.PI
	        						},
	        						anims: [
	        							{
	        								initP: 0,
	        								finalP: 100,
	        								position: {
	        									init: {
				        							x: 0,
				        							y: 0,
				        							z: 100
				        						},
				        						final: {
				        							x: 0,
				        							y: 0,
				        							z: 20
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
				        							y: 2* Math.PI,
				        							z: 0
				        						}
				        					},
				        					color: {
				        						init: _LILAC,
				        						final: _ROSE
				        					}
	        							}	
	        						]
        						}
        					}
        				]
        			})