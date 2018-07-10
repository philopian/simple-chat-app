import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  background-color: ${colors.black};
  bottom: 0px;
  position: absolute;
  right: 10px;
  width: 400px;

  .chat-box {
    background-color: ${colors.grey};
    height: 600px;
    padding: 10px;
    overflow-y: scroll;
    transition: 0.3s ease-out;
  }

  .chat-box-open {
    height: 600px;
  }

  .chat-box-close {
    height: 0px;
  }

  .footer {
    height: 46px;
    padding-top: 10px;
    background-color: ${colors.black};
  }

  @media only screen and (max-width: 668px) {
    // background-color: red;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    position: absolute;
    right: 10px;
    width: 100%;
    height: 100vh;

    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${colors.black};
    }
  }
`;
