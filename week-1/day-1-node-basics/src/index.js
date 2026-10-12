import os from 'node:os';

const name = process.argv[2] || 'there';
const appEnv = process.env.APP_ENV || 'development';

console.log(`Hello ${name}, this is running on Node ${process.version}`);
console.log('Environment:', appEnv);
console.log('OS:', os.platform(), os.arch());
console.log('Free memory (MB):', Math.round(os.freemem() / 1024 / 1024));
console.log('typeOf function test',typeof null,typeof undefined, typeof null === typeof undefined);


// window/document only exist in the browser
console.log('window available?', typeof window !== 'undefined');
console.log('globalThis === global?', globalThis === global);
