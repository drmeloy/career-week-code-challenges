const dateAdder = require('../lib/utils/date-adder');

describe('dateAdder function', () => {
  it('adds a specified "diff" to the provided date', () => {
    const testDate = new Date(1988, 8, 2, 0, 0, 0);

    expect(testDate.toGMTString()).toEqual('Fri, 02 Sep 1988 06:00:00 GMT');
    expect(dateAdder(testDate, '1d').toGMTString()).toEqual('Sat, 03 Sep 1988 06:00:00 GMT');
    expect(dateAdder(testDate, '10d').toGMTString()).toEqual('Mon, 12 Sep 1988 06:00:00 GMT');
    expect(dateAdder(testDate, '30d').toGMTString()).toEqual('Sun, 02 Oct 1988 06:00:00 GMT');
    expect(dateAdder(testDate, '4w').toGMTString()).toEqual('Fri, 30 Sep 1988 06:00:00 GMT');
    expect(dateAdder(testDate, '1w').toGMTString()).toEqual('Fri, 09 Sep 1988 06:00:00 GMT');
    expect(dateAdder(testDate, '6w').toGMTString()).toEqual('Fri, 14 Oct 1988 06:00:00 GMT');
    expect(dateAdder(testDate, '1M').toGMTString()).toEqual('Sun, 02 Oct 1988 06:00:00 GMT');
    expect(dateAdder(testDate, '3M').toGMTString()).toEqual('Fri, 02 Dec 1988 07:00:00 GMT');
    expect(dateAdder(testDate, '6M').toGMTString()).toEqual('Thu, 02 Mar 1989 07:00:00 GMT');
    expect(dateAdder(testDate, '1y').toGMTString()).toEqual('Sat, 02 Sep 1989 06:00:00 GMT');
    expect(dateAdder(testDate, '2y').toGMTString()).toEqual('Sun, 02 Sep 1990 06:00:00 GMT');
    expect(dateAdder(testDate, '1h').toGMTString()).toEqual('Fri, 02 Sep 1988 07:00:00 GMT');
    expect(dateAdder(testDate, '10h').toGMTString()).toEqual('Fri, 02 Sep 1988 16:00:00 GMT');
    expect(dateAdder(testDate, '24h').toGMTString()).toEqual('Sat, 03 Sep 1988 06:00:00 GMT');
    expect(dateAdder(testDate, '1m').toGMTString()).toEqual('Fri, 02 Sep 1988 06:01:00 GMT');
    expect(dateAdder(testDate, '10m').toGMTString()).toEqual('Fri, 02 Sep 1988 06:10:00 GMT');
    expect(dateAdder(testDate, '60m').toGMTString()).toEqual('Fri, 02 Sep 1988 07:00:00 GMT');
    expect(dateAdder(testDate, '1440m').toGMTString()).toEqual('Sat, 03 Sep 1988 06:00:00 GMT');
    expect(dateAdder(testDate, '1s').toGMTString()).toEqual('Fri, 02 Sep 1988 06:00:01 GMT');
    expect(dateAdder(testDate, '10s').toGMTString()).toEqual('Fri, 02 Sep 1988 06:00:10 GMT');
    expect(dateAdder(testDate, '60s').toGMTString()).toEqual('Fri, 02 Sep 1988 06:01:00 GMT');
    expect(dateAdder(testDate, '3600s').toGMTString()).toEqual('Fri, 02 Sep 1988 07:00:00 GMT');
    expect(dateAdder(testDate, '86400s').toGMTString()).toEqual('Sat, 03 Sep 1988 06:00:00 GMT');
  });
});
