// just a test
function whiteToTransparent(img_loc, ctx) {
	// turns any pixel on an img that is (255,255,255) to transparent
	var img = document.createElement('img');

	img.onload = function() {
		ctx.drawImage(img,0,0);
		var pixels = ctx.getImageData(0,0,img.width,img.height);
		
		for (var i = 0; i < pixels.data.length; i+=4) {
			if ((pixels.data[i+0] + pixels.data[i+1] + pixels.data[i+2]) == 765) {
	// 255 + 255 + 255 = 765
			pixels.data[i+3] = 0;
			}
		}
		ctx.putImageData(pixels,0,0);
	};

	img.src = img_loc;
}

window.onload = function() {
	var my_canvas = document.getElementById('sandbox');
	var my_ctx = my_canvas.getContext('2d');
	var img_loc = 'img/ice_cream_cone.jpg';
	whiteToTransparent(img_loc,my_ctx);
}
