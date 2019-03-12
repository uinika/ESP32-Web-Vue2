import Http from "../common/scripts/http.js";
import Encrypt from "../common/scripts/encrypt.js";
export default {
  data() {
    return {
      cases: [
        {
          name: "Case A",
          code: "（Demo）0000001",
          date: "2017/07/21 周五",
          people: "some peoples"
        },
        {
          name: "Case B",
          code: "（Demo）0000002",
          date: "2017/07/21 周五",
          people: "some peoples"
        },
        {
          name: "Case C",
          code: "（Demo）0000003",
          date: "2017/07/21 周五",
          people: "some peoples"
        },
        {
          name: "Case D",
          code: "（Demo）0000004",
          date: "2017/07/21 周五",
          people: "some peoples"
        }
      ],
      options: [
        {
          value: "yes",
          label: "Finished"
        },
        {
          value: "no",
          label: "Unfinished"
        }
      ],
      value: "yes"
    };
  },
  methods: {
    onSearch() {
      console.log("on Search!");
    }
  }
};
