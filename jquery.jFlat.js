(function(e) {
	e.fn.jFlat = function(t) {
		function n(e) {
			return parseInt(o(e).substring(0, 2), 16)
		}
		function i(e) {
			return parseInt(o(e).substring(2, 4), 16)
		}
		function s(e) {
			return parseInt(o(e).substring(4, 6), 16)
		}
		function o(e) {
			return e.charAt(0) == "#" ? e.substring(1, 7) : e
		}
		function u(t, o, u) {
			var f = o.split(";");
			var l = n(f[0]);
			var h = i(f[0]);
			var p = s(f[0]);
			var d = parseInt(f[1]);
			e(t).show();
			u.setAttribute("width", e(t).width());
			u.setAttribute("height", e(t).height());
			element = u;
			c = element.getContext("2d");
			width = element.width;
			height = element.height;
			c.drawImage(t, 0, 0, width, height);
			try {
				imageData = c.getImageData(0, 0, width, height)
			} catch (v) {
			}
			w2 = width;
			for (y = 0; y < height; y++) {
				inpos = y * width * 4;
				outpos = inpos;
				for (x = 0; x < w2; x++) {
					r = imageData.data[inpos++];
					g = imageData.data[inpos++];
					b = imageData.data[inpos++];
					a = imageData.data[inpos++];
					var m = Math.min(r, g);
					m = Math.min(m, b);
					if (m < d / 2)
						m = d;
					else if (m < d) {
						m = d
					} else
						m = 255;
					if (m == 255) {
						imageData.data[outpos++] = r;
						imageData.data[outpos++] = g;
						imageData.data[outpos++] = b
					} else {
						imageData.data[outpos++] = l;
						imageData.data[outpos++] = h;
						imageData.data[outpos++] = p
					}
					imageData.data[outpos++] = a
				}
			}
			c.putImageData(imageData, 0, 0);
			e(t).hide()
		}
		e(this).load(function() {
			var n = this;
			var r = document.createElement("canvas");
			e(r).insertAfter(this);
			var i = e.extend({
				def : "#000000;0"
			}, t);
			if (i.def != null) {
				u(n, i.def, r)
			} else {
				u(n, i.def, r)
			}
			if (i.click != null) {
				e(r).click(function() {
					u(n, i.click, r)
				})
			}
			if (t.dblclick != null) {
				e(r).dblclick(function() {
					u(n, i.dblclick, r)
				})
			}
			if (t.focusout != null) {
				e(r).focusout(function() {
					u(n, i.focusout, r)
				})
			}
			if (t.mousedown != null) {
				e(r).mousedown(function() {
					u(n, i.mousedown, r)
				})
			}
			if (t.mousemove != null) {
				e(r).mousemove(function() {
					u(n, i.mousemove, r)
				})
			}
			if (t.mouseout != null) {
				e(r).mouseout(function() {
					u(n, i.mouseout, r)
				})
			}
			if (t.mouseover != null) {
				e(r).mouseover(function() {
					u(n, i.mouseover, r)
				})
			}
			if (t.mouseover != null) {
				e(r).mouseover(function() {
					u(n, i.mouseover, r)
				})
			}
			if (t.mouseup != null) {
				e(r).mouseup(function() {
					u(n, i.mouseup, r)
				})
			}
		})
	}
})(jQuery)
