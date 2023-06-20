package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "buildings")
public class Building {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(name = "name")
    private String name;

    @Column(name = "icon")
    private String icon;

    @Column(name = "address")
    private String address;

    @Column(name = "geometry")
    private String geometry;

    @Column(name = "entries")
    private String entries;

    @Column(name = "aliases")
    private String aliases;

    public Building() {

    }

    public Building( String name, String aliases, String address, String entries, String geometry, String icon) {
        super();
        this.name = name;
        this.aliases = aliases;
        this.entries = entries;
        this.address = address;
        this.geometry = geometry;
        this.icon = icon;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAliases() {
        return aliases;
    }

    public void setAliases(String aliases) {
        this.aliases = aliases;
    }


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGeometry() {
        return geometry;
    }

    public void setGeometry(String geometry) {
        this.geometry = geometry;
    }

    public String getEntries() {
        return entries;
    }

    public void setEntries(String entries) {
        this.entries = entries;
    }

    public String getIcon() { return icon; }

    public void setIcon(String icon) {
        this.icon = icon;
    }

}
