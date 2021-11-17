import * as dayjs from "dayjs";
import * as advancedFormat from "dayjs/plugin/advancedFormat";

// to use Day of Month with ordinal
dayjs.extend(advancedFormat);

/**
 *
 * @param {string} dateStr date to be formatted
 * @returns date in the format "Jan 3rd, 2013"
 */
export const formatDate = (dateStr) => {
  return dayjs(dateStr).format("MMM Do, YYYY");
};
