import Group15 from "../assets/Group15";

export default function SocialMediaInstagram(props: SocialMediaInstagramProps) {
  return (
    <div className="relative w-[35px] h-[35px]">
      <div className="inset-0 absolute" />
      <Group15 />
    </div>
  );
}

SocialMediaInstagram.defaultProps = {};

interface SocialMediaInstagramProps {}

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
