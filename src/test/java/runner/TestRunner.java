package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"features"},
		glue= {"stepDefination"},
		plugin= {"html:target/cucumber-html-report",
		        "json:target/cucumber-json-report/cucumberJson.json",
		        "pretty:target/cucumber-pretty-report/cucumberPretty.txt",
		        "usage:target/cucumber-usage-report/cucumberUsage.json",
		        "junit:target/cucumber-result/cucumberResult.xml"})
public class TestRunner {

}