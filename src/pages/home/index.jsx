
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import UserInfo from "../../components/UserInfo"
import Banner from "../../assets/cats.png"
import {Container, TextContent, Title, TitleHighLight} from './styles'

const Home = () =>{

    const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/login')
    }

    return( <>
        <Header/>
        <Container>
            <div>
                <Title>
                <TitleHighLight>
                Cats!!
                <br/>
                </TitleHighLight>
                if you like cats your future is here!!
                </Title>
                <TextContent>                  
                Cats are beloved companions, known for their charm, grace, and playful nature.
                </TextContent>
                <Button title ="Start now" variant='secondary' onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={Banner} alt= "cats" />
            </div>
        </Container>
        </>
    )
}

export default Home;