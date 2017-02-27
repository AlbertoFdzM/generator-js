'use strict'
var fs = require('fs')
var Generator = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ultimate ' + chalk.red('js') + ' generator!'
    ))
  },

  writing: function () {
    this.fs.copy(
      [this.templatePath('*'), this.templatePath('.*')],
      this.destinationPath()
    )

    fs.mkdirSync(this.destinationPath('build'))
    fs.mkdirSync(this.destinationPath('src'))
    fs.mkdirSync(this.destinationPath('test'))
  }
})
