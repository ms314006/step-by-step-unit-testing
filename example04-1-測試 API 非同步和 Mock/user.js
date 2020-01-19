const fetch = require('node-fetch');

const getUser = () => (
  fetch('http://httpbin.org/get').then((userResponse) => {
    const { status, userName } = userResponse;
    if (status === 'success') {
      return { userName,  };
    } else {
      return { userName: '無名氏', };
    };
  }).catch(
    () => ({ userName: '查無此人', })
  )
);

module.exports = getUser;