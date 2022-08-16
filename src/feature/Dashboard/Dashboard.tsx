import styled from "styled-components";
import {
  BreakFluidCard,
  EnergyCard,
  RangeCard,
  TireWearCard,
} from "./components";
import CarStatistics from "./components/CarStatistics";
import MilesStatistics from "./components/MilesStatistics";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex: 1;
  padding: var(--size-30);
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

const StatisticsWrapper = styled.div`
  margin-top: var(--size-24);
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
        <StatisticsWrapper>
          <MilesStatistics />
          <CarStatistics />
        </StatisticsWrapper>
      </Content>
    </Wrapper>
  );
};

export default Dashboard;
