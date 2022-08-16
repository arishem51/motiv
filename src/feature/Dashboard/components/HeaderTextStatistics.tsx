import styled from "styled-components";

type Props = {
  title: string;
};

const Wrapper = styled.div`
  display: flex;
  gap: var(--size-6);
`;

const Text = styled.p`
  font-size: var(--size-20);
  color: var(--color-dark);
`;

const TextBold = styled(Text)`
  font-weight: 700;
`;

const HeaderTextStatistics = ({ title }: Props) => {
  return (
    <Wrapper>
      <TextBold>{title}</TextBold>
      <Text>Statistics</Text>
    </Wrapper>
  );
};

export default HeaderTextStatistics;
