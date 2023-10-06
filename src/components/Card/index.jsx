import React from "react";
import {FiThumbsUp} from "react-icons/fi"
import Cats from "../../assets/cat1.jpeg"
import CatBanner from "../../assets/catBanner.png"

import { CardContainer, Content, HasInfo, PostInfo, UserPicture, UserInfo, ImageBackground } from "./styles";

const Card = () =>{
    return(
        <CardContainer>
            <ImageBackground src={CatBanner}/>
            <Content>
                <UserInfo>
                    <UserPicture src={Cats} />
                    <div>
                        <h4>
                            Lunowisky
                        </h4>
                        <p>
                            Ha 8 minutos
                        </p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>
                        Project for cats
                    </h4>
                    <p>
                        Project made for cat lovers
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>
                        #Cats #Lover #Meow
                    </h4>
                    <p>
                        <FiThumbsUp /> 1000
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>

    
    )
}

export default Card;