package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "buildings")
public class Building {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "short_name")
    private String shortName;

    @Column(name = "name")
    private String name;

    @Column(name = "simple_name")
    private String simpleName;
    @Column(name = "aliases")
    private String aliases;
    @Column(name = "color")
    private String color;

    public Building() {

    }

    public Building(String shortName, String name, String simpleName, String aliases, String color) {
        this.shortName = shortName;
        this.name = name;
        this.simpleName = simpleName;
        this.aliases = aliases;
        this.color = color;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSimpleName() {
        return simpleName;
    }

    public void setSimpleName(String simpleName) {
        this.simpleName = simpleName;
    }

    public String getAliases() {
        return aliases;
    }

    public void setAliases(String aliases) {
        this.aliases = aliases;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
