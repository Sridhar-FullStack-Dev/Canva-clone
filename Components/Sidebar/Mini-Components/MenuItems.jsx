import "../module.css";
import Link from "next/link";
import styled from "styled-components";

const Div = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

const Bottom = styled.div`
  padding: 16px;
  width: 100%;
`;

const Line = styled.span`
  display: block;
  margin-top: 8px;
  height: 1px;
  width: 100%;
  background-color: #394c6026;
`;

export default function MenuItems() {
  return (
    <Div className="sidebar_menuItems">
      <div>
        <Link href={"/"}>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.03 3.327a1.599 1.599 0 0 1 1.94 0l7.384 5.61c.407.31.646.795.646 1.31v9.117c0 .903-.723 1.636-1.615 1.636h-3.762a1.626 1.626 0 0 1-1.615-1.636V15.88A2.015 2.015 0 0 0 12 13.847a2.015 2.015 0 0 0-2.008 2.034v3.483c0 .903-.723 1.636-1.615 1.636H4.615A1.626 1.626 0 0 1 3 19.364v-9.117c0-.515.24-1 .646-1.31l7.385-5.61Zm.908 1.195-7.384 5.61a.144.144 0 0 0-.054.115v9.117c0 .08.056.136.115.136h3.762c.06 0 .115-.057.115-.136V15.88c0-1.953 1.562-3.534 3.508-3.534s3.508 1.581 3.508 3.534v3.483c0 .08.056.136.115.136h3.762c.059 0 .115-.057.115-.136v-9.117a.144.144 0 0 0-.054-.115l-7.384-5.61a.099.099 0 0 0-.124 0Z"
                fill="currentColor"
              ></path>
            </svg>
            Home
          </div>
        </Link>
      </div>

      <div>
        <Link href={"/"} className="sidebar_magic_studio">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.6 5.613C7.91 5.466 6.98 4.874 6.484 3.7c-.179-.423-.304-.917-.384-1.5 0-.1-.1-.2-.2-.2s-.2.1-.2.2c-.08.583-.205 1.077-.384 1.5C4.821 4.874 3.891 5.466 2.2 5.613c-.1 0-.2.1-.2.2s.1.2.2.2c2.1.4 3.2 1.187 3.5 3.387 0 .1.1.2.2.2s.2-.1.2-.2c.3-2.2 1.4-2.987 3.5-3.387.1 0 .2-.1.2-.2s-.1-.2-.2-.2Z"
                fill="url(#_342851117__a)"
              ></path>
              <path
                d="M19.469 11.865c-4-.8-5.726-2.73-6.526-6.629a.493.493 0 0 0-.474-.371.493.493 0 0 0-.475.376c.007-.015-.009.006 0 0-.8 4-2.625 5.824-6.525 6.624a.5.5 0 0 0 0 1c4 .8 5.717 2.687 6.517 6.587a.493.493 0 0 0 .483.413.493.493 0 0 0 .477-.387c.006-.008-.005.01 0 0 .8-4 2.623-5.813 6.523-6.613a.5.5 0 0 0 0-1Z"
                fill="url(#_342851117__b)"
              ></path>
              <path
                d="M21.465 5.8c0-.084-.061-.14-.144-.156l-.056-.013c-1.168-.305-1.876-1.024-2.073-2.108a.153.153 0 0 0-.153-.153v.004c-.084 0-.14.062-.156.144l-.013.056c-.305 1.168-1.024 1.876-2.108 2.073a.153.153 0 0 0-.153.153h.004c0 .084.062.14.145.156l.055.013c1.168.305 1.876 1.024 2.073 2.108 0 .084.069.153.153.153v-.004c.084 0 .14-.062.156-.145l.014-.055c.304-1.168 1.023-1.876 2.107-2.073a.15.15 0 0 0 .15-.153Z"
                fill="url(#_342851117__c)"
              ></path>
              <path
                d="M7.919 18.715c-1-.3-1.582-.782-1.782-1.782a.218.218 0 1 0-.436 0c-.3 1-.782 1.582-1.782 1.782a.218.218 0 0 0 0 .436c1 .3 1.582.782 1.782 1.782a.218.218 0 0 0 .436 0c.3-1 .782-1.582 1.782-1.782a.218.218 0 0 0 0-.436Z"
                fill="url(#_342851117__d)"
              ></path>
              <defs>
                <linearGradient
                  id="_342851117__a"
                  x1="-7.733"
                  y1="11.576"
                  x2="11.416"
                  y2="31.039"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#03A5AB"></stop>
                  <stop offset="1" stop-color="#8B3DFF"></stop>
                </linearGradient>
                <linearGradient
                  id="_342851117__b"
                  x1="-7.733"
                  y1="11.576"
                  x2="11.416"
                  y2="31.039"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#03A5AB"></stop>
                  <stop offset="1" stop-color="#8B3DFF"></stop>
                </linearGradient>
                <linearGradient
                  id="_342851117__c"
                  x1="-7.733"
                  y1="11.576"
                  x2="11.416"
                  y2="31.039"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#03A5AB"></stop>
                  <stop offset="1" stop-color="#8B3DFF"></stop>
                </linearGradient>
                <linearGradient
                  id="_342851117__d"
                  x1="-7.733"
                  y1="11.576"
                  x2="11.416"
                  y2="31.039"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#03A5AB"></stop>
                  <stop offset="1" stop-color="#8B3DFF"></stop>
                </linearGradient>
              </defs>
            </svg>
            Magic Studio
          </div>
          <div className="sidebar_new">NEW</div>
        </Link>
      </div>

      <div>
        <Link href={"/"}>
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.078 5.333H5.334A2.667 2.667 0 0 0 2.667 8v2.667c0 .203.023.402.066.592a2.315 2.315 0 0 0-.066.55v12.382c0 1.367 1.194 2.476 2.667 2.476h21.333c1.473 0 2.667-1.109 2.667-2.477V11.81c0-1.368-1.194-2.477-2.667-2.477h-9.333l-.726-2.176a2.667 2.667 0 0 0-2.53-1.824Zm-8.744 4h9.892L14.71 7.79a.667.667 0 0 0-.633-.456H5.334A.667.667 0 0 0 4.667 8v1.411c.213-.05.436-.078.667-.078Zm-.667 2.477c0-.229.267-.477.667-.477h21.333c.4 0 .667.248.667.477v12.38c0 .229-.267.477-.667.477H5.334c-.4 0-.667-.248-.667-.477V11.81Z"
                fill="currentColor"
              ></path>
            </svg>
            Projects
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m8.55 5.78 5.96 5.97c.1.1.1.25 0 .35l-5.87 5.87a.75.75 0 0 0 1.06 1.06l5.87-5.87c.69-.68.69-1.79 0-2.47L9.61 4.72a.75.75 0 0 0-1.06 1.06z"
            ></path>
          </svg>
        </Link>
      </div>

      <div>
        <Link href={"/"}>
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.333 4H6.667A2.667 2.667 0 0 0 4 6.667v18.666A2.667 2.667 0 0 0 6.667 28h18.666A2.667 2.667 0 0 0 28 25.333V6.667A2.667 2.667 0 0 0 25.333 4ZM6 6.667C6 6.298 6.298 6 6.667 6h10.666v20H6.667A.667.667 0 0 1 6 25.333V6.667Zm13.333 6.666V6h6c.369 0 .667.298.667.667v6.666h-6.667Zm0 2V26h6a.667.667 0 0 0 .667-.667v-10h-6.667Z"
                fill="currentColor"
              ></path>
            </svg>
            Templates
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m8.55 5.78 5.96 5.97c.1.1.1.25 0 .35l-5.87 5.87a.75.75 0 0 0 1.06 1.06l5.87-5.87c.69-.68.69-1.79 0-2.47L9.61 4.72a.75.75 0 0 0-1.06 1.06z"
            ></path>
          </svg>
        </Link>
      </div>

      <div>
        <Link href={"/"}>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.22 3.435 9.532 6.53 5.41 8.03l6.847-5.745a2 2 0 0 1 2.817.246L16.5 4.23a2.99 2.99 0 0 0-1.14.18l-.511.186-.923-1.1a.5.5 0 0 0-.704-.061Zm-1.276 4.878H7.56l8.143-2.964a2 2 0 0 1 2.563 1.195l.644 1.769h-1.597l-.457-1.256a.5.5 0 0 0-.64-.298l-4.27 1.554Zm-6.752 1h14a1.992 1.992 0 0 1 1.492.668c.316.354.508.82.508 1.332v8a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm14.822-.886.009.002-.014-.015.005.013ZM4.75 11.3a.5.5 0 0 1 .5-.5H19.2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H5.25a.5.5 0 0 1-.5-.5v-8Zm6.446 4.326c-.033.905-.768 1.544-1.782 1.544-1.185 0-1.914-.795-1.914-2.086C7.5 13.792 8.227 13 9.414 13c.995 0 1.749.664 1.779 1.56h-.968a.791.791 0 0 0-.811-.721c-.551 0-.889.471-.889 1.242 0 .773.338 1.25.891 1.25.434 0 .757-.28.815-.704h.965ZM13.688 13c1.19 0 1.946.798 1.946 2.084 0 1.288-.756 2.086-1.946 2.086-1.196 0-1.952-.798-1.952-2.086 0-1.286.765-2.084 1.952-2.084Zm0 .834c-.557 0-.927.488-.927 1.25 0 .764.365 1.253.927 1.253.556 0 .924-.489.924-1.253 0-.762-.37-1.25-.924-1.25Zm2.792 3.23a.702.702 0 1 0 0-1.405.702.702 0 0 0 0 1.404Z"
                fill="currentColor"
              ></path>
            </svg>
            Brand
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 16 16"
            >
              <path
                fill="white"
                d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z"
              ></path>
            </svg>
          </span>
        </Link>
      </div>

      <div>
        <Link href={"/"}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M5 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6-6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6-6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM5 16h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
              ></path>
            </svg>
            Apps
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m8.55 5.78 5.96 5.97c.1.1.1.25 0 .35l-5.87 5.87a.75.75 0 0 0 1.06 1.06l5.87-5.87c.69-.68.69-1.79 0-2.47L9.61 4.72a.75.75 0 0 0-1.06 1.06z"
            ></path>
          </svg>
        </Link>
      </div>

      {/* Bottom */}
      <Bottom className="bottom">
        <div className="bottom_1">
          <Link href={"/"}>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 18.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h6.5c.275 0 .5.225.5.5v13.5H4Zm8.5 1.497V20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.5c1.102 0 2 .895 2 2v3.997h2L20 9c1.105 0 2 .892 2 2v7l-1.5-.001V11c0-.278-.222-.5-.5-.5l-3.126-.001-4.374-.002v8l7.5.003a.5.5 0 0 0 .5-.5H22a2 2 0 0 1-2 2l-7.5-.003ZM5 7.497h4.5v-1.5H5v1.5Zm0 3h4.5v-1.5H5v1.5Zm4.5 3H5v-1.5h4.5v1.5Zm-4.5 3h4.5v-1.5H5v1.5Zm11-3h-2v-1.5h2v1.5Zm0 3h-2v-1.5h2v1.5Zm3-3h-2v-1.5h2v1.5Zm0 3h-2v-1.5h2v1.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Create a team
            </div>
          </Link>
        </div>

        <Line></Line>

        <div className="bottom_2">
          <Link href={"/"}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h4.25a.75.75 0 1 1 0 1.5H19V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6.5H3.75a.75.75 0 0 1 0-1.5H8zM6.5 6.5V18c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6.5h-11zm3-1.5h5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5zm-.25 4h1.5v8h-1.5V9zm4 0h1.5v8h-1.5V9z"
                ></path>
              </svg>
              Trash
            </div>
          </Link>
        </div>
      </Bottom>
    </Div>
  );
}
