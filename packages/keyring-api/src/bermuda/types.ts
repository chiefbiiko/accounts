import { object, definePattern } from '@metamask/keyring-utils';
import type { Infer } from '@metamask/superstruct';
import { array, enums, literal } from '@metamask/superstruct';

import { KeyringAccountStruct, BermudaAccountType } from '../api';

/**
 * Bermuda addresses represent a twofold key pair consisting of spending and viewing sub key pairs.
 * Format: 64 bytes in 0x-prefixed hex
 */
export const BermudaAddressStruct = definePattern(
  'BermudaAddress',
  /^0x[a-fA-F0-9]{128}$/,
);

/**
 * Supported Bermuda methods.
 */
export enum BermudaMethod {
  CreateBermudaAccount = 'createBermudaAccount'
}

export const BermudaAccountStruct = object({
  ...KeyringAccountStruct.schema,

  /**
   * Account address.
   */
  address: BermudaAddressStruct,

  /**
   * Account type.
   */
  type: literal(`${BermudaAccountType.V0}`),

  /**
   * Account supported methods.
   */
  methods: array(enums([`${BermudaMethod.CreateBermudaAccount}`])),
});

export type BermudaAccount = Infer<typeof BermudaAccountStruct>;
