export default (queryString: any) => {
  const result = {};

  const pairs = (queryString[0] === '?'
    ? queryString.substr(1)
    : queryString
  ).split('&');

  for (let i = 0; i < pairs.length; i++) {
    const keyArr = pairs[i].match(/\w+(?==)/i) || [];
    const valueArr = pairs[i].match(/=.+/i) || [];
    if (keyArr[0]) {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      result[decodeURIComponent(keyArr[0])] = decodeURIComponent(
        valueArr[0].substr(1)
      );
    }
  }
  return result;
};
