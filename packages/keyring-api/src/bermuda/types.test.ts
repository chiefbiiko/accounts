import { BermudaAddressStruct } from './types';

describe('types', () => {
  describe('SolAddressStruct', () => {
    it.each([
      '0xf052bbb5a4ecf0d763f54fd59a577c241edb1dc7d5554c62db2ad2d5984c2433f8b54274afbc56c1fd3671f9d4e0504e1246f1b1d0a896cc94b3e105100fa89f',
      '0xa0d2f801d291ddbf4017724d0df976f1aba00dabdbc21e55e9bff13ddd1cb9d5b67728c5c6064e97366ef5d8ba548992b9dbf180d69e58bcc4057501d0a69a81',
    ])('is valid address: %s', (address) => {
      expect(() => BermudaAddressStruct.assert(address)).not.toThrow();
    });

    it.each([
      // Invalid lengths, too long (45 chars)
      '0xacabacabacabf052bbb5a4ecf0d763f54fd59a577c241edb1dc7d5554c62db2ad2d5984c2433f8b54274afbc56c1fd3671f9d4e0504e1246f1b1d0a896cc94b3e105100fa89f',
      // Too short (31 chars)
      '0xf052bbb5a4ecf0d76',
      // Empty or invalid input
      '',
      // Sol style address
      '7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzXwCFLtV',
      'not-an-address',
    ])('rejects invalid address: %s', (address) => {
      expect(() => BermudaAddressStruct.assert(address)).toThrow(
        `Expected a value of type \`SolAddress\`, but received: \`"${address}"\``,
      );
    });
  });
});
