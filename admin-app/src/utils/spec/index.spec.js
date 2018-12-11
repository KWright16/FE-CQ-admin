const { expect } = require('chai');
const { convertTime } = require('../index')

// describe('convertTime', () => {
//   it('returns 1 minute when passed a minute in ms', () => {
//     expect(convertTime(60000)).to.equal('1 minute')
//   });
//   it('returns 10 minutes when passed it in ms', () => {
//     expect(convertTime(600000)).to.equal('10 minutes')
//   });
//   it('returns 1 hour when passed it in ms', () => {
//     expect(convertTime(3600000)).to.equal('1 hour')
//   });
//   it('returns 2 hours when passed it in ms', () => {
//     expect(convertTime(7200000)).to.equal('2 hours')
//   });
//   it('returns 2 hours when passed it in ms', () => {
//     expect(convertTime(7200000)).to.equal('2 hours')
//   });
// });

describe('convertTime', () => {
  it('returns 1 minute when passed a minute in ms', () => {
    expect(convertTime(60000)).to.equal('1 minute')
  });
  it('returns 10 minutes when passed it in ms', () => {
    expect(convertTime(600000)).to.equal('10 minutes')
  });
  it('returns 60 minutes when passed it in ms', () => {
    expect(convertTime(3600000)).to.equal('60 minutes')
  });
  it('returns 120 minutes when passed it in ms', () => {
    expect(convertTime(7200000)).to.equal('120 minutes')
  });
  it('returns 90 hours when passed it in ms', () => {
    expect(convertTime(5400000)).to.equal('90 minutes')
  });
});