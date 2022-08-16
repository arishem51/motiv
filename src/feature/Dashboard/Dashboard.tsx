import styled from "styled-components";
import {
  BreakFluidCard,
  EnergyCard,
  RangeCard,
  TireWearCard,
} from "./components";
import CarsRecommend from "./components/CarsRecommend";
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
  gap: var(--size-30);
`;

const CardWrapper = styled.div`
  display: flex;
  gap: var(--size-30);
`;

const StatisticsWrapper = styled.div`
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
        <CarsRecommend />
      </Content>
    </Wrapper>
  );
};

export default Dashboard;
