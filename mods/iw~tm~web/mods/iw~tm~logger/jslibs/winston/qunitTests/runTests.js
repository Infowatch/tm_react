/**
 * Startup script to run QUnit integration tests for winston
 * 
 * Copyright (c) 2013 Matthias Ohlemeyer
 *  
 * @author Matthias Ohlemeyer (mohlemeyer@gmail.com)
 * @license
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this file (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var vertx = require('vertx');
var container = require('vertx/container');
var runTests = require('jslibs/qunit/vertxTestRnr');

runTests(
		{
			startDir: 'jslibs/winston/qunitTests',
			testFilePattern: container.config.integrationTests ? '^iTest_.*\\.js$' : undefined
		},
		function (junitResult) {
		    var testResultFileName = container.config.integrationTests ? 'iTest.xml' : 'test.xml';
			vertx.fileSystem.writeFileSync('jslibs/winston/qunitTests/testResult/' + testResultFileName, junitResult);
			container.exit();
		}
);