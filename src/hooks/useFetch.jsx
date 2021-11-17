import { useEffect, useState } from "react";

/**
 *
 * @param {function} callback callback to fetch.
 * @returns loading status, if error occurred, and json data from the fetch.
 */
export function useFetch(callback) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrorOccurred, setHasErrorOccurred] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function effect() {
      setIsLoading(true);
      setHasErrorOccurred(false);

      try {
        const fetchedData = await callback();
        setData(fetchedData);
      } catch (err) {
        console.log(err);
        setHasErrorOccurred(true);
      }

      setIsLoading(false);
    }
    effect();
  }, [callback]);

  return [isLoading, hasErrorOccurred, data];
}
