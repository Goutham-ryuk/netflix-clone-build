export const truncateDescription = (
  descriptionString: string | undefined,
  maxLength: number
) => {
  if (!descriptionString) return ""; // Return empty string if descriptionString is undefined or null
  return descriptionString.length > maxLength
    ? `${descriptionString.substring(0, maxLength - 1)}...`
    : descriptionString;
};
