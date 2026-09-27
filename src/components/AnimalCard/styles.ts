import styled from "@emotion/styled";

export const AnimalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 300px;
  padding: 30px;
  background-color: rgb(150, 221, 208);
  color: rgb(16, 7, 45);
  border-radius: 12px;
  font-size: 24px;

  & > img {
    width: 150px;
  }
`;
