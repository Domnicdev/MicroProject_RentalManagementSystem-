package com.rms.seleniumtest;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.annotations.Test;

public class LoginTest {
	WebDriver driver;

		


	@Test
	public void login() {

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");

      
        
		driver.findElement(By.name("login")).click();
        System.out.println(driver.getTitle());
        
        driver.findElement(By.name("email")).sendKeys("domnicdev@gmail.com");
		driver.findElement(By.name("password")).sendKeys("domnicdev");
		driver.findElement(By.name("loginbutton")).click();
        System.out.println(driver.getTitle());

	
	}
	
	



	public static void main(String[] args) {

		LoginTest obj = new LoginTest();

		obj.login();

	}

}
