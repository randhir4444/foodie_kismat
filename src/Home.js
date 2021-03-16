import React from 'react';
import Main from "./image/main.png";
import './Home.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Common from "./Common";

function Home() {
	return (
		<>
			<Common
				start="Enjoy Food wid"
                name="My Foodie Kismat"
                des="We Are Professional food taster😅"
                btn="Get Started"
				img={Main}
			/>
			
		</>

	)
}

export default Home;
