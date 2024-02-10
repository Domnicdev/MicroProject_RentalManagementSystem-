package com.rms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class UpdateTenant {

	WebDriver driver;

	@Test
	public void updateTenant() {

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");

		driver.findElement(By.name("login")).click();
		System.out.println(driver.getTitle());

		driver.findElement(By.name("email")).sendKeys("domnicdev@gmail.com");
		driver.findElement(By.name("password")).sendKeys("domnicdev");
		driver.findElement(By.name("loginbutton")).click();
		System.out.println(driver.getTitle());

		driver.findElement(By.name("crudtenant")).click();
		System.out.println(driver.getTitle());
		
        driver.findElement(By.id("mat-tab-label-0-1")).click();


		driver.findElement(By.name("userid2")).sendKeys("9833");
		driver.findElement(By.name("username2")).sendKeys("DomnicDevK");
		driver.findElement(By.name("userpassword2")).sendKeys("Dom@12345");
		driver.findElement(By.name("useremail2")).sendKeys("dom@gmail.com");
		driver.findElement(By.name("usercontact2")).sendKeys("9876");
		driver.findElement(By.name("usertype2")).sendKeys("Tenant");
		driver.findElement(By.name("updatetenant")).click();

	}

	
	public static void main(String[] args) {
		UpdateTenant obj = new UpdateTenant();

		obj.updateTenant();
	}

}
