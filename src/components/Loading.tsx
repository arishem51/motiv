import styled from "styled-components";
import { SyncLoader } from "react-spinners";

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
`;

const Loading = () => {
  return (
    <Wrapper>
      <SyncLoader size={20} color="var(--color-orange)" />
    </Wrapper>
  );
};

export default Loading;
