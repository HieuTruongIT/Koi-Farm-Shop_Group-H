import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "feedbacks")
public class Feedback {
    @Id
    private String id;
    private String username;
    private String email;
    private String message;
    private int rating;

    // Constructors, Getters và Setters
    public Feedback() {
    }

    public Feedback(String username, String email, String message, int rating) {
        this.username = username;
        this.email = email;
        this.message = message;
        this.rating = rating;
    }

    // Getters và Setters
    // ...
}
