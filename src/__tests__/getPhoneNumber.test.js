import getPhoneNumber from '../getPhoneNumber';

test.each([
  ['+7 960 000 00 00', '+79600000000'],
  ['8 (927) 000-00-00', '+79270000000'],
  ['+86 000 000 0000', '+860000000000'],
])('testing getPhoneNumber with %s ', (phone, expected) => {
  const result = getPhoneNumber(phone);
  expect(result).toBe(expected);
});
