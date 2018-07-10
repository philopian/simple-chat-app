import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  .input-section {
    input {
      height: 30px;
      margin: 0px;
      max-width: 200px;
      width: 100%;
    }
    button {
      background-color: ${colors.black};
      color: ${colors.white};
      margin: 0px;
      height: 38px;
    }
  }
  p {
    font-size: 20px;
    color: ${colors.black};
    font-weight: 300;
    font-style: italic;
    margin-bottom: 4px;
    font-size: 16px;
  }
`;
