import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .input-section {
    input {
      height: 30px;
      margin: 0px;
      width: 200px;
    }
    button {
      background-color: ${colors.black};
      color: ${colors.white};
      margin: 0px;
      height: 38px;
    }
  }
  .label-message {
    display: block;
    font-size: 20px;
    color: ${colors.black};
    font-weight: 300;
    font-style: italic;
    margin-bottom: 4px;
    font-size: 16px;
  }
`;
