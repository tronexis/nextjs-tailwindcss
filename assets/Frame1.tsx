export default function Frame1(props: Frame1Props) {
  return (
    <div
      className="top-0 absolute w-[26px] h-[26px] left-[calc(50%_-_13px_+_0px)]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 0 12.877 C 0 5.765 5.765 0 12.877 0 C 19.986 0.008 25.746 5.768 25.754 12.877 C 25.754 19.989 19.989 25.754 12.877 25.754 C 5.765 25.754 0 19.989 0 12.877 Z M 2.278 17.263 C 4.054 21.55 8.237 24.345 12.877 24.345 V 24.349 C 19.21 24.343 24.343 19.21 24.349 12.877 C 24.35 8.237 21.556 4.053 17.27 2.276 C 12.983 0.499 8.048 1.48 4.767 4.761 C 1.485 8.041 0.503 12.976 2.278 17.263 Z"
          fill="#39C200"
         />
        <path
          d="M 12.174 12.174 H 7.08 V 13.579 H 12.174 H 13.58 H 18.674 V 12.174 H 13.58 H 12.174 Z"
          fill="#39C200"
         />
      </svg>
    </div>
  );
}

Frame1.defaultProps = {};

interface Frame1Props {}

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
