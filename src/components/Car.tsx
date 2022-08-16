import styled from "styled-components";
import { Icons } from "../assets";

const Wrapper = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding: var(--size-14) var(--size-27);
  border-radius: var(--size-14);
`;

const Content = styled.div``;

const HeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-10);
`;

const Image = styled.img`
  margin: var(--size-10) 0;
  width: 257px;
  height: 106px;
  border: none;
`;

const Text = styled.p`
  color: var(--color-dark);
  font-weight: 700;
  font-size: var(--size-20);
`;

const RecommendText = styled(Text)`
  font-size: var(--size-16);
`;

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--size-8);
`;

const OptionText = styled.p`
  font-weight: 500;
  color: var(--color-dark3);
`;

const OptionLeftContent = styled.p`
  display: flex;
  gap: var(--size-16);
  align-items: center;
`;

export type CarProps = {
  bgColor?: string;
  recommendPercent: number;
  imageName: string;
  carName: string;
  price: number;
  view: number;
  id: string;
};

const Car = ({
  bgColor = "var(--color-white)",
  recommendPercent,
  imageName,
  carName,
  price,
  view,
}: CarProps) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Content>
        <HeaderTextWrapper>
          <Icons.Recommend />
          <RecommendText>{`${recommendPercent}% Recommend`}</RecommendText>
        </HeaderTextWrapper>
        <Image src={require(`../assets/${imageName}`)} />
      </Content>
      <Text>{carName}</Text>
      <OptionsWrapper>
        <OptionLeftContent>
          <Icons.CarLoop />
          <OptionText>{`${view}K`}</OptionText>
          <Icons.CarSettings />
          <Icons.CarServices />
        </OptionLeftContent>
        <OptionText>{`$${price}/h`}</OptionText>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Car;
