import styled from "styled-components";

export const WholePageDiv = styled.div`
  .backButton {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    color: white;
    border-radius: 20px;
    font-weight: normal;
    transition: all 0.5s ease;
    &:hover {
      background-color: rgba(0, 0, 0, 1);
      border-radius: 10px;
      font-weight: bold;
    }
  }
`;

export const Background = styled.img`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Wrapper = styled.div`
  border-radius: 2rem;
  width: 60%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;

  font-family: "Montserrat", sans-serif;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  transition: 0.5s ease-in-out;

  &:hover {
    width: 70%;
    height: 60%;
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    height: 80%;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const DataWrapper = styled.div`
  color: white;
  text-shadow: 0.2rem 1px 1px rgba(0, 0, 0, 0.7);

  place-self: center;
  height: 70%;
  line-height: 2rem;
  font-weight: bolder;
`;
export const Name = styled.h1`
  backdrop-filter: blur(0);
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0);
  &:hover {
    color: rgba(255, 255, 255, 1);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.25);
  }
  @media only screen and (max-width: 500px) {
    font-size: x-large;
  }
`;

export const Type = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0);
  &:hover {
    color: rgba(255, 255, 255, 1);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.25);
  }
`;
export const Dimension = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0);
  &:hover {
    color: rgba(255, 255, 255, 1);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.25);
  }
`;
