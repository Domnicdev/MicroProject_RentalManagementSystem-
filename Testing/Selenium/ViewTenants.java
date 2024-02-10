package com.rms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class ViewTenants {

	WebDriver driver;

	@Test
	public void addReview() {

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");

		driver.findElement(By.name("login")).click();
		System.out.println(driver.getTitle());

		driver.findElement(By.name("email")).sendKeys("domnic@gmail.com");
		driver.findElement(By.name("password")).sendKeys("11964");
		driver.findElement(By.name("loginbutton")).click();
		System.out.println(driver.getTitle());
		
		driver.findElement(By.name("viewtenants")).click();

		

	}
	
	public static void main(String[] args) {

	}

}
