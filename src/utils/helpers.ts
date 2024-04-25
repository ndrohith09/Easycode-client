import { useLocation, useParams, useSearchParams } from "react-router-dom";

export const phoneLengthCheck = (
  object: React.ChangeEvent<HTMLInputElement>,
) => {
  const maxLength = 10;
  if (object.target.value.length > maxLength) {
    object.target.value = object.target.value.slice(0, maxLength);
  }
};

export const URLOpen = (url: string) => {
  console.log("url", url);
  return window.open(url, "_blank");
};

export function classNames<T extends string[]>(...classes: T): string {
  return classes.filter(Boolean).join(" ");
}

export const IsStringInPath = (desiredStr: string): boolean => {
  const location = useLocation();
  return location.pathname.includes(desiredStr);
};

export const IsApiIdInPath = (apiId: string): boolean => {
  const apiIdFromPath = useLocation().pathname.split("apiId/")[1].split("/")[0]; // Extracting the id from the path
  return apiId === apiIdFromPath;
};

export const toCapitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatEnumValue = (enumValue: string): string => {
  if (!enumValue) return "";
  return enumValue
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
 