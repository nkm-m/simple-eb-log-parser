const fs = require("fs").promises;
const { red } = require("console-log-colors");

const files = [
  "cfn-hup.log",
  "cfn-init-cmd.log",
  "cfn-init.log",
  "cfn-wire.log",
  "cloud-init-output.log",
  "cloud-init.log",
  "eb-cfn-init-call.log",
  "eb-cfn-init.log",
  "eb-engine.log",
  "eb-hooks.log",
  "web.stdout.log",
  "healthd/daemon.log",
  "nginx/access.log",
  "nginx/error.log",
  "messages",
  "cron",
  // "" add your custom logfile name
];

const main = async () => {
  for (let i = 0; i < files.length; i++) {
    console.log(`[${files[i]}]`);
    const buffer = await fs.readFile(files[i]);
    const logs = buffer.toString().split("\n");

    for (let i = 0; i < logs.length; i++) {
      if (
        logs[i].includes("ERROR") ||
        logs[i].includes("error") ||
        logs[i].includes("Error")
      ) {
        console.log(red(logs[i]));
      }
    }
    console.log("\n");
  }
};
main();
