import { useState, useEffect } from "react";
import api from "../api";
import { SnacksProps } from "../interfaces";

export default function useSnacks(snacktype: string) {

  const [snacks, setSnacks] = useState<SnacksProps[]>([]);

  useEffect(() => {
    void (async () => {
      const snacksRequest = await api.get(`/${snacktype}`);
      setSnacks(snacksRequest.data as SnacksProps[]);
    })();
  }, [snacktype]);

  return snacks
}
