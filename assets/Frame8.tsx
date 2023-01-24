export default function Frame8(props: Frame8Props) {
  return (
    <div
      className="w-9 top-0 absolute h-[30px] left-[calc(50%_-_18px_+_0.5px)]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 36 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 11.749 3.798 C 7.377 3.798 3.833 7.342 3.833 11.714 C 3.833 16.087 7.377 19.631 11.749 19.631 H 30.094 L 26.463 16.001 C 25.845 15.382 25.845 14.38 26.463 13.761 C 27.081 13.143 28.084 13.143 28.702 13.761 L 35.036 20.095 C 35.654 20.713 35.654 21.716 35.036 22.334 L 28.702 28.667 C 28.084 29.286 27.081 29.286 26.463 28.667 C 25.845 28.049 25.845 27.046 26.463 26.428 L 30.094 22.798 H 11.749 C 5.628 22.798 0.666 17.835 0.666 11.714 C 0.666 5.593 5.628 0.631 11.749 0.631 C 17.871 0.631 22.833 5.593 22.833 11.714 V 14.881 C 22.833 15.755 22.124 16.464 21.249 16.464 C 20.375 16.464 19.666 15.755 19.666 14.881 V 11.714 C 19.666 7.342 16.122 3.798 11.749 3.798 V 3.798 Z"
          fill="#39C200"
         />
      </svg>
    </div>
  );
}

Frame8.defaultProps = {};

interface Frame8Props {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
