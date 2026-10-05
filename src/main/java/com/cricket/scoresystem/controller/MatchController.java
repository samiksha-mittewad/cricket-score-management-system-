package com.cricket.scoresystem.controller;

import com.cricket.scoresystem.entity.Match;
import com.cricket.scoresystem.service.MatchService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/matches")
@CrossOrigin
public class MatchController {

    private final MatchService matchService;

    public MatchController(MatchService matchService) {
        this.matchService = matchService;
    }

    // Get all matches
    @GetMapping
    public List<Match> getMatches() {
        return matchService.getAllMatches();
    }

    // Get match by ID
    @GetMapping("/{id}")
    public Match getMatch(@PathVariable Long id) {
        return matchService.getMatch(id);
    }

    // Create a new match
    @PostMapping
    public Match createMatch(@RequestBody Match match) {
        return matchService.createMatch(match);
    }

    // Update an existing match
    @PutMapping("/{id}")
    public Match updateMatch(
            @PathVariable Long id,
            @RequestBody Match match) {

        return matchService.updateMatch(id, match);
    }

    // Delete a match
    @DeleteMapping("/{id}")
    public String deleteMatch(@PathVariable Long id) {
        matchService.deleteMatch(id);
        return "Match deleted successfully";
    }
}