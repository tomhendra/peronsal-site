function SupabaseIcon({size = 44, ...rest}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M25.2085 43.269C24.0765 44.6845 21.7815 43.9089 21.7542 42.1015L21.3554 15.6654H39.2553C42.4977 15.6654 44.3059 19.3841 42.2899 21.9056L25.2085 43.269Z"
        fill="url(#paint0_linear_410_18)"
      />
      <path
        d="M25.2085 43.269C24.0765 44.6845 21.7815 43.9089 21.7542 42.1015L21.3554 15.6654H39.2553C42.4977 15.6654 44.3059 19.3841 42.2899 21.9056L25.2085 43.269Z"
        fill="url(#paint1_linear_410_18)"
        fill-opacity="0.2"
      />
      <path
        d="M17.9287 0.731092C19.0606 -0.684591 21.3556 0.0911022 21.3829 1.89857L21.5577 28.3346H3.88182C0.639572 28.3346 -1.16869 24.6159 0.847437 22.0943L17.9287 0.731092Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id="paint0_linear_410_18"
          x1="21.3554"
          y1="21.5269"
          x2="37.2308"
          y2="28.2317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#249361" />
          <stop offset="1" stop-color="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_410_18"
          x1="14.3022"
          y1="11.937"
          x2="21.479"
          y2="25.5412"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export {SupabaseIcon as default};
