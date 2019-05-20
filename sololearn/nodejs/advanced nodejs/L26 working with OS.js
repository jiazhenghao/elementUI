const os = require('os');
console.log(os.freemem());//822280192
console.log(os.cpus().length);//8
console.log(os.type());//Darwin
console.log(os.release());//18.2.0
console.log(os.userInfo());
// {
//     uid: 501,
//     gid: 20,
//     username: 'jiazhenghao',
//     homedir: '/Users/jiazhenghao',
//     shell: '/bin/bash'
//   }

console.log(os.constants.signals);
/**
[Object: null prototype] {
  SIGHUP: 1,
  SIGINT: 2,
  SIGQUIT: 3,
  SIGILL: 4,
  SIGTRAP: 5,
  SIGABRT: 6,
  SIGIOT: 6,
  SIGBUS: 10,
  SIGFPE: 8,
  SIGKILL: 9,
  SIGUSR1: 30,
  SIGSEGV: 11,
  SIGUSR2: 31,
  SIGPIPE: 13,
  SIGALRM: 14,
  SIGTERM: 15,
  SIGCHLD: 20,
  SIGCONT: 19,
  SIGSTOP: 17,
  SIGTSTP: 18,
  SIGTTIN: 21,
  SIGTTOU: 22,
  SIGURG: 16,
  SIGXCPU: 24,
  SIGXFSZ: 25,
  SIGVTALRM: 26,
  SIGPROF: 27,
  SIGWINCH: 28,
  SIGIO: 23,
  SIGINFO: 29,
  SIGSYS: 12
}
 */