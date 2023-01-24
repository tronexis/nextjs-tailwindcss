export default function Group(props: GroupProps) {
  return (
    <div>
      <div
        className="absolute left-[29%] right-[28.14%] top-[30.23%] bottom-[26.91%]"
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 3.474 14.874 V 5.419 H 0.335 V 14.874 H 3.475 H 3.474 Z M 1.905 4.128 C 3 4.128 3.681 3.402 3.681 2.495 C 3.661 1.567 3 0.861 1.926 0.861 C 0.851 0.861 0.15 1.567 0.15 2.495 C 0.15 3.402 0.831 4.128 1.885 4.128 H 1.905 L 1.905 4.128 Z M 5.212 14.874 H 8.352 V 9.594 C 8.352 9.312 8.372 9.029 8.455 8.828 C 8.682 8.263 9.199 7.678 10.066 7.678 C 11.202 7.678 11.657 8.545 11.657 9.816 V 14.874 H 14.796 V 9.453 C 14.796 6.549 13.248 5.197 11.182 5.197 C 9.488 5.197 8.744 6.145 8.331 6.79 H 8.352 V 5.419 H 5.213 C 5.254 6.306 5.212 14.874 5.212 14.874 L 5.212 14.874 Z"
            fill="white"
           />
        </svg>
      </div>
    </div>
  );
}

Group.defaultProps = {};

interface GroupProps {}

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
