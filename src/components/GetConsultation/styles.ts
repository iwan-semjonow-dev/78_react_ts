import styled from "@emotion/styled";

export const GetConsultationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 500px;
  padding: 30px;
  background-color: white;
  border: 4px solid rgb(22, 10, 43);
  border-radius: 10px;
`;


export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Checkbox = styled.input``;

export const CheckboxText = styled.span`
  font-size: 18px;
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: red;
`;

export const SuccessMessage = styled.div`
  font-size: 16px;
  color: green;
`;
