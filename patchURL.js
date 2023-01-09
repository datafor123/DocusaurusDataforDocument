const fs = require("fs");
const path = require("path");
const travel = function(_path, _check, _work) {
  let myself = this;
  let trace = [];
  let travel = async function(path, check, work, deep, trace) {
    let nodes = fs.readdirSync(path);
    for (var i in nodes) {
      let node = nodes[i];
      let src = path + "/" + node;
      let stats = fs.statSync(src);
      let _t = JSON.parse(JSON.stringify(trace));
      _t.push(node);
      if (await check(node, deep, _t, src)) {
        await work(node, deep, _t, src, stats);
      }
      if (stats.isDirectory()) {
        deep++;
        trace.push(node);
        await travel(src, check, work, deep, trace);
        trace.pop();
        deep--;
      }
    }
  };
  travel(_path, _check, _work, 0, trace);
};
const baseURL = "/docs/";
travel(
  "./build",
  function(item, deep, trace, src) {
    const ext = path.extname(item);
    return ext === ".html" || ext === ".js";
  },
  function(item, deep, trace, src, stats) {
    const content = fs.readFileSync(src);
    //const reg = new RegExp('src="../../static/img/', "ig");
    const reg0 = new RegExp("../static/img/", "ig");
    const reg = new RegExp("../../static/img/", "ig");
    const reg3 = new RegExp("../../../static/img/", "ig");
    const reg4 = new RegExp("../../../../static/img/", "ig");
    const reg5 = new RegExp("../../../../../static/img/", "ig");
    const listArray = [reg0, reg, reg3, reg4, reg5];
    if (String(content).match(new RegExp("/static/img/en", "ig"))) {
      listArray.reverse().forEach(function(reg) {
        if (String(content).match(reg)) {
          fs.writeFileSync(src, String(content).replace(reg, baseURL + "img/"));
        }
      });
      // if (String(content).match(reg5)) {
      //   fs.writeFileSync(src, String(content).replace(reg5, baseURL + "img/"));
      // }
      // if (String(content).match(reg4)) {
      //   fs.writeFileSync(src, String(content).replace(reg4, baseURL + "img/"));
      // }
      // if (String(content).match(reg3)) {
      //   fs.writeFileSync(src, String(content).replace(reg3, baseURL + "img/"));
      // }
      // if (String(content).match(reg)) {
      //   fs.writeFileSync(src, String(content).replace(reg, baseURL + "img/"));
      // }
      // if (String(content).match(reg0)) {
      //   fs.writeFileSync(src, String(content).replace(reg0, baseURL + "img/"));
      // }
    } else {
      listArray.forEach(function(reg) {
        if (String(content).match(reg)) {
          fs.writeFileSync(src, String(content).replace(reg, baseURL + "img/"));
        }
      });
    }
  }
);
