package com.cricket.scoresystem.controller;

import com.cricket.scoresystem.entity.Player;
import com.cricket.scoresystem.service.PlayerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/players")
@CrossOrigin
public class PlayerController {

    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    // Get all players
    @GetMapping
    public List<Player> getPlayers() {
        return playerService.getAllPlayers();
    }

    // Create a new player
    @PostMapping
    public Player createPlayer(@RequestBody Player player) {
        return playerService.createPlayer(player);
    }
}