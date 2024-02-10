package com.rms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class UpdateHouseTest {

	WebDriver driver;

	


	@Test
	public void updateHouse() {

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
        
        driver.findElement(By.id("mat-tab-label-0-1")).click();

        
        driver.findElement(By.name("houseid2")).sendKeys("9909");
 		driver.findElement(By.name("housetype2")).sendKeys("2BHK");
        driver.findElement(By.name("houserent2")).sendKeys("7743");
 		driver.findElement(By.name("houseaddress2")).sendKeys("trichy");
        driver.findElement(By.name("userid2")).sendKeys("9833");
        
        driver.findElement(By.name("updatehousebtn")).click();
        System.out.println(driver.getTitle());
        
        
 	
        
        
        

	
	}
	
	public static void main(String[] args) {
		UpdateHouseTest obj = new UpdateHouseTest();

		obj.updateHouse();
	}

}
