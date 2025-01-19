import styled from "styled-components";

const MyButton = styled.button`
  box-shadow: black 5px 5px;
  border: solid 1px black;
  transition-duration: 0.2s;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 5px;
  background-color: #ebff3b;
  &:hover {
    box-shadow: black 2px 2px;
    cursor: pointer;
    transform: translateX(2.5px) translateY(2.5px);
  }
`;

const RotateContainer = styled.div`
  transform: rotateX(10deg) rotateZ(5deg);
`;

export function Button3d() {
  return (
    <div>
      <RotateContainer className="flex py-4 px-4 justify-center">
        <MyButton>button</MyButton>
      </RotateContainer>
    </div>
  );
}
