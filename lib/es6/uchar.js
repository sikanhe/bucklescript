

import * as Caml_format from "./caml_format.js";
import * as Caml_primitive from "./caml_primitive.js";
import * as Caml_builtin_exceptions from "./caml_builtin_exceptions.js";

function err_not_sv(i) {
  return Caml_format.caml_format_int("%X", i) + " is not an Unicode scalar value";
}

function err_not_latin1(u) {
  return "U+" + (Caml_format.caml_format_int("%04X", u) + " is not a latin1 character");
}

function succ(u) {
  if (u === 55295) {
    return 57344;
  }
  if (u === 1114111) {
    throw {
          CamlExt: Caml_builtin_exceptions.invalid_argument,
          _1: "U+10FFFF has no successor"
        };
  }
  return u + 1 | 0;
}

function pred(u) {
  if (u === 57344) {
    return 55295;
  }
  if (u === 0) {
    throw {
          CamlExt: Caml_builtin_exceptions.invalid_argument,
          _1: "U+0000 has no predecessor"
        };
  }
  return u - 1 | 0;
}

function is_valid(i) {
  if (0 <= i && i <= 55295) {
    return true;
  } else if (57344 <= i) {
    return i <= 1114111;
  } else {
    return false;
  }
}

function of_int(i) {
  if (is_valid(i)) {
    return i;
  }
  var s = err_not_sv(i);
  throw {
        CamlExt: Caml_builtin_exceptions.invalid_argument,
        _1: s
      };
}

function is_char(u) {
  return u < 256;
}

function of_char(c) {
  return c;
}

function to_char(u) {
  if (u <= 255) {
    return u;
  }
  var s = err_not_latin1(u);
  throw {
        CamlExt: Caml_builtin_exceptions.invalid_argument,
        _1: s
      };
}

function unsafe_to_char(prim) {
  return prim;
}

function equal(prim, prim$1) {
  return prim === prim$1;
}

var compare = Caml_primitive.caml_int_compare;

function hash(prim) {
  return prim;
}

var min = 0;

var max = 1114111;

var bom = 65279;

var rep = 65533;

function unsafe_of_int(prim) {
  return prim;
}

function to_int(prim) {
  return prim;
}

export {
  min ,
  max ,
  bom ,
  rep ,
  succ ,
  pred ,
  is_valid ,
  of_int ,
  unsafe_of_int ,
  to_int ,
  is_char ,
  of_char ,
  to_char ,
  unsafe_to_char ,
  equal ,
  compare ,
  hash ,
  
}
/* No side effect */
