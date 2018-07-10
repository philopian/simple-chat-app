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
  }
`;
