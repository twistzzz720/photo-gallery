// 启动 localtunnel 并保持运行
const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 3000 });

  console.log('');
  console.log('═══════════════════════════════════════════');
  console.log('  🌐  公网访问地址');
  console.log('═══════════════════════════════════════════');
  console.log(`  ${tunnel.url}`);
  console.log('═══════════════════════════════════════════');
  console.log('');
  console.log('  提示：首次访问需点击 "Click to Continue"');
  console.log('  按 Ctrl+C 停止');
  console.log('');

  tunnel.on('close', () => {
    console.log('隧道已关闭');
  });
})();
