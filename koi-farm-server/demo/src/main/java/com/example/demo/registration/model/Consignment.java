package com.example.koi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "consignment")
public class Consignment {
    @Id
    private String id;
    private String koiName;
    private String koiType;
    private int koiAge;
    private int koiSize;
    private String koiPurpose;

    // Constructor có tham số
    public Consignment(String id, String koiName, String koiType, int koiAge, int koiSize, String koiPurpose) {
        this.id = id;
        this.koiName = koiName;
        this.koiType = koiType;
        this.koiAge = koiAge;
        this.koiSize = koiSize;
        this.koiPurpose = koiPurpose;
    }

    // Getters và Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getKoiName() {
        return koiName;
    }

    public void setKoiName(String koiName) {
        this.koiName = koiName;
    }

    public String getKoiType() {
        return koiType;
    }

    public void setKoiType(String koiType) {
        this.koiType = koiType;
    }

    public int getKoiAge() {
        return koiAge;
    }

    public void setKoiAge(int koiAge) {
        this.koiAge = koiAge;
    }

    public int getKoiSize() {
        return koiSize;
    }

    public void setKoiSize(int koiSize) {
        this.koiSize = koiSize;
    }

    public String getKoiPurpose() {
        return koiPurpose;
    }

    public void setKoiPurpose(String koiPurpose) {
        this.koiPurpose = koiPurpose;
    }
}