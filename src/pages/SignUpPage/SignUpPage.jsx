import { SignUpForm } from "components/SignUpForm/SignUpForm";
import { Wrapper } from "./SignUpPage.styled";
import Container from 'components/common/Container';
import { StyleSheetManager } from 'styled-components';




export default function SignUpPage() {
    return(
        <Wrapper>
            <Container>
                <StyleSheetManager shouldForwardProp={(prop) => prop !== 'haserror'}>
                    <SignUpForm />
                    </StyleSheetManager>
            </Container>
        </Wrapper>
    )
}