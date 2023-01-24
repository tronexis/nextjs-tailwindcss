import Vector2 from "../assets/Vector2";

export default function SocialMediaGithub(props: SocialMediaGithubProps) {
  return (
    <div className="relative w-[35px] h-[35px]">
      <div>
        <div className="absolute left-[-0.14%] right-[0.14%] top-[0.05%] bottom-[-0.05%] w-[35.00008773803711px] h-[35.00008773803711px]" />
      </div>
      <Vector2 />
    </div>
  );
}

SocialMediaGithub.defaultProps = {};

interface SocialMediaGithubProps {}

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
