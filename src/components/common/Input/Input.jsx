import { FormInput, Label, ErrorMessage } from './Input.styled';

const Input = ({ label, error, ...props }) => {
  return (
    <Label>
      {label}
      <FormInput {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Label>
  );
};

export default Input;
