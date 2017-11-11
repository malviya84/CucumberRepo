$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("a.feature");
formatter.feature({
  "line": 1,
  "name": "methamatic operations",
  "description": "",
  "id": "methamatic-operations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "user want to add two number",
  "description": "",
  "id": "methamatic-operations;user-want-to-add-two-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "first number 2 and second number 3",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "when operation performed as \u0027Addition\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "compare sum should be 5",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    },
    {
      "val": "3",
      "offset": 33
    }
  ],
  "location": "Login.first_number_and_second_number(int,int)"
});
formatter.result({
  "duration": 238612153,
  "status": "passed"
});
formatter.match({
  "location": "Login.when_operation_performed_as_Addition()"
});
formatter.result({
  "duration": 55833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 22
    }
  ],
  "location": "Login.compare_sum_should_be(int)"
});
formatter.result({
  "duration": 87992,
  "status": "passed"
});
});