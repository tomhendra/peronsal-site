function RemixIcon({size = 44, ...rest}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M44 0H0V44H44V0Z" fill="#212121" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.3371 29.0272C32.5711 32.033 32.5711 33.442 32.5711 34.98H25.6166C25.6166 34.645 25.6226 34.3385 25.6286 34.0278C25.6474 33.0618 25.6671 32.0544 25.5105 30.02C25.3037 27.0417 24.0211 26.3799 21.6629 26.3799H19.5736H10.725V20.961H21.9939C24.9727 20.961 26.4621 20.0548 26.4621 17.6556C26.4621 15.546 24.9727 14.2675 21.9939 14.2675H10.725V8.965H23.2351C29.9788 8.965 33.33 12.1502 33.33 17.2381C33.33 21.0437 30.9718 23.5256 27.7861 23.9393C30.4753 24.477 32.0475 26.0076 32.3371 29.0272Z"
        fill="white"
      />
      <path
        d="M10.725 34.98V30.9404H18.0783C19.3066 30.9404 19.5733 31.8514 19.5733 32.3947V34.98H10.725Z"
        fill="white"
      />
      <path
        d="M10.6975 34.98V35.0075H10.725H19.5733H19.6008V34.98V32.3947C19.6008 32.1193 19.5334 31.7493 19.3085 31.4474C19.0825 31.144 18.7002 30.9129 18.0783 30.9129H10.725H10.6975V30.9404V34.98Z"
        stroke="white"
        stroke-opacity="0.8"
      />
    </svg>
  );
}

export {RemixIcon as default};