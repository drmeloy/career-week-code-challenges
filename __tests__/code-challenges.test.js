const dateAdder = require('../lib/utils/date-adder');
const { transactions, transactionsAdder } = require('../lib/utils/transactions');

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

describe('transactinons function', () => {
  it('outputs the revenue from each day', () => {
    expect(transactionsAdder(transactions)).toEqual({ 
      'Thu Jul 18 2019': 25,
      'Thu Jul 04 2019': 47,
      'Tue Jul 09 2019': 18,
      'Mon Jul 22 2019': 15,
      'Mon Jul 29 2019': 19,
      'Fri Jul 12 2019': 8,
      'Sat Jul 27 2019': 14,
      'Thu Jul 11 2019': 10,
      'Fri Jul 19 2019': 33,
      'Fri Jul 26 2019': 55,
      'Mon Jul 08 2019': 29,
      'Sun Jul 07 2019': 18,
      'Sun Jul 21 2019': 16,
      'Sun Jul 14 2019': 11,
      'Wed Jul 03 2019': 24,
      'Wed Jul 24 2019': 6,
      'Tue Jul 30 2019': 7,
      'Wed Jul 10 2019': 12,
      'Fri Jul 05 2019': 37,
      'Thu Jul 25 2019': 3,
      'Mon Jul 01 2019': 21,
      'Sun Jul 28 2019': 16,
      'Sat Jul 13 2019': 35,
      'Sat Jul 06 2019': 16,
      'Wed Jul 17 2019': 18,
      'Mon Jul 15 2019': 18,
      'Tue Jul 02 2019': 11,
      'Tue Jul 16 2019': 9 
    });
  });
});
