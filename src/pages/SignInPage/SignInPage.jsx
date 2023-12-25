import { SignInForm } from "components/SignInForm/SignInForm";
import { Wrapper } from "./SignInPage.styled";
import Container from 'components/common/Container';



export default function SignInPage() {
    return(
        <Wrapper>
            <Container>
                <SignInForm/>
            </Container>
        </Wrapper>
    )
}