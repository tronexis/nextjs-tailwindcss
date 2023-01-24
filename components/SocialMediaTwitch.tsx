import Group16 from "../assets/Group16";

export default function SocialMediaTwitch(props: SocialMediaTwitchProps) {
  return (
    <div className="relative w-[35px] h-[35px]">
      <div className="left-0 top-0 absolute right-[0.48%] bottom-[0.48%]" />
      <Group16 />
    </div>
  );
}

SocialMediaTwitch.defaultProps = {};

interface SocialMediaTwitchProps {}

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
