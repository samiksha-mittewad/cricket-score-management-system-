package com.cricket.scoresystem.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "scores")
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long matchId;

    private String battingTeam;

    private Integer runs;
    private Integer wickets;

    private Double overs;

    private Integer balls;

    private Integer runsThisOver;

    public Score() {
    }

    public Score(
            Long matchId,
            String battingTeam,
            Integer runs,
            Integer wickets,
            Double overs,
            Integer balls,
            Integer runsThisOver) {

        this.matchId = matchId;
        this.battingTeam = battingTeam;
        this.runs = runs;
        this.wickets = wickets;
        this.overs = overs;
        this.balls = balls;
        this.runsThisOver = runsThisOver;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getMatchId() {
        return matchId;
    }

    public void setMatchId(Long matchId) {
        this.matchId = matchId;
    }

    public String getBattingTeam() {
        return battingTeam;
    }

    public void setBattingTeam(String battingTeam) {
        this.battingTeam = battingTeam;
    }

    public Integer getRuns() {
        return runs;
    }

    public void setRuns(Integer runs) {
        this.runs = runs;
    }

    public Integer getWickets() {
        return wickets;
    }

    public void setWickets(Integer wickets) {
        this.wickets = wickets;
    }

    public Double getOvers() {
        return overs;
    }

    public void setOvers(Double overs) {
        this.overs = overs;
    }

    public Integer getBalls() {
        return balls;
    }

    public void setBalls(Integer balls) {
        this.balls = balls;
    }

    public Integer getRunsThisOver() {
        return runsThisOver;
    }

    public void setRunsThisOver(Integer runsThisOver) {
        this.runsThisOver = runsThisOver;
    }
}