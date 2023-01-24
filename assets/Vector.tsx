export default function Vector(props: VectorProps) {
  return (
    <div
      className="absolute left-[22%] right-[18%] top-[30%] bottom-[27.14%]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 18.47 1.198 C 19.33 1.43 20.006 2.108 20.235 2.967 C 20.651 4.526 20.651 7.781 20.651 7.781 C 20.651 7.781 20.651 11.036 20.235 12.595 C 20.003 13.458 19.327 14.135 18.47 14.365 C 16.915 14.781 10.676 14.781 10.676 14.781 C 10.676 14.781 4.439 14.781 2.881 14.365 C 2.021 14.132 1.345 13.455 1.116 12.595 C 0.7 11.036 0.7 7.781 0.7 7.781 C 0.7 7.781 0.7 4.526 1.116 2.967 C 1.348 2.105 2.024 1.427 2.881 1.198 C 4.439 0.781 10.676 0.781 10.676 0.781 C 10.676 0.781 16.915 0.781 18.47 1.198 Z M 13.865 7.781 L 8.682 10.782 V 4.781 L 13.865 7.781 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

Vector.defaultProps = {};

interface VectorProps {}

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
