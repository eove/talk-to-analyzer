/* eslint-disable max-len */

const HELP_MSG = '\
  measurements:\n\
    run GET_O2_MEASUREMENT\n\
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
