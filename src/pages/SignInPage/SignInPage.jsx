import { SignInForm } from "components/SignInForm/SignInForm";
import { Wrapper } from "./SignInPage.styled";
import Container from 'components/common/Container';
import { StyleSheetManager } from 'styled-components';




export default function SignInPage() {
    return(
        <Wrapper>
            <Container>
                    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'haserror'}>
                    <SignInForm />
                        </StyleSheetManager>

            </Container>
        </Wrapper>
    )
}