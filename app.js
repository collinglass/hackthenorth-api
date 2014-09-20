var tenso  		= require( "tenso" ),
	routes 		= require( "./routes" );


var config = {
	routes: routes,
	hostname: "http://pacific-sands-9126.herokuapp.com/",
	port: 80
}

tenso( config );

console.log("API engaged! cling! clang! bvvvvv!...");