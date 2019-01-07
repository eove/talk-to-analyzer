/* eslint-disable max-len */

const HELP_MSG =
  '\
  measurements:\n\
    run READ_MEASUREMENT \'{"name": "humidity"}\'\n\
  settings:\n\
    run READ_SETTING \'{"name": "gazType"}\'\n\
  \n\
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
