# jwt-cli
Example CLI for working with JSON Web Tokens that leverages the [jsonwebtoken npm package](https://github.com/auth0/node-jsonwebtoken)

Do you find yourself constantly going out to the https://jwt.io/ debugger just to decode a JWT? Well now you can have that same functionality right on your local command line interface.

While super basic this can easily be expanded to include more of the features supported by the [jsonwebtoken npm package](https://github.com/auth0/node-jsonwebtoken).

> **Please feel free to submit a pull-request for any changes or improvements!**

## Install
- Clone this repo
- Run `npm install`
- Run `npm link` (this will allow you to run and debug locally)

## Usage
The CLI currently supports the following commands. You can run any of these without arguments to see help text on how to run it.

### jwt-sign

``` bash
$ jwt-sign
Usage: jwt-sign -p <Payload> -s <Secret>

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  -p, --payload  Payload                                     [string] [required]
  -s, --secret   Secret                                      [string] [required]
```
***Example:***
``` bash
$ jwt-sign -p "{ foo: bar }" -s "super_duper_secret"
Token: eyJhbGciOiJIUzI1NiJ9.eyBmb286IGJhciB9.955OkamnT6QlT0VSZonoivBjZm_hSOZ23SR55G8Zr3Q
```
### jwt-verify

``` bash
$ jwt-verify
Usage: jwt-verify -t <Token> -s <Secret>

Options:
  --help        Show help                                              [boolean]
  --version     Show version number                                    [boolean]
  -t, --token   Token                                        [string] [required]
  -s, --secret  Secret                                       [string] [required]
```
***Example:***
``` bash
$ jwt-verify -t eyJhbGciOiJIUzI1NiJ9.eyBmb286IGJhciB9.955OkamnT6QlT0VSZonoivBjZm_hSOZ23SR55G8Zr3Q -s "super_duper_secret"
Decoded: "{ foo: bar }"
```

### jwt-decode

``` bash
$ jwt-decode
Usage: jwt-decode -t <Token>

      Warning: This will not verify whether the signature is valid. You should
      not use this for untrusted messages. You most likely want to use
      jwt.verify instead.


Options:
  --help       Show help                                               [boolean]
  --version    Show version number                                     [boolean]
  -t, --token  Token                                         [string] [required]
```
***Example:***
``` bash
$ jwt-decode -t eyJhbGciOiJIUzI1NiJ9.eyBmb286IGJhciB9.955OkamnT6QlT0VSZonoivBjZm_hSOZ23SR55G8Zr3Q
Token: eyJhbGciOiJIUzI1NiJ9.eyBmb286IGJhciB9.955OkamnT6QlT0VSZonoivBjZm_hSOZ23SR55G8Zr3Q...
Decoded: {
    "header": {
        "alg": "HS256"
    },
    "payload": "{ foo: bar }",
    "signature": "955OkamnT6QlT0VSZonoivBjZm_hSOZ23SR55G8Zr3Q"
}
```


