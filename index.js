const axios = require("axios");

const url = "https://getliner.com/platform/copilot/v3/answer";
const data = {
  spaceId: 18844864,
  threadId: "59358101",
  userMessageId: 75337640,
  userId: 9084589,
  experimentId: 54,
  query: "解决以下几何问题：底面边长为 4 的正四棱锥被平行于其底面的平面所截，截去一个底面边长为 2 ，高为 3 的正四棱锥，所得棱台的体积为多少？",
  agentId: "liner-pro",
  platform: "web",
  regenerate: false,
  showReferenceChunks: false,
  modelType: "gpt-4",
};
const headers = {
  Accept: "*/*",
  "Accept-Language": "z",
  "Content-Type": "application/json",
  "Sec-CH-UA":
    '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
  "Sec-CH-UA-Mobile": "?0",
  "Sec-CH-UA-Platform": '"Windows"',
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  Cookie:
    "_fbp=fb.1.1712909569559.1792508461; __stripe_mid=2ad77e04-c515-4750-b428-8ba566afbfc418e518; __stripe_sid=c1f7b5a2-366f-43e0-a386-00403d4c6db5abb0d1; connect.sid=s%3A40aKivsdl1eklOWmbrePb5pjW2DWXx-W.AN9fGyN2s5n3woFcA5ZHIWkl0bqnWwSzwJ3uZSnEWKU; amp_ac9120=vpq2AYNOTNMSD_S2zRDNa8.OTA4NDU4OQ==..1hr8mffk2.1hr8ni66r.c8.13.db; _dd_s=rum=0&expire=1712912258353",
  Referer:
    "https://getliner.com/workspace/s/18844864?tempThreadId=t_60a29889-28cd-42c3-8351-f3168255d869",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

axios
  .post(url, data, { headers })
  .then((response) => {
    let data_old = response.data.toString();
    data_old = data_old.replace(/200}/g, "200},");
    json_fix = data_old.replace(/,\s*$/, "");
    json_fix = json_fix.replace("{", "[{");
    json_fix = json_fix.replace(/}\s*$/, "}]");
    // console.log(json_fix);
    let data = JSON.parse(json_fix);
    // 处理响应数据
    console.log(data[data.length - 1].answer);
    // console.log(data);
  })
  .catch((error) => {
    console.error("请求失败:", error); // 处理请求错误
  });
