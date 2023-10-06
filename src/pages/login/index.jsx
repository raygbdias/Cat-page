import {MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import {Column, Container, CreateText, ForgotText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles'

const Login = () =>{
    const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/feed')
    }


    return( <>
        <Header/>
        <Container>
            <Column>
                <Title>
                Owning a cat can bring joy and comfort to your life. Their affectionate nature, calming presence, 
                and playful antics make them wonderful companions.
                </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Register here</TitleLogin>
                <SubTitleLogin>Register here to show your love for cats</SubTitleLogin>
                <form>
                    <Input placeholder="Email" leftIcon={<MdEmail/>}/>
                    <Input placeholder="Password" type="password" leftIcon={<MdLock/>} />
                    <Button title="Entrar" variant='secondary' onClick={handleClickSignIn} type="button"/>
                </form>
                <Row>
                    <ForgotText>I forgot my password</ForgotText>
                    <CreateText>Create account</CreateText>
                </Row>
            </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export default Login;