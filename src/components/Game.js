// Import styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animation";
//Redux
import { useDispatch } from "react-redux";

import { loadDetail } from "../actions/detailAction";

// router
import { Link } from "react-router-dom";

import { smallImage } from "../util";

const Game = ({ name, released, id, image }) => {
	const stringPathId = id.toString();
	// Load details
	const dispatch = useDispatch();

	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};

	return (
		<StyledGame
			variants={popup}
			initial="hidden"
			animate="show"
			layoutId={stringPathId}
			onClick={loadDetailHandler}
		>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
				<p>{released}</p>
				<p>{released.toLocaleDateString("pt-BR")}</p>
				<motion.img
					layoutId={`image ${stringPathId}`}
					src={smallImage(image, 640)}
					alt={name}
				/>
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		object-fit: cover;
		height: 40vh;
	}
`;

export default Game;
