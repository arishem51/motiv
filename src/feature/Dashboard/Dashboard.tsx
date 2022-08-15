import styled from "styled-components";
import { BreakFluidCard } from "./components/BreakFluidCard";
import { EnergyCard } from "./components/EnergyCard";
import { RangeCard } from "./components/RangeCard";
import { TireWearCard } from "./components/TireWearCard";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: var(--size-30);
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Content>
        <CardWrapper>
          <EnergyCard chartValue={45} />
          <RangeCard chartValue={66} />
          <BreakFluidCard chartValue={9} />
          <TireWearCard chartValue={25} />
        </CardWrapper>
      </Content>
    </Wrapper>
  );
};

export default Dashboard;
