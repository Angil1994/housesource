!function( e )
{
	function t( e, t, n, o )
	{
		return Math.abs( e - t ) >= Math.abs( n - o ) ? e - t > 0 ? "Left" : "Right" : n - o > 0 ? "Up" : "Down"
	}

	function n()
	{
		p = null, g.last && (g.el.trigger( "longTap" ), g = {})
	}

	function o()
	{
		p && clearTimeout( p ), p = null
	}

	function i()
	{
		u && clearTimeout( u ), l && clearTimeout( l ), c && clearTimeout( c ), p && clearTimeout( p ), u = l = c = p = null
	}

	function r( e )
	{
		return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
	}

	function a( e, t )
	{
		return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
	}

	var u, l, c, p, s, g = {}, T = 750;
	e( document ).ready( function()
	{
		var f, h, w, y, d = 0, m = 0;
		"MSGesture" in window && (s = new MSGesture, s.target = document.body), e( document ).bind( "MSGestureEnd", function( e )
		{
			var t = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
			t && (g.el.trigger( "swipe" ), g.el.trigger( "swipe" + t ))
		} ).on( "touchstart MSPointerDown pointerdown", function( t )
		{
			(y = a( t, "down" )) && !r( t ) || (w = y ? t : t.touches[ 0 ], t.touches && 1 === t.touches.length && g.x2 && (g.x2 = void 0, g.y2 = void 0), f = Date.now(), h = f - (g.last || f), g.el = e( "tagName" in w.target ? w.target : w.target.parentNode ), u && clearTimeout( u ), g.x1 = w.pageX, g.y1 = w.pageY, h > 0 && h <= 250 && (g.isDoubleTap = !0), g.last = f, p = setTimeout( n, T ), s && y && s.addPointer( t.pointerId ))
		} ).on( "touchmove MSPointerMove pointermove", function( e )
		{
			(y = a( e, "move" )) && !r( e ) || (w = y ? e : e.touches[ 0 ], o(), g.x2 = w.pageX, g.y2 = w.pageY, d += Math.abs( g.x1 - g.x2 ), m += Math.abs( g.y1 - g.y2 ))
		} ).on( "touchend MSPointerUp pointerup", function( n )
		{
			(y = a( n, "up" )) && !r( n ) || (o(), g.x2 && Math.abs( g.x1 - g.x2 ) > 30 || g.y2 && Math.abs( g.y1 - g.y2 ) > 30 ? c = setTimeout( function()
			{
				g.el && (g.el.trigger( "swipe" ), g.el.trigger( "swipe" + t( g.x1, g.x2, g.y1, g.y2 ) )), g = {}
			}, 0 ) : "last" in g && (d < 30 && m < 30 ? l = setTimeout( function()
			{
				var t = e.Event( "tap" );
				t.cancelTouch = i, g.el && g.el.trigger( t ), g.isDoubleTap ? (g.el && g.el.trigger( "doubleTap" ), g = {}) : u = setTimeout( function()
				{
					u = null, g.el && g.el.trigger( "singleTap" ), g = {}
				}, 250 )
			}, 0 ) : g = {}), d = m = 0)
		} ).on( "touchcancel MSPointerCancel pointercancel", i ), e( window ).on( "scroll", i )
	} ), [ "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap" ].forEach( function( t )
	{
		e.fn[ t ] = function( e )
		{
			return this.on( t, e )
		}
	} )
}( Zepto );