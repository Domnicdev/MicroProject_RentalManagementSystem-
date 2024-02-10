package com.rms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class DeleteHouseTest {

	WebDriver driver;

	
	@Test
	public void deleteHouse() {

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");

      
        
		driver.findElement(By.name("login")).click();
        System.out.println(driver.getTitle());
        
        driver.findElement(By.name("email")).sendKeys("domnicdev@gmail.com");
		driver.findElement(By.name("password")).sendKeys("domnicdev");
		driver.findElement(By.name("loginbutton")).click();
        System.out.println(driver.getTitle());
        
        driver.findElement(By.name("inserthouse")).click();
        System.out.println(driver.getTitle());
        
        driver.findElement(By.id("mat-tab-label-0-2")).click();
        driver.findElement(By.name("houseid3")).click();
        driver.findElement(By.name("houseid3")).sendKeys("9909");
        driver.findElement(By.name("deletehousebtn")).click();
 	
        
 	
        
        
        

	
	}
	public static void main(String[] args) {

		DeleteHouseTest obj = new DeleteHouseTest();

		obj.deleteHouse();
		
	}

}
