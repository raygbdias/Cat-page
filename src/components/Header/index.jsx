import React from "react";

import {BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper} from './styles';
import Button from "../Button"
import Luna from "../../assets/cat1.jpeg"

const Header = ({auth}) =>{
    return(
        <Wrapper>
            <Container>
                <Row>
                    {auth ? (
                            <>
                            <BuscarInputContainer>
                                <Input placeholder="Search..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                            </>
                        ) : null}
                </Row>
                <Row>
                    {auth ? (
                            <UserPicture src={Luna} />
                    ):(
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title = "Login"/>
                            <Button title = "Sign Up"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header;