export default function Frame(props: FrameProps) {
  return (
    <div
      className="top-0 absolute w-[22px] h-[22px] left-[calc(50%_-_11px_+_0.5px)]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 17.594 8.375 H 9.719 C 8.752 8.375 7.969 9.159 7.969 10.125 V 18 C 7.969 18.967 8.752 19.75 9.719 19.75 H 17.594 C 18.56 19.75 19.344 18.967 19.344 18 V 10.125 C 19.344 9.159 18.56 8.375 17.594 8.375 Z"
          stroke="#F6F6F9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        <path
          d="M 5.469 14.625 H 4.594 C 4.13 14.625 3.685 14.441 3.356 14.112 C 3.028 13.784 2.844 13.339 2.844 12.875 V 5 C 2.844 4.536 3.028 4.091 3.356 3.763 C 3.685 3.434 4.13 3.25 4.594 3.25 H 12.469 C 12.933 3.25 13.378 3.434 13.706 3.763 C 14.034 4.091 14.219 4.536 14.219 5 V 5.875"
          stroke="#F6F6F9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
      </svg>
    </div>
  );
}

Frame.defaultProps = {};

interface FrameProps {}

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
