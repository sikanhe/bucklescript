'use strict';

var Caml_exceptions = require("../../lib/js/caml_exceptions.js");

var A = Caml_exceptions.create("Test_exception_escape.N.A");

var f;

try {
  throw {
        CamlExt: A,
        _1: 3
      };
}
catch (exn){
  f = 3;
}

var N = {
  f: f
};

exports.N = N;
/* f Not a pure module */
