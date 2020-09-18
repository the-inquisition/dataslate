import React, { useState, useEffect } from "react";
import { DataContent } from "components/contentComponents/dataContent/dataContent";

type StateType = {
  loading: boolean;
  data: any;
};

const useDataContent = (userId: string, dataId: string) => {
  const [state, setState] = useState<StateType>({ data: {}, loading: true });
  useEffect(() => {
    (async () => {
      console.log("GETTING CONTENT");
      if (userId === "anders" && dataId === "23040") {
        let dataContent = {
          title: "Imperial Requisitions Office",
          text: `The Imperial Requisitions Office or IRO for short is an official agency of the Officio Administratum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat quis eros eu pharetra. Vivamus non dui porttitor, sagittis nibh a, lobortis metus. Cras lectus quam, sagittis quis mauris vitae, feugiat fringilla purus. Phasellus urna diam, tincidunt id purus in, bibendum porttitor lectus. Pellentesque dictum vitae nulla sed lobortis. Nullam a laoreet quam. Praesent hendrerit nunc diam, a varius nunc pulvinar et. Integer sollicitudin dui sit amet nunc varius dignissim.
              
              Praesent accumsan risus ac feugiat interdum. Sed nibh quam, suscipit quis nibh ac, ullamcorper facilisis lacus. Nullam blandit blandit magna, et pellentesque leo tincidunt ut. Fusce eu fringilla mi. Aliquam nisi lectus, sodales quis maximus sed, ultrices aliquam augue. Suspendisse euismod nisi ac facilisis gravida. Cras auctor elementum lectus ut placerat. Nullam eleifend et purus in viverra. Donec auctor varius diam id facilisis. Vivamus dignissim metus nulla, non pellentesque nisl vulputate rutrum.
              
              Nullam ex mauris, varius vel felis et, laoreet fermentum nibh. In hac habitasse platea dictumst. Donec et lectus orci. Vivamus ut facilisis odio, et commodo risus. Praesent venenatis tellus dolor, vel aliquam libero elementum id. Praesent eleifend ex vitae blandit rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque a suscipit ligula. Vestibulum et dolor dolor. Vestibulum non augue nec urna suscipit consectetur. Mauris ultricies, leo at faucibus consectetur, lectus quam tristique sem, quis mattis lorem mauris at ligula. Aenean suscipit sem nunc, vitae hendrerit massa pellentesque eget. Cras consequat leo sit amet nisl aliquet vulputate. Sed eget ex vitae augue fringilla ultrices. Nulla facilisi.`,
        };
        setState({ data: dataContent, loading: false });
      } else {
        let dataContent = {
          title: "",
          text: "",
        };
        setState({ data: dataContent, loading: false });
      }
    })();
  }, [userId, dataId]);

  return { data: state.data, loading: state.loading };
};

export { useDataContent };
