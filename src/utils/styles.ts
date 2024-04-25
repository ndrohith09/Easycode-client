// Styles for the tab line
export const TabLineStyle = "flex items-start border-b border-slate-200";

// Styles for the base body component
export const ContentBodyStyle = "w-full bg-white pt-4";
export const ContentInnerBodyStyle = "container mx-auto";

export const ButtonOutlineStyle =
  "rounded border hover:bg-primary px-4  py-1 text-sm font-normal hover:text-white text-primary border-primary";
export const ButtonStyle = (color: string): string => {
  return `rounded border hover:bg-${color} px-4  py-1 text-sm font-normal hover:text-white text-${color} border-${color}`;
};

// Styles for the tab line
export const FormStyle = "font-bold text-dark-xl";

export const InputStyle =
  "rounded bg-white p-1.5 ps-2.5 text-sm text-gray-900 border border-gray-medium";

interface ModuleUserStyle {
  color?: string;
  border?: string;
}

export const moduleUserStyle = (style: ModuleUserStyle = {}): string => {
  // export const moduleUserStyle = (color?: string, border?: string): string => {
  const { color, border } = style;
  return `${color ? `${color}` : `gray-light`} ${border ? `${border}` : `border-gray-light`} rounded-full border px-2 py-1 text-xs font-normal `;
};

export const DropDownMenuStyle = "bg-bgColor text-gray-900";

export const StepperStyle =
  "flex w-full items-center text-center text-sm font-medium text-tertiary sm:text-base";

export const TextLinkStyle = "text-sm font-bold cursor-pointer text-primary";

export const TimelineTextStyle = "my-5 text-base font-bold text-dark-xl";
export const TimelineIconStyle = "w-7 h-7";

export const IntegrationConnectBtnStyle =
  "rounded border bg-green px-4  py-1  text-sm font-normal text-white";

export const ApiCreateFormRequestBtn = "mr-2  h-4 w-4";
export const ApiCreateRadioBtn = "h-auto w-96";

export const TellUsMoreInputStyle =
  "w-full rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500";

export const SideOverButton = `rounded border text-white px-4 bg-primary py-1 text-sm font-normal border-primary`;
