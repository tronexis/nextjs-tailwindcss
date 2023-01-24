export default function Vector3(props: Vector3Props) {
  return (
    <div className="inset-x-0 top-0 absolute bottom-[-1.95%]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 96 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 92.585 28.722 H 3.363 C 2.471 28.72 1.617 28.364 0.986 27.734 C 0.356 27.103 0.001 26.248 0 25.356 L 0 3.638 C 0.001 2.747 0.356 1.892 0.987 1.262 C 1.617 0.632 2.472 0.278 3.363 0.277 L 92.585 0.277 C 94.438 0.277 96 1.785 96 3.638 V 25.356 C 96 27.209 94.438 28.722 92.585 28.722 Z"
          fill="#A6A6A6"
         />
      </svg>
    </div>
  );
}

Vector3.defaultProps = {};

interface Vector3Props {}

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
