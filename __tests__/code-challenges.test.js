const dateAdder = require('../lib/utils/date-adder');

describe('dateAdder function', () => {
  it('adds a specified "diff" to the provided date', () => {
    const testDate = new Date(1988, 8, 2);

    expect(testDate).toEqual('Fri Sep 02 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '1d')).toEqual('Sat Sep 03 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '10d')).toEqual('Mon Sep 12 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '30d')).toEqual('Fri Oct 02 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '1w')).toEqual('Fri Sep 10 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '4w')).toEqual('Fri Sep 30 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '6w')).toEqual('Fri Oct 14 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '1M')).toEqual('Fri Oct 02 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '3M')).toEqual('Fri Dec 02 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '6M')).toEqual('Thu Mar 02 1989 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '1y')).toEqual('Sat Sep 02 1989 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '2y')).toEqual('Sun Sep 02 1990 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '1h')).toEqual('Fri Sep 02 1988 01:00:00 GMT-0600');
    expect(dateAdder(testDate, '10h')).toEqual('Fri Sep 02 1988 10:00:00 GMT-0600');
    expect(dateAdder(testDate, '24h')).toEqual('Sat Sep 03 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '1m')).toEqual('Fri Sep 02 1988 00:01:00 GMT-0600');
    expect(dateAdder(testDate, '10m')).toEqual('Fri Sep 02 1988 00:10:00 GMT-0600');
    expect(dateAdder(testDate, '60m')).toEqual('Fri Sep 02 1988 01:00:00 GMT-0600');
    expect(dateAdder(testDate, '1440m')).toEqual('Sat Sep 03 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '43200‬m')).toEqual('Fri Oct 02 1988 00:00:00 GMT-0600');
    expect(dateAdder(testDate, '1s')).toEqual('Fri Sep 02 1988 00:00:01 GMT-0600');
    expect(dateAdder(testDate, '10s')).toEqual('Fri Sep 02 1988 00:00:10 GMT-0600');
    expect(dateAdder(testDate, '60s')).toEqual('Fri Sep 02 1988 00:01:00 GMT-0600');
    expect(dateAdder(testDate, '3600s')).toEqual('Fri Sep 02 1988 01:00:00 GMT-0600');
    expect(dateAdder(testDate, '86400s')).toEqual('Sat Sep 03 1988 00:00:00 GMT-0600');
  });
});
