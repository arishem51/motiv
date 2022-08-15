import styled from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  gap: var(--size-8);
`;

const Text = styled.p`
  font-size: var(--size-20);
  color: var(--color-dark);
`;

const Text700 = styled(Text)`
  font-weight: 700;
`;

const MilesText = () => {
  return (
    <TextWrapper>
      <Text700>Miles</Text700>
      <Text>Statistics</Text>
    </TextWrapper>
  );
};

export default MilesText;
