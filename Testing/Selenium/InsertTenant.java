package com.rms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class InsertTenant {

	WebDriver driver;

	@Test
	public void insertTenant() {

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
		 
		

		driver.findElement(By.name("userid1")).sendKeys("9833");
		driver.findElement(By.name("username1")).sendKeys("DomnicDev");
		driver.findElement(By.name("userpassword1")).sendKeys("Domnic@12345");
		driver.findElement(By.name("useremail1")).sendKeys("domnic@gmail.com");
		driver.findElement(By.name("usercontact1")).sendKeys("987654");
		driver.findElement(By.name("usertype1")).sendKeys("Tenant");
		driver.findElement(By.name("inserttenantbtn")).click();

	}

	public static void main(String[] args) {

		InsertTenant obj = new InsertTenant();

		obj.insertTenant();
	}

}
