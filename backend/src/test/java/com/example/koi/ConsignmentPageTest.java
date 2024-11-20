package com.example.koi;

import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.*;
import java.time.Duration;

import static org.junit.jupiter.api.Assertions.*;

public class ConsignmentPageTest {
    private WebDriver driver;

    @BeforeEach
    public void setup() {
        // Set up ChromeDriver (cần tải về ChromeDriver và đặt đúng đường dẫn)
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Test
    public void testFormSubmission() {
        driver.get("http://localhost:3000/consignment");

        WebElement koiNameInput = driver.findElement(By.name("koiName"));
        WebElement koiTypeSelect = driver.findElement(By.name("koiType"));
        WebElement koiAgeInput = driver.findElement(By.name("koiAge"));
        WebElement koiSizeInput = driver.findElement(By.name("koiSize"));
        WebElement koiPurposeSelect = driver.findElement(By.name("koiPurpose"));
        WebElement submitButton = driver.findElement(By.tagName("button"));

        koiNameInput.sendKeys("Koi 1");
        koiTypeSelect.sendKeys("thuần chủng");
        koiAgeInput.sendKeys("2");
        koiSizeInput.sendKeys("30");
        koiPurposeSelect.sendKeys("bán");

        submitButton.click();

        // Sử dụng Duration cho WebDriverWait
        Alert alert = new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.alertIsPresent());

        String alertText = alert.getText();
        assertTrue(alertText.contains("Koi 1"));
        assertTrue(alertText.contains("thuần chủng"));
        assertTrue(alertText.contains("2"));
        assertTrue(alertText.contains("30"));
        assertTrue(alertText.contains("bán"));

        alert.accept();
    }

    @AfterEach
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
