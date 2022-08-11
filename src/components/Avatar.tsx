import { ImgHTMLAttributes } from "react";
import styled from "styled-components";

type Props = ImgHTMLAttributes<HTMLImageElement>;

const SIZE = 48;

const Wrapper = styled.div`
  width: ${SIZE}px;
  height: ${SIZE}px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Image = styled.img``;

const Avatar = (props: Props) => {
  return (
    <Wrapper>
      <Image alt="Avatar" {...props} />
    </Wrapper>
  );
};

export default Avatar;
