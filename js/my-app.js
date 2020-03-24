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
    	url: 'index.html',
    	name: 'home',
  		},
        {
		path: '/pulseras/',
    	url: 'coffee.html',
    	name: 'coffee',
  		},
        {
		path: '/aritos/',
    	url: 'form.html',
    	name: 'form',
  		}
		{
		path: '/caballeros/',
    	url: 'form.html',
    	name: 'form',
  		}
		{
		path: '/sobremi/',
    	url: 'form.html',
    	name: 'form',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

