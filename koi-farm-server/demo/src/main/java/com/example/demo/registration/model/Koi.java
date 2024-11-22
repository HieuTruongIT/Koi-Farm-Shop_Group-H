package com.example.koi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "koi")
public class Koi {
    @Id
    private String id;
    private String name;
    private String type;
    private String image;

    public Koi(String id, String name, String type, String image) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.image = image;
    }

    // Getters và Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}