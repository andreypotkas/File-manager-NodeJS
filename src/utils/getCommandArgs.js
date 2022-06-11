export function getCommandArgs(cmd) {
  const msgToString = cmd.toString().trim();
  const inputArgsArray = msgToString.split(' ');
  const command = inputArgsArray[0];
  const commandArg = inputArgsArray[1];
  return {
    cmd: command,
    arg: commandArg,
  };
}
