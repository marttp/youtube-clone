function Sidebar() {
  return (
    <div className="w-60 bg-white py-3 pr-3">
      <a href="#" className="w-full sidebar__item px-6 py-2 bg-gray-200">
        <div className="w-6 inline-block mr-6">
          <svg
            fill="#EF4444"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <span className="text-sm font-semibold">Home</span>
      </a>
      <a href="#" className="w-full sidebar__item px-6 py-2">
        <div className="w-6 inline-block mr-6">
          <svg
            fill="#6B7280"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M11.23 13.08c-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.71-.23.99a1.327 1.327 0 01-1.08.56c-.28 0-.55-.08-.77-.25zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-3.97-6.03L9.8 9.8l-3.83 8.23 8.23-3.83 3.83-8.23z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <span className="text-sm">Explore</span>
      </a>
      <a
        href="#"
        className="
          w-full
          sidebar__item
          px-6
          py-2
          border-b border-gray-250
          pb-6
          mb-2
        "
      >
        <div className="w-6 inline-block mr-6">
          <svg
            fill="#6B7280"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <span className="text-sm">Subscriptions</span>
      </a>
      <a href="#" className="w-full sidebar__item px-6 py-2">
        <div className="w-6 inline-block mr-6">
          <svg
            fill="#6B7280"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                fill="none"
                d="M0 0h24v24H0z"
                className="style-scope yt-icon"
              ></path>
              <path
                d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <span className="text-sm">Library</span>
      </a>
      <a
        href="#"
        className="
          w-full
          sidebar__item
          px-6
          py-2
          border-b border-gray-250
          pb-6
          mb-2
        "
      >
        <div className="w-6 inline-block mr-6">
          <svg
            fill="#6B7280"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <span className="text-sm">History</span>
      </a>
      <div className="py-2 px-6 border-b border-gray-250 pb-6">
        <p className="text-sm text-gray-900">
          Sign in to like videos, comment, and subscribe.
        </p>
        <button
          className="
            custom-signin
            mt-3
            uppercase
            border border-blue-600
            py-1
            px-4
            font-semibold
            text-blue-600 text-sm
          "
        >
          <div className="w-4">
            <svg
              fill="#2563EB"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "100%",
                height: "100%"
              }}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M12,0 C18.62375,0 24,5.37625 24,12 C24,18.62375 18.62375,24 12,24 C5.37625,24 0,18.62375 0,12 C0,5.37625 5.37625,0 12,0 Z M12,10.63625 C13.66,10.63625 15,9.29625 15,7.63625 C15,5.97625 13.66,4.63625 12,4.63625 C10.34,4.63625 9,5.97625 9,7.63625 C9,9.29625 10.34,10.63625 12,10.63625 Z M12,12.40875 C8.33375,12.40875 5.455,14.18125 5.455,15.8175 C6.84125,17.95 9.26875,19.3625 12,19.3625 C14.73125,19.3625 17.15875,17.95 18.545,15.8175 C18.545,14.18125 15.66625,12.40875 12,12.40875 Z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </div>
          Sign In
        </button>
      </div>
      <p className="uppercase font-semibold text-gray-500 text-sm py-2 px-6">
        Best of Youtube
      </p>
      <a href="#" className="w-full sidebar__item px-6 py-2">
        <div className="w-6 inline-block mr-6">
          <img
            className="rounded-full"
            src="https://yt3.ggpht.com/a2LqnIwoLIX9dSZ-nfzSV8ketxYhI4co4f_v0Qlp-nDAzx8EHh2jXjoRPCnFBec8MjM4SNi-=s88-c-k-c0x00ffffff-no-rj"
            alt="music"
          />
        </div>
        <span className="text-sm">Music</span>
      </a>
      <a href="#" className="w-full sidebar__item px-6 py-2">
        <div className="w-6 inline-block mr-6">
          <img
            className="rounded-full"
            src="https://yt3.ggpht.com/bU2A6-CNs3841ThI0UQQAy53hRokByEz7FMpWRaR54aLfVi2pP_Uabhz-Gbs5ZDrlYAa38QEXA=s88-c-k-c0x00ffffff-no-rj"
            alt="music"
          />
        </div>
        <span className="text-sm">Sports</span>
      </a>
      <a href="#" className="w-full sidebar__item px-6 py-2">
        <div className="w-6 inline-block mr-6">
          <img
            className="rounded-full"
            src="https://yt3.ggpht.com/A1FXYDMnMDnrUo7sfOAY_XEqcu8giCfBP_RCJ9uKgu5ImvcQ2ItHPqQTPFRbIGYiqSG47iEMJA=s88-c-k-c0x00ffffff-no-rj"
            alt="music"
          />
        </div>
        <span className="text-sm">Gaming</span>
      </a>
      <a href="#" className="w-full sidebar__item px-6 py-2">
        <div className="w-6 inline-block mr-6">
          <img
            className="rounded-full"
            src="https://yt3.ggpht.com/vNBcaCSHOcYDgva6GkjD3vS5VEqbzUxCHSOibTzUnbvN5PaUtl_AbUxSiwT0G_yeFhQde8nDXw=s88-c-k-c0x00ffffff-no-rj"
            alt="music"
          />
        </div>
        <span className="text-sm">News</span>
      </a>
      <a href="#" className="w-full sidebar__item px-6 py-2">
        <div className="w-6 inline-block mr-6">
          <img
            className="rounded-full"
            src="https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0x00ffffff-no-rj"
            alt="music"
          />
        </div>
        <span className="text-sm">Live</span>
      </a>
      <a
        href="#"
        className="w-full sidebar__item px-6 py-2 border-b border-gray-250 pb-6"
      >
        <div className="w-6 inline-block mr-6">
          <img
            className="rounded-full"
            src="https://yt3.ggpht.com/deCyXl_-pd0W6nCB3c89QXuAxiGr7cou-fzsYyQq-9oDjffUaZG0TWHtyMQvgaVSis_oFigncQ=s88-c-k-c0x00ffffff-no-rj"
            alt="music"
          />
        </div>
        <span className="text-sm">360° Video</span>
      </a>
      <a className="w-full sidebar__item px-6 py-2 border-b border-gray-250 mb-2">
        <div className="w-6 inline-block mr-6">
          <svg
            fill="#6B7280"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <span className="text-sm">Browse Channels</span>
      </a>
      <p className="uppercase font-semibold text-gray-500 text-sm py-2 px-6">
        More From Youtube
      </p>
      <a
        href="#"
        className="
          w-full
          sidebar__item
          px-6
          py-2
          border-b border-gray-250
          pb-4
          mb-2
        "
      >
        <div className="w-6 inline-block mr-6">
          <svg
            fill="#6B7280"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"
                className="style-scope yt-icon"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="3"
                className="style-scope yt-icon"
              ></circle>
            </g>
          </svg>
        </div>
        <span className="text-sm">Live</span>
      </a>
      <a href="#" className="w-full sidebar__item px-6 py-2">
        <div className="w-6 inline-block mr-6">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <span className="text-sm">Settings</span>
      </a>
      <a href="#" className="w-full sidebar__item px-6 py-2">
        <div className="w-6 inline-block mr-6">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <span className="text-sm">Report History</span>
      </a>
      <a href="#" className="w-full sidebar__item px-6 py-2">
        <div className="w-6 inline-block mr-6">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <span className="text-sm">Help</span>
      </a>
      <a
        href="#"
        className="
          w-full
          sidebar__item
          px-6
          py-2
          border-b border-gray-250
          pb-4
          mb-2
        "
      >
        <div className="w-6 inline-block mr-6">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M0 0h24v24H0z"
                fill="none"
                className="style-scope yt-icon"
              ></path>
              <path
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <span className="text-sm">Send Feedback</span>
      </a>
      <div className="py-2 px-6">
        <div>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            About
          </a>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            Press
          </a>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            Copyright
          </a>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            Contact us
          </a>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            Creator
          </a>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            Advertise
          </a>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            Developers
          </a>
        </div>
        <div className="mt-3">
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            Terms
          </a>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            Privacy
          </a>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            Policy & Safety
          </a>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            How Youtube works
          </a>
          <a href="" className="pr-2 text-sm font-semibold text-gray-600">
            Test new features
          </a>
        </div>
        <div className="mt-3 text-xs text-gray-600">© 2021 Google LLC</div>
      </div>
    </div>
  );
}

export default Sidebar;
