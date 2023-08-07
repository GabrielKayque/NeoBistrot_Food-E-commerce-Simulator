import { useState, useEffect } from "react";
import api from "./api";
import { SnacksProps } from "./interfaces";

export default function useSnacks(snacktype: string) {

  const [snacks, setSnacks] = useState<SnacksProps[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const snacksRequest = await api.get(`/${snacktype}`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setSnacks(snacksRequest.data);
    })();
  }, [snacktype]);

  return snacks
}
