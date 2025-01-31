import type { Extends } from '@metamask/keyring-utils';
import { expectTrue } from '@metamask/keyring-utils';

import type { BtcP2wpkhAccount } from './types';
import type { KeyringAccount } from '../api';

// `BtcP2wpkhAccount` extends `KeyringAccount`
expectTrue<Extends<BtcP2wpkhAccount, KeyringAccount>>();
