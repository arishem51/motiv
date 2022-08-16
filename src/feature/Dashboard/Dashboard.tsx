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
  padding: var(--size-24);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-24);
`;

const CardWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: var(--size-24);
`;

const StatisticsWrapper = styled.div`
  display: flex;
  gap: var(--size-24);
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-24);
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Content>
        <StatisticsWrapper>
          <Side>
            <CardWrapper>
              <EnergyCard chartValue={45} />
              <RangeCard chartValue={66} />
            </CardWrapper>
            <MilesStatistics />
          </Side>
          <Side>
            <CardWrapper>
              <BreakFluidCard chartValue={9} />
              <TireWearCard chartValue={25} />
            </CardWrapper>
            <CarStatistics />
          </Side>
        </StatisticsWrapper>
        <CarsRecommend />
      </Content>
    </Wrapper>
  );
};

export default Dashboard;
