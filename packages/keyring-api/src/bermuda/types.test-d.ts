import type { Extends } from '@metamask/keyring-utils';
import { expectTrue } from '@metamask/keyring-utils';

import type { BermudaAccount } from './types';
import type { KeyringAccount } from '../api';

// `BermudaAccount` extends `KeyringAccount`
expectTrue<Extends<BermudaAccount, KeyringAccount>>();
