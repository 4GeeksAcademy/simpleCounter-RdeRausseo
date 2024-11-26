import React, { useEffect, useState } from "react";
import SecondsCounter from "./SecondsCounter";

//include images into your bundle


//create your first component
const Home = () => {

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<SecondsCounter
			uno={Math.floor(counter / 1) % 10}
			dos={Math.floor(counter / 10) % 10}
			tres={Math.floor(counter / 100) % 10}
			cuatro={Math.floor(counter / 1000) % 10}
			cinco={Math.floor(counter / 10000) % 10}
			seis={Math.floor(counter / 100000) % 10}
		/>
	)

}
export default Home;
