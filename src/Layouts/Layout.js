import React from "react";
import Header from "../Containers/Header/Header";

const Layouts = (props) => {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
};

export default Layouts;
