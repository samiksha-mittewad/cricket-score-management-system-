package com.cricket.scoresystem.controller;

import com.cricket.scoresystem.entity.Score;
import com.cricket.scoresystem.service.ScoreService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scores")
@CrossOrigin
public class ScoreController {

    private final ScoreService scoreService;

    public ScoreController(ScoreService scoreService) {
        this.scoreService = scoreService;
    }

    // Get scores for a particular match
    @GetMapping("/match/{matchId}")
    public List<Score> getMatchScores(@PathVariable Long matchId) {
        return scoreService.getScoresByMatch(matchId);
    }

    // Add a new score
    @PostMapping
    public Score addScore(@RequestBody Score score) {
        return scoreService.addScore(score);
    }
}