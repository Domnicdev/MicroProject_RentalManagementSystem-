package com.rms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class RegisterTest {

	WebDriver driver;

	@Test
	public void register() {

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");

      
        
		driver.findElement(By.name("register")).click();
        System.out.println(driver.getTitle());
        
        driver.findElement(By.name("userid")).sendKeys("9833");
   		driver.findElement(By.name("username")).sendKeys("DomnicDev");
        driver.findElement(By.name("userpassword")).sendKeys("Domnic@12345");
   		driver.findElement(By.name("useremail")).sendKeys("domnic@gmail.com");
        driver.findElement(By.name("usercontact")).sendKeys("987654");
   		driver.findElement(By.name("usertype")).sendKeys("Tenant");
		driver.findElement(By.name("registerbtn")).click();

       
	
	}
	
	
	
	public static void main(String[] args) {

		RegisterTest obj = new RegisterTest();

		obj.register();
	}

}
