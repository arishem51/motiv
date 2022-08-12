import RAvatar, { AvatarFullConfig } from "react-nice-avatar";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

const SIZE = 48;

const Wrapper = styled.div`
  width: ${SIZE}px;
  height: ${SIZE}px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
`;

type Props = {
  isLoading?: boolean;
  imageConfig?: AvatarFullConfig;
};

const Avatar = ({ isLoading, imageConfig }: Props) => {
  return (
    <Wrapper>
      {isLoading ? (
        <SyncLoader size={6} color="var(--color-orange)" />
      ) : (
        <RAvatar
          style={{ width: SIZE + "px", height: SIZE + "px" }}
          {...imageConfig}
        />
      )}
    </Wrapper>
  );
};

export default Avatar;
