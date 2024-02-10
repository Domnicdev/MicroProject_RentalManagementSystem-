package com.rms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class DeleteHouseOwner {


	WebDriver driver;

	
	@Test
	public void deleteOwner() {

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");

		driver.findElement(By.name("login")).click();
		System.out.println(driver.getTitle());

		driver.findElement(By.name("email")).sendKeys("domnicdev@gmail.com");
		driver.findElement(By.name("password")).sendKeys("domnicdev");
		driver.findElement(By.name("loginbutton")).click();
		System.out.println(driver.getTitle());

		driver.findElement(By.name("ownercrud")).click();
		System.out.println(driver.getTitle());
		
        driver.findElement(By.id("mat-tab-label-0-2")).click();

   
        driver.findElement(By.name("userid3")).click();
        driver.findElement(By.name("userid3")).sendKeys("9833");
        driver.findElement(By.name("deleteowner")).click();
 	
        
        
        

	
	}
	
	public static void main(String[] args) {

	}

}
