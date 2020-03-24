// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'App Coffee', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'home.html',
    	name: 'home',
  		},
        {
		path: '/pulseras/',
    	url: 'pulseras.html',
    	name: 'pulseras',
  		},
        {
		path: '/aritos/',
    	url: 'aritos.html',
    	name: 'aritos',
  		},
		{
		path: '/caballeros/',
    	url: 'caballeros.html',
    	name: 'caballeros',
  		},
		{
		path: '/sobremi/',
    	url: 'sobremi.html',
    	name: 'sobremi',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

