package com.cricket.scoresystem.repository;

import com.cricket.scoresystem.entity.Score;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScoreRepository extends JpaRepository<Score, Long> {

    List<Score> findByMatchId(Long matchId);
}