var tenso  		= require( "tenso" ),
	routes 		= require( "./routes" );


var config = {
	routes: routes,
	hostname: "pacific-sands-9126.herokuapp.com",
	port: process.env.PORT
}

tenso( config );

console.log("API engaged! cling! clang! bvvvvv!...");