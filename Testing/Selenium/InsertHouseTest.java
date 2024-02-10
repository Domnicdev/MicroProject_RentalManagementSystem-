package com.rms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class InsertHouseTest {

	WebDriver driver;

	


	@Test
	public void insertHouse() {

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
        
        driver.findElement(By.name("houseid")).sendKeys("9909");
 		driver.findElement(By.name("housetype")).sendKeys("3BHK");
        driver.findElement(By.name("houserent")).sendKeys("7643");
 		driver.findElement(By.name("houseaddress")).sendKeys("madurai");
        driver.findElement(By.name("userid")).sendKeys("9833");
        
        driver.findElement(By.name("inserthousebtn")).click();
        System.out.println(driver.getTitle());
        
        
 	
        
        
        

	
	}
	
	
	public static void main(String[] args) {

		InsertHouseTest obj = new InsertHouseTest();

		obj.insertHouse();
	}

}
