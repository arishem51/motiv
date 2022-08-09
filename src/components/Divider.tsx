import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: var(--size-14);
  align-items: center;
`;

const Text = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: var(--color-dark5);
`;

const Rectangle = styled.div`
  height: 1px;
  background-color: var(--color-white3);
  flex: 1;
`;

const Divider = () => {
  return (
    <Wrapper>
      <Rectangle />
      <Text>or</Text>
      <Rectangle />
    </Wrapper>
  );
};

export default Divider;
