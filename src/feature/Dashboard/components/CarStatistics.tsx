import styled from "styled-components";
import LineChartStatistics from "../../../components/LineChartStatistics";
import ButtonGroupStatistics from "./ButtonGroupStatistics";
import HeaderTextStatistics from "./HeaderTextStatistics";

const data = [
  {
    name: "1 PM",
    value: 4000,
    id: "id-1",
  },
  {
    name: "2 PM",
    value: 1250,
    id: "id-2",
  },
  {
    name: "3 PM",
    value: 2210,
    id: "id-3",
  },
  {
    name: "4 PM",
    value: 1836,
    id: "id-4",
  },

  {
    name: "5 PM",
    value: 1300,
    id: "id-5",
  },
  {
    name: "7 PM",
    value: 3100,
    id: "id-7",
  },
];

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
      <LineChartStatistics
        data={data}
        dataKey="value"
        chartHeight={198}
        chartWidth={398}
      />
    </Wrapper>
  );
};

export default CarStatistics;
