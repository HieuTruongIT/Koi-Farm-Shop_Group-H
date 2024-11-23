import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class RegisterAndLoginTest {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");

        WebDriver driver = new ChromeDriver();

        try {
            // Đăng ký
            driver.get("https://localhost:3000/register");

            WebElement usernameInput = driver.findElement(By.id("register-username"));
            usernameInput.sendKeys("newuser");

            WebElement emailInput = driver.findElement(By.id("register-email"));
            emailInput.sendKeys("newuser@example.com");

            WebElement passwordInput = driver.findElement(By.id("register-password"));
            passwordInput.sendKeys("123456");

            WebElement registerButton = driver.findElement(By.id("register-button"));
            registerButton.click();

            Thread.sleep(3000);

            String registerMessage = driver.findElement(By.id("register-success")).getText();
            if (!registerMessage.contains("Registration successful")) {
                System.out.println("Test Failed: Đăng ký thất bại");
                return;
            }

            // Đăng nhập
            driver.get("http://localhost:3000/login");

            WebElement loginUsernameInput = driver.findElement(By.id("username"));
            loginUsernameInput.sendKeys("newuser");

            WebElement loginPasswordInput = driver.findElement(By.id("password"));
            loginPasswordInput.sendKeys("123456");

            WebElement loginButton = driver.findElement(By.id("login-button"));
            loginButton.click();

            Thread.sleep(3000);

            String pageTitle = driver.getTitle();
            if (pageTitle.equals("Welcome Dashboard")) {
                System.out.println("Test Passed: Đăng nhập thành công!");
            } else {
                System.out.println("Test Failed: Đăng nhập thất bại!");
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
