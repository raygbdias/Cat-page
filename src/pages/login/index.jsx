import {MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form";
import Button from "../../components/Button";
import Header from "../../components/Header";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from "../../components/Input";

import { api } from '../../services/api';

import {Column, Container, CreateText, ForgotText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles';

const schema = yup.object({
    email: yup.string().email("not a valid Email").required("Please add your email"),
    password: yup.string().min(3, "minimum 3 characteres ").required("Please add your password"),
}).required();

const Login = () =>{
    const navigate = useNavigate();

    const { control, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    
    const onSubmit = async formData => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&password=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            }
            else{
                alert("email or password incorrect")
            }
        }
        catch{
            alert("An Error has ocurred, try it again")
        }
    };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" leftIcon={<MdEmail />} /> 
                    <Input name="password"  errorMessage={errors?.password?.message} control={control}placeholder="Password" type="password" leftIcon={<MdLock/>} />
                    <Button title="Entrar" variant='secondary' type="submit"/>
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