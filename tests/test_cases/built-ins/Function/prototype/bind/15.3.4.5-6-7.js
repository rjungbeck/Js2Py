// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.4.5-6-7
description: >
    Function.prototype.bind - F can get own accessor property that
    overrides an inherited data property
includes: [runTestCase.js]
---*/

function testcase() {

        var foo = function () { };

        var obj = foo.bind({});
        try {
            Function.prototype.property = 3;
            Object.defineProperty(obj, "property", {
                get: function () {
                    return 12;
                }
            });
            return obj.property === 12;
        } finally {
            delete Function.prototype.property;
        }
    }
runTestCase(testcase);
