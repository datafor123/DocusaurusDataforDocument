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

travel(
	"./build",
	function(item, deep, trace, src) {
		const ext = path.extname(item);
		return ext === ".html";
	},
	function(item, deep, trace, src, stats) {
		const content = fs.readFileSync(src);
		if (String(content).match(/\/static\/img\//g)) {
			fs.writeFileSync(
				src,
				String(content).replace(/\/static\/img\//g, "/img/")
			);
			console.log(
				">>to patch url:",
				src,
				";",
				String(fs.readFileSync(src)).match(/\/static\/img\//g)
			);
		}
	}
);
