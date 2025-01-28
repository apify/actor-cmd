import { ApifyClient } from 'apify-client';

import { getApifyClientOptions } from '../../src/lib/utils.js';

const { TEST_USER_TOKEN: ENV_TEST_USER_TOKEN } = process.env;

if (!ENV_TEST_USER_TOKEN) {
	throw Error('You must configure "TEST_USER_TOKEN" environment variable to run tests!');
}

export const testUserClient = new ApifyClient(getApifyClientOptions(ENV_TEST_USER_TOKEN));

export const TEST_USER_TOKEN = ENV_TEST_USER_TOKEN;
