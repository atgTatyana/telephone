export default function getPhoneNumber(phone) {
  const phone8 = phone.replace(/(^8)/, '+7');
  const digits = phone8.match(/\d{1,}/g);
  return `+${digits.join('')}`;
}
