package com.rms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AddReview {

	WebDriver driver;

	@Test
	public void addReview() {

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");

		driver.findElement(By.name("login")).click();
		System.out.println(driver.getTitle());

		driver.findElement(By.name("email")).sendKeys("siva@gmail.com");
		driver.findElement(By.name("password")).sendKeys("siva");
		driver.findElement(By.name("loginbutton")).click();
		System.out.println(driver.getTitle());
		
		driver.findElement(By.name("addreview")).click();
		System.out.println(driver.getTitle());
		
        driver.findElement(By.name("reviewid")).sendKeys("900");
        driver.findElement(By.name("houseid")).sendKeys("205");
	 	driver.findElement(By.name("userreview")).sendKeys("Its good place to live");
	 	
	 	 driver.findElement(By.name("insertreview")).click();
	        System.out.println(driver.getTitle());
	}
	
	public static void main(String[] args) {

	}

}
