import React, { useState, useEffect } from "react";

type StateType = {
  loading: boolean;
  data: any[];
};

const useSideBarLinks = () => {
  const [state, setState] = useState<StateType>({ data: [], loading: true });
  useEffect(() => {
    (async () => {
      let linkStrings: any[] = [
        { text: "Rendezvous", path: "/" },
        { text: "Content", path: "/game/game1/user/anders/dataContent/23040" },
        { text: "Subdominal Implants", path: "/game/game1/user/hakon/dataContent/353546" },
        { text: "How to: Purge the unclean", path: "/purging" },
        { text: "Purity and Resolve", path: "/purity" },
        { text: "Cants and Chants for the holy", path: "/holymoly" },
        {
          text: "The Lord's Spirit: A definitive guide to amasec",
          path: "/amasecGuide",
        },
      ];
      setState({ data: linkStrings, loading: false });
    })();
  }, []);

  return { data: state.data, loading: state.loading };
};

export { useSideBarLinks };
