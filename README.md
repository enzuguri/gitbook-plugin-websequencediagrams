websequencediagrams.com integration for GitBook
==============

### 1. You can use install it via **NPM** and save it to package.json:
```
$ npm install gitbook-plugin-websequencediagrams --save
```
### 2. add the plugin to `book.json` config
```
{
    "plugins": [ "websequencediagrams"]
}
```
### 3. paste websequencediagrams.com text into your book, for example:
    {% websd style="rose" %}
    title Authentication Sequence

    Alice->Bob: Authentication Request
    note right of Bob: Bob thinks about it
    Bob->Alice: Authentication Response
    {% endwebsd %}

The style parameter is optional, and defaults to "default" if not set
