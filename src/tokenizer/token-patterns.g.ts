/* eslint-disable @typescript-eslint/no-non-null-assertion */

// THIS FILE HAS BEEN GENERATED BY THE `syntax-to-token-pattern.py` GENERATOR
// DO NOT EDIT THIS FILE DIRECTLY! INSTEAD RUN THE PYTHON SCRIPT.
// ANY MANUAL EDITS MADE TO THIS FILE WILL BE OVERWRITTEN. YOU HAVE BEEN WARNED.
// Last generated: 12/07/2024 09:35:29 (UTC+0)

import * as RenpyPatterns from "./renpy-token-patterns.g";
import * as ScreenPatterns from "./screen-token-patterns.g";
import * as StylePatterns from "./style-token-patterns.g";
import * as AtlPatterns from "./atl-token-patterns.g";
import * as PythonPatterns from "./python-token-patterns.g";

// Push all RenpyPatterns external includes
RenpyPatterns.literal.patterns!.push(PythonPatterns.literal);
RenpyPatterns.parenthesizedPython.patterns![0].patterns!.push(PythonPatterns.expression);
RenpyPatterns.parenthesizedPython.patterns![1].patterns!.push(PythonPatterns.expression);
RenpyPatterns.parenthesizedPython.patterns![2].patterns!.push(PythonPatterns.expression);
RenpyPatterns.simpleExpression.patterns!.splice(0, 0, PythonPatterns.string);
RenpyPatterns.simpleExpression.patterns!.splice(3, 0, PythonPatterns.memberAccess);
RenpyPatterns.simpleExpression.patterns!.splice(4, 0, PythonPatterns.functionCall);
RenpyPatterns.keywords.patterns![1].patterns!.push(PythonPatterns.expression);
RenpyPatterns.constantPlaceholder.captures![2].patterns!.push(PythonPatterns.expression);
RenpyPatterns.pythonStatements.patterns![1].patterns!.push(PythonPatterns.python);
RenpyPatterns.pythonBlockTester.patterns!.push(PythonPatterns.python);
RenpyPatterns.define.patterns!.splice(2, 0, PythonPatterns.expression);
RenpyPatterns.define.patterns![3].patterns!.splice(0, 0, PythonPatterns.expression);
RenpyPatterns.defaultStatement.patterns!.splice(1, 0, PythonPatterns.expression);
RenpyPatterns.defaultStatement.patterns![2].patterns!.splice(0, 0, PythonPatterns.expression);
RenpyPatterns.oneLinePython.patterns!.splice(2, 0, PythonPatterns.expression);
RenpyPatterns.sayStatements.patterns![0].endCaptures![3].patterns!.push(PythonPatterns.functionArguments);
RenpyPatterns.sayStatements.patterns![1].endCaptures![3].patterns!.push(PythonPatterns.functionArguments);
RenpyPatterns.conditionals.captures![2].patterns!.push(PythonPatterns.expression);
RenpyPatterns.labelName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
RenpyPatterns.labelCall.patterns!.splice(0, 0, PythonPatterns.specialVariables);
RenpyPatterns.labelCall.patterns!.push(PythonPatterns.functionArguments);
RenpyPatterns.labelDefName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
RenpyPatterns.label.captures![2].patterns!.splice(1, 0, PythonPatterns.parameters);
RenpyPatterns.returnStatements.patterns!.push(PythonPatterns.expression);
RenpyPatterns.callJumpExpression.patterns!.push(PythonPatterns.expression);
RenpyPatterns.callPass.patterns!.push(PythonPatterns.functionArguments);
RenpyPatterns.menuOption.beginCaptures![3].patterns!.splice(0, 0, PythonPatterns.functionArguments);
RenpyPatterns.menuOption.beginCaptures![3].patterns![1].captures![2].patterns!.push(PythonPatterns.expressionBare);
RenpyPatterns.menuSet.captures![2].patterns!.push(PythonPatterns.expressionBare);
RenpyPatterns.menu.beginCaptures![3].patterns!.push(PythonPatterns.functionArguments);
RenpyPatterns.audioParams.patterns!.push(PythonPatterns.number);
RenpyPatterns.play.patterns![0].patterns!.splice(2, 0, PythonPatterns.expression);
RenpyPatterns.queue.patterns![0].patterns!.splice(2, 0, PythonPatterns.expression);
RenpyPatterns.stop.patterns![0].patterns!.splice(1, 0, PythonPatterns.number);
RenpyPatterns.renpyStatements.patterns!.splice(5, 0, AtlPatterns.transform);
RenpyPatterns.renpyStatements.patterns!.splice(6, 0, AtlPatterns.atlBlockTester);
RenpyPatterns.renpyStatements.patterns!.splice(13, 0, ScreenPatterns.screen);
RenpyPatterns.renpyStatements.patterns!.splice(14, 0, StylePatterns.style);

// Push all AtlPatterns external includes
AtlPatterns.atl.patterns!.splice(0, 0, RenpyPatterns.conditionals);
AtlPatterns.atlSimpleExpression.patterns!.splice(0, 0, RenpyPatterns.renpyOnlyExpressions);
AtlPatterns.atlSimpleExpression.patterns!.splice(2, 0, PythonPatterns.memberAccess);
AtlPatterns.atlSimpleExpression.patterns!.splice(3, 0, PythonPatterns.illegalOperator);
AtlPatterns.atlSimpleExpression.patterns!.splice(4, 0, PythonPatterns.operator);
AtlPatterns.atlSimpleExpression.patterns!.splice(5, 0, PythonPatterns.curlyBraces);
AtlPatterns.atlSimpleExpression.patterns!.splice(6, 0, PythonPatterns.itemAccess);
AtlPatterns.atlSimpleExpression.patterns!.splice(7, 0, PythonPatterns.list);
AtlPatterns.atlSimpleExpression.patterns!.splice(8, 0, PythonPatterns.oddFunctionCall);
AtlPatterns.atlSimpleExpression.patterns!.splice(9, 0, PythonPatterns.roundBraces);
AtlPatterns.atlSimpleExpression.patterns!.splice(10, 0, PythonPatterns.functionCall);
AtlPatterns.atlSimpleExpression.patterns!.splice(11, 0, PythonPatterns.builtinFunctions);
AtlPatterns.atlSimpleExpression.patterns!.splice(12, 0, PythonPatterns.builtinTypes);
AtlPatterns.atlSimpleExpression.patterns!.splice(13, 0, PythonPatterns.builtinExceptions);
AtlPatterns.atlSimpleExpression.patterns!.splice(14, 0, PythonPatterns.magicNames);
AtlPatterns.atlSimpleExpression.patterns!.splice(15, 0, PythonPatterns.specialNames);
AtlPatterns.atlSimpleExpression.patterns!.splice(16, 0, PythonPatterns.illegalNames);
AtlPatterns.atlSimpleExpression.patterns!.splice(17, 0, PythonPatterns.specialVariables);
AtlPatterns.atlSimpleExpression.patterns!.splice(18, 0, PythonPatterns.ellipsis);
AtlPatterns.atlSimpleExpression.patterns!.splice(19, 0, PythonPatterns.punctuation);
AtlPatterns.atlSimpleExpression.patterns!.splice(20, 0, PythonPatterns.lineContinuation);
AtlPatterns.atlSimpleExpression.patterns!.push(RenpyPatterns.whitespace);
AtlPatterns.atlExpression.patterns!.push(PythonPatterns.expression);
AtlPatterns.atlKeywords.patterns!.push(RenpyPatterns.keywords);
AtlPatterns.atlEventName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
AtlPatterns.atlEventDefName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
AtlPatterns.atlOn.patterns!.push(RenpyPatterns.comments);
AtlPatterns.atlFunction.captures![2].patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
AtlPatterns.atlWarperName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
AtlPatterns.atlFallback.patterns!.push(RenpyPatterns.basePatterns);
AtlPatterns.atlBlockTester.patterns![0].patterns!.push(AtlPatterns.atl);

// Push all ScreenPatterns external includes
ScreenPatterns.screenDefName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
ScreenPatterns.screenSimpleExpression.patterns!.splice(0, 0, RenpyPatterns.renpyOnlyExpressions);
ScreenPatterns.screenSimpleExpression.patterns!.splice(2, 0, PythonPatterns.memberAccess);
ScreenPatterns.screenSimpleExpression.patterns!.splice(3, 0, PythonPatterns.illegalOperator);
ScreenPatterns.screenSimpleExpression.patterns!.splice(4, 0, PythonPatterns.operator);
ScreenPatterns.screenSimpleExpression.patterns!.splice(5, 0, PythonPatterns.curlyBraces);
ScreenPatterns.screenSimpleExpression.patterns!.splice(6, 0, PythonPatterns.itemAccess);
ScreenPatterns.screenSimpleExpression.patterns!.splice(7, 0, PythonPatterns.list);
ScreenPatterns.screenSimpleExpression.patterns!.splice(8, 0, PythonPatterns.oddFunctionCall);
ScreenPatterns.screenSimpleExpression.patterns!.splice(9, 0, PythonPatterns.roundBraces);
ScreenPatterns.screenSimpleExpression.patterns!.splice(10, 0, PythonPatterns.functionCall);
ScreenPatterns.screenSimpleExpression.patterns!.splice(11, 0, PythonPatterns.builtinFunctions);
ScreenPatterns.screenSimpleExpression.patterns!.splice(12, 0, PythonPatterns.builtinTypes);
ScreenPatterns.screenSimpleExpression.patterns!.splice(13, 0, PythonPatterns.builtinExceptions);
ScreenPatterns.screenSimpleExpression.patterns!.splice(14, 0, PythonPatterns.magicNames);
ScreenPatterns.screenSimpleExpression.patterns!.splice(15, 0, PythonPatterns.specialNames);
ScreenPatterns.screenSimpleExpression.patterns!.splice(16, 0, PythonPatterns.illegalNames);
ScreenPatterns.screenSimpleExpression.patterns!.splice(17, 0, PythonPatterns.specialVariables);
ScreenPatterns.screenSimpleExpression.patterns!.splice(18, 0, PythonPatterns.ellipsis);
ScreenPatterns.screenSimpleExpression.patterns!.splice(19, 0, PythonPatterns.punctuation);
ScreenPatterns.screenSimpleExpression.patterns!.splice(20, 0, PythonPatterns.lineContinuation);
ScreenPatterns.screenSimpleExpression.patterns!.push(RenpyPatterns.whitespace);
ScreenPatterns.screenText.patterns!.push(RenpyPatterns.atStatement);
ScreenPatterns.screenText.patterns![0].patterns!.push(AtlPatterns.atl);
ScreenPatterns.screenText.patterns![1].patterns!.splice(0, 0, RenpyPatterns.strings);
ScreenPatterns.screen.patterns![0].beginCaptures![3].patterns!.push(PythonPatterns.parameters, RenpyPatterns.invalidToken);
ScreenPatterns.screenFallback.patterns!.push(RenpyPatterns.basePatterns);
ScreenPatterns.screenLanguage.patterns!.splice(0, 0, RenpyPatterns.conditionals);

// Push all StylePatterns external includes
StylePatterns.styleBlockTester.patterns![0].patterns!.push(RenpyPatterns.fallbackPatterns);
StylePatterns.styleClause.patterns![2].captures![2].patterns!.push(RenpyPatterns.name);
StylePatterns.styleClause.patterns![4].patterns!.push(RenpyPatterns.simpleExpression);
StylePatterns.styleClause.patterns![5].patterns!.push(RenpyPatterns.simpleExpression);
StylePatterns.style.patterns!.push(RenpyPatterns.fallbackPatterns);

// Push all PythonPatterns external includes
PythonPatterns.stringUnicodeGuts.patterns!.splice(0, 0, RenpyPatterns.stringsInterior);


export { RenpyPatterns, ScreenPatterns, StylePatterns, AtlPatterns, PythonPatterns };