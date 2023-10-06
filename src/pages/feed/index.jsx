import Header from "../../components/Header"
import Card from "../../components/Card"
import {Container, Column, Title, TitleHighLight} from './styles'
import UserInfo from '../../components/UserInfo';
import Cats from "../../assets/cats.png"

const Feed = () =>{
    return( <>
        <Header/>
        <Container>
            <Column flex = {3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>
            <Column flex ={1}>
                <TitleHighLight>Best cats ever</TitleHighLight>
                <UserInfo percentual={35} nome="Lunowsky" image={Cats}/>
                <UserInfo percentual={50} nome="Lunowsky" image={Cats}/>
                <UserInfo percentual={10} nome="Lunowsky" image={Cats}/>
                <UserInfo percentual={90} nome="Lunowsky" image={Cats}/>
            </Column>
        </Container>
        </>
    )
}

export default Feed;