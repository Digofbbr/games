// Import styling and animation
import styled from 'styled-components'
import {motion} from 'framer-motion'
//Redux
import {useSelector} from 'react-redux'
import { detailsReducer } from '../reducers/detailReducer'

import {useHistory} from 'react-router-dom'

import {smallImage} from '../util'

// Images
import playstation from '../img/playstation.svg'
import nintendo from '../img/nintendo.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = ({pathId}) => {

    const history = useHistory();
    // Exit detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("shadow")){
            document.body.style.overflow = "auto"
            history.push("/")
        }
    };

    // gest stars image
    const getStars = () =>{
        const stars = []
        const rating = Math.floor(game.rating)
        for(let i = 1; i <= 5; i++){
            if (i <= rating){
                stars.push(<img alt="star" key={i} src={starFull}></img>)
            }else{
                stars.push(<img alt="star" key={i} src={starEmpty}></img>)
            }
        }
        return stars
    }

    // Get platforms images
    const getPlatform = (platform) => {
        switch(platform){
            case "PlayStation 4":
                return playstation
            case "Xbox One":
                return xbox
            case "PC":
                return steam
            case "Nintendo Switch":
                return nintendo
            case "iOS":
                return apple
            default:
                return gamepad
        }
    }
     
    // Data
    const {game, screen, isLoading} = useSelector((state) => state.detail)
    
    return(
        <>
        {!isLoading && ( 

            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail layoutId={pathId}>
                    <Stats>
                        <div className="ratings">
                            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                            <p>Rating: {game.rating}</p>
                            {getStars()}
                        </div>
                        <Info>
                            <h3>Plataforms</h3>
                            <Platform>
                                {game.platforms && game.platforms.map(data => (
                                    <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name}></img>
                                    ))}
                            </Platform>
                        </Info>
                    </Stats>
                    <Media>
                        <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt="background-image"/>
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <div className="gallery">
                        {screen.results && screen.results.map((screen) => (
                            <img key={screen.id} src={smallImage(screen.image, 1280)} alt="game image"/>
                            ))}
                    </div>
                </Detail>
            </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676
    }
    &::-webkit-scrollbar-track{
        background-color: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`

const Info = styled(motion.div)`
    text-align: center;
`

const Platform = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetail