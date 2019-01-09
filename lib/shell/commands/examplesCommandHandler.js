/* eslint-disable max-len */

const HELP_MSG =
  '\
  measurements:\n\
    run READ_MEASUREMENT \'{"name": "humidity"}\'\n\
  settings:\n\
    run READ_SETTING \'{"name": "gazType"}\'\n\
    run WRITE_SETTING \'{"name": "gazType", "value": "Air"}\'\n\
  system:\n\
    run READ_SYSTEM_INFOS\n\
  \n';

function create() {
  return {
    handle: (run, callback) => {
      console.log(HELP_MSG);
      callback();
    }
  };
}

module.exports = create;
