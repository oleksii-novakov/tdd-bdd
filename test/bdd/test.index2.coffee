{expect} = require 'chai'
app = require('../../index2.js').app

Feature 'Math', ->
  Scenario 'Squared numbers', ->
    Given 'I have number 3', ->
      @n = 3

    When 'the number is squared', ->
      @nSquared = app.squareNum(@n)

    Then 'it becomes 9', ->
      expect(@nSquared).to.equal 9