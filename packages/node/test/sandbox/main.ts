// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

export async function testSandbox(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 3010));
  console.log('OK');
}
