package com.cricket.scoresystem.service;

import com.cricket.scoresystem.entity.Score;
import com.cricket.scoresystem.repository.ScoreRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreService {

    private final ScoreRepository scoreRepository;

    public ScoreService(ScoreRepository scoreRepository) {
        this.scoreRepository = scoreRepository;
    }

    public List<Score> getScoresByMatch(Long matchId) {
        return scoreRepository.findByMatchId(matchId);
    }

    public Score addScore(Score score) {
        return scoreRepository.save(score);
    }
}