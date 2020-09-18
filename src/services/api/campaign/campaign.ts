import { get } from "../base";

const Campaign = {
  getCampaign: async (ownerName: string, campaignName: string) => {
    const url = `/${ownerName}/${campaignName}`;
    let response = await get({ url, retryCount: 3, customError: "ERROR " });
    console.log(response);
  },
};

export default Campaign;
