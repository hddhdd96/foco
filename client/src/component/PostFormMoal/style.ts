import styled from 'styled-components';
import { GlobalStyle } from '../../GlobalStyle';

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = styled.div`
  width: 50vw;
  height: 70vh;
  border-radius: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 26px;
`;

export const Likes = styled.div``;

export const Close = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 70px;
`;
export const Intro = styled.div`
  width: 100%;
  height: 20%;
  border-left: solid 4px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
  margin-bottom: 20px;

  & input {
    margin-bottom: 14px;

    &.store {
      font-size: 5vh;
    }
  }

  & svg {
    width: 1.8vh;
    height: 1.8vh;
  }
`;

export const Title = styled.div`
  width: 100%;

  & input {
    width: 100%;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 22vh;
  margin-bottom: 15px;
  display: flex;
`;

//  260vw //

export const ImageButton = styled.div`
  padding: 10px;

  & label,
  button {
    font-size: 12px;
    padding: 6px 15px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid gray;
    color: gray;
    cursor: pointer;
    margin-right: 15px;
  }

  & input {
    display: none;
  }
`;

export const ImageList = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;

  & .react-horizontal-scrolling-menu--wrapper {
    width: 100%;

    & ::-webkit-scrollbar {
      height: 14px;
    }

    & ::-webkit-scrollbar-track {
      background-color: white;
      border-radius: 10px;
    }

    & ::-webkit-scrollbar-thumb {
      background-color: #eaeaea;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }

    & .react-horizontal-scrolling-menu--arrow-right button,
    .react-horizontal-scrolling-menu--arrow-left button {
      z-index: 99;
      border: none;
      background-color: white;
      box-shadow: 0px 0px 25px 30px white;
      color: gray;
    }
  }
`;

export const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
  padding-bottom: 10px;
`;

export const Image = styled.div`
  border: 1px solid gray;
  width: 300px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   background-color: pink;
  position: relative;

  & img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ImageOver = styled.div`
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 300px;
  height: 220px;
  position: absolute;

  background: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0) 10%,
    rgba(20, 20, 20, 0.1) 25%,
    rgba(20, 20, 20, 0.2) 50%,
    rgba(20, 20, 20, 0.4) 75%,
    rgba(20, 20, 20, 1) 100%
  );
`;

export const ImageItemButton = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    font-size: 40px;
    background-color: rgba(0, 0, 0, 0.5);

    cursor: pointer;

    & svg {
      color: white;
    }
  }
`;

export const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 10px;
  left: 10px;

  & input:first-child {
    margin-bottom: 5px;
  }
`;

export const Tag = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  & input:first-child {
    margin-right: 20px;
  }

  & input {
    font-size: 1.3vh;
  }
`;

export const Review = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & textarea {
    width: 100%;
    height: 60%;
    padding: 7px;
    font-size: 1.5vh;
    margin-bottom: 5px;
    resize: none;
    border-color: gray;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: white;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #eaeaea;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
  }

  & span {
    color: gray;
    align-self: flex-end;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    font-size: 18px;
    border: none;
    border-radius: 12px;
    padding: 8px 20px;

    &:hover {
      cursor: pointer;
      background-color: #e6ddc4;
    }
  }
`;

export const Address = styled.div`
  display: flex;
  font-size: 1.6vh;

  & input:first-child {
    margin-right: 20px;
  }

  & .location-search-input {
    padding: 10px;
    font-size: 16px;
  }

  & .autocomplete-dropdown-container {
    // border: 1px solid gray;
    width: 26vw;
    position: absolute;
    z-index: 2;
    color: gray;
    font-size: 16px;
  }

  & .suggestion-item {
    padding-top: 5px;
    margin-bottom: 4px;
  }
`;

export const Rate = styled.div``;
export const Input = styled.input``;
