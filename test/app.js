'use strict'
var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-test')

describe('generator-js:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .toPromise()
  })

  it('creates files and folders', function () {
    assert.file([
      '.gitignore',
      '.gitattributes',
      '.eslintrc.json',
      '.editorconfig',
      'CHANGELOG.md',
      'README.md',
      'LICENSE',
      'build',
      'src',
      'test'
    ])
  })
})
