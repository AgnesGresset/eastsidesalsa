---
name: verify-tests
description: Verifies Vitest tests actually fail by breaking one assertion, then restoring it. Use when writing or changing Vitest tests, test files, or test cases.
---

# Verify tests

After the new or changed tests pass:

1. Change one expected value in the test you just wrote to a wrong value.
2. Run that test file. It must fail.
3. Restore the expected value.
4. Run the file again. It must pass.

Do not leave the broken assertion in the commit.
