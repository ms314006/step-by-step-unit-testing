const fetch = require('node-fetch');
const gerUser = require('../user.js');

jest.mock('node-fetch');

test('gerUser 回傳資料 status 為 success 的話會得到使用者名稱', () => {
  const expected = { userName: '神 Q 超人', };

  fetch.mockResolvedValue({ status: 'success', userName: '神 Q 超人', });

  return gerUser().then((resp) => {
    expect(resp).toEqual(expected);
  });
})


test('gerUser 回傳資料 status 為 error 的話會得到無名氏', () => {
  fetch.mockResolvedValue(
    { status: 'error', userName: '無名氏', }
  );
  const expected = { userName: '無名氏', };

  return gerUser().then((resp) => {
    expect(resp).toEqual(expected);
  });
});

/*
test('gerUser 回傳錯誤格式資料會得到查無此人', () => {
  fetch.mockResolvedValue({  });
  const expected = { userName: '查無此人', };

  return gerUser().then((resp) => {
    expect(resp).toEqual(expected);
  });
});
*/
