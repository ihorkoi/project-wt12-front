import { SignUpForm } from "components/SignUpForm/SignUpForm";
import { Wrapper } from "./SignUpPage.styled";
import Container from 'components/common/Container';



export default function SignUpPage() {
    return(
        <Wrapper>
            <Container>
                 <SignUpForm/>
            </Container>
        </Wrapper>
    )
}