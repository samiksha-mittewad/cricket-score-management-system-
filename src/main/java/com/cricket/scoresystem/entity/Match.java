package com.cricket.scoresystem.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String team1;
    private String team2;
    private String venue;
    private String status;

    private Integer team1Score;
    private Integer team1Wickets;
    private Double team1Overs;

    private Integer team2Score;
    private Integer team2Wickets;
    private Double team2Overs;

    private String tossWinner;
    private String result;

    public Match() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeam1() {
        return team1;
    }

    public void setTeam1(String team1) {
        this.team1 = team1;
    }

    public String getTeam2() {
        return team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getTeam1Score() {
        return team1Score;
    }

    public void setTeam1Score(Integer team1Score) {
        this.team1Score = team1Score;
    }

    public Integer getTeam1Wickets() {
        return team1Wickets;
    }

    public void setTeam1Wickets(Integer team1Wickets) {
        this.team1Wickets = team1Wickets;
    }

    public Double getTeam1Overs() {
        return team1Overs;
    }

    public void setTeam1Overs(Double team1Overs) {
        this.team1Overs = team1Overs;
    }

    public Integer getTeam2Score() {
        return team2Score;
    }

    public void setTeam2Score(Integer team2Score) {
        this.team2Score = team2Score;
    }

    public Integer getTeam2Wickets() {
        return team2Wickets;
    }

    public void setTeam2Wickets(Integer team2Wickets) {
        this.team2Wickets = team2Wickets;
    }

    public Double getTeam2Overs() {
        return team2Overs;
    }

    public void setTeam2Overs(Double team2Overs) {
        this.team2Overs = team2Overs;
    }

    public String getTossWinner() {
        return tossWinner;
    }

    public void setTossWinner(String tossWinner) {
        this.tossWinner = tossWinner;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}