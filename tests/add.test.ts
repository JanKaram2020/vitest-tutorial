import {add} from  './add';
import { expect, test } from  'vitest'

test("add()" , () => {
    expect(add(1,2)).toBe(3);
})
