package com.cricket.scoresystem.repository;

import com.cricket.scoresystem.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match, Long> {
}