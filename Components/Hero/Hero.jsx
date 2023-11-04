import styled from "styled-components";
import Link from "next/link";
import "./module.css";

const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  background-color: #fff;
  margin-top: 70px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  padding: 16px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 4px;
    height: 15rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

const Container = styled.div`
  height: 89vh;
  width: 100%;
`;

const SparklesContainer = styled.div`
  position: relative;
  height: 270px;
  width: 100%;
  text-align: center;
  border-radius: 10px;

  background: linear-gradient(
      104.19deg,
      rgba(37, 1, 83, 0) 39.91%,
      #3b0388 77.15%
    ),
    linear-gradient(
      96.54deg,
      rgba(6, 189, 196, 0.78) 13.14%,
      rgba(2, 214, 215, 0) 57.93%
    ),
    #440496;
`;

const SparkleHeader = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const SparkleMenu = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;

  display: flex;
  gap: 6px;
`;

export default function Hero() {
  return (
    <Container className="Hero">
      <HeroContainer>
        <SparklesContainer>
          <div className="hero_heading">
            <Link href={"/"}>
              <SparkleHeader>Bring learning to life</SparkleHeader>
            </Link>
          </div>

          <SparkleMenu className="hero_menu">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6.165V19a2 2 0 0 0 2 2h12.835c-.06-.05-.12-.102-.176-.159L16.318 19.5H5a.5.5 0 0 1-.5-.5V7.682L3.159 6.341A2.275 2.275 0 0 1 3 6.165ZM17.28 4.22a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H6.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06L6.56 4h8.38l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2ZM19.78 19.78a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V9.06l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06L20 9.06v8.38l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.75 13.81v7.44a.75.75 0 1 1-1.5 0v-7.4L9.49 15.6a.75.75 0 1 1-1.06-1.06l2.35-2.36c.68-.68 1.8-.68 2.48 0l2.35 2.36a.75.75 0 1 1-1.06 1.06l-1.8-1.8zM9 18v1.5H6.75v-.01A5.63 5.63 0 0 1 5.01 8.66a6 6 0 0 1 11.94-.4 5.63 5.63 0 0 1 .3 11.23v.01H15V18h1.88a4.12 4.12 0 1 0-1.5-7.97A4.51 4.51 0 0 0 11 4.5a4.5 4.5 0 0 0-4.43 5.29 4.13 4.13 0 0 0 .68 8.2V18H9z"
                ></path>
              </svg>
            </div>
          </SparkleMenu>
        </SparklesContainer>
      </HeroContainer>
    </Container>
  );
}
