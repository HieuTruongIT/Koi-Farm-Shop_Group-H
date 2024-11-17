package com.example.koi;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class SearchPageTest {
    WebDriver driver;

    @BeforeClass
    public void setUp() {
        // Đặt đường dẫn đến ChromeDriver
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");

        // Khởi tạo đối tượng WebDriver
        driver = new ChromeDriver();
    }

    @Test
    public void testFilterFunctionality() {
        driver.get("http://localhost:3000/searchpage");

        String pageTitle = driver.getTitle();
        Assert.assertTrue(pageTitle.contains("Trang Tìm Kiếm Cá Koi"));

        WebElement filterDropdown = driver.findElement(By.cssSelector("select"));
        filterDropdown.sendKeys("Thuần Chủng");  // Chọn "Thuần Chủng"

        WebElement koiItem = driver.findElement(By.xpath("//div[@class='koi-item']/h3[text()='Koi 1']"));
        Assert.assertNotNull(koiItem);

        WebElement koiItemNotVisible = driver.findElement(By.xpath("//div[@class='koi-item']/h3[text()='Koi 2']"));
        Assert.assertNull(koiItemNotVisible);
    }

    @Test
    public void testWeatherInformation() {
        driver.get("http://localhost:3000/searchpage");

        WebElement weatherInfo = driver.findElement(By.cssSelector(".weather-info"));
        Assert.assertTrue(weatherInfo.isDisplayed(), "Thông tin thời tiết không hiển thị");

        WebElement temperature = driver.findElement(By.xpath("//div[@class='weather-info']/p[contains(text(), 'Nhiệt độ')]"));
        Assert.assertTrue(temperature.getText().contains("°C"), "Nhiệt độ không chính xác");
    }

    @Test
    public void testUnsplashImages() {
        driver.get("http://localhost:3000/searchpage");

        WebElement unsplashImages = driver.findElement(By.cssSelector(".unsplash-images"));
        Assert.assertTrue(unsplashImages.isDisplayed(), "Hình ảnh Unsplash không hiển thị");

        WebElement image = driver.findElement(By.xpath("//div[@class='unsplash-images']/img"));
        Assert.assertNotNull(image, "Không có hình ảnh Unsplash");
    }

    @Test
    public void testBotsetImage() {
        driver.get("http://localhost:3000/searchpage");

        WebElement botsetImage = driver.findElement(By.xpath("//div[@class='botset-container']/img"));
        Assert.assertTrue(botsetImage.isDisplayed(), "Hình ảnh botset không hiển thị");
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
