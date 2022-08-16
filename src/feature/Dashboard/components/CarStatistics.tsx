import styled from "styled-components";
import ButtonGroupStatistics from "./ButtonGroupStatistics";
import HeaderTextStatistics from "./HeaderTextStatistics";

const Wrapper = styled.div`
  padding: var(--size-16) var(--size-32);
  background-color: var(--color-white);
  border-radius: var(--size-14);
  gap: var(--size-14);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  color: var(--color-dark2);
  font-weight: 700;
`;

const CarStatistics = () => {
  return (
    <Wrapper>
      <HeaderTextStatistics title="Car" />
      <Content>
        <Text>20 February 2022</Text>
        <ButtonGroupStatistics hasBg activeColor="var(--color-orange)" />
      </Content>
    </Wrapper>
  );
};

export default CarStatistics;
