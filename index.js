const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  // 获取 action.yml 中 input 类 定义的变量
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();

  // 输出 action.yml 中 output 类 定义的变量
  core.setOutput("time", time);


  // Get the JSON webhook payload for the event that triggered the workflow
  // 触发工作流完成钩子
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message); // 报错
}