import styled from "styled-components";
import Car, { CarProps } from "../../../components/Car";

const Wrapper = styled.div`
  display: flex;
  gap: var(--size-24);
`;

const CARS: CarProps[] = [
  {
    bgColor: "var(--color-yellow2)",
    recommendPercent: 64,
    carName: "Mini Cooper",
    view: 132,
    price: 32,
    imageName: "miniCooper.png",
    id: "car-1",
  },
  {
    bgColor: "var(--color-tertiary)",
    recommendPercent: 74,
    carName: "Porsche 911 Carrera",
    view: 150,
    price: 28,
    imageName: "porsche911Carrera.png",
    id: "car-2",
  },
  {
    bgColor: "var(--color-pink)",
    recommendPercent: 78,
    carName: "Porsche 911 Carrera",
    view: 110,
    price: 28,
    imageName: "porsche911CarreraRed.png",
    id: "car-3",
  },
];

const CarsRecommend = () => {
  const renderItem = () => {
    return CARS.map((car) => <Car key={car.id} {...car} />);
  };

  return <Wrapper>{renderItem()}</Wrapper>;
};

export default CarsRecommend;
