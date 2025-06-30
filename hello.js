const { execFile } = require('child_process');

// 要执行的 .exe 文件路径
const exePath = './hello.exe';
// 传递给 .exe 的参数（可选）
const args = ['--option1', 'value1', '--option2'];

// 执行 .exe 文件
const child = execFile(exePath, args, (error, stdout, stderr) => {
  if (error) {
    console.error(`failed: ${error}`);
    return;
  }
  console.log(`${stdout}`);
});

// 监听子进程事件
child.on('exit', (code) => {
    
});