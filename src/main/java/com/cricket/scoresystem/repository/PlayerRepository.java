package com.cricket.scoresystem.repository;

import com.cricket.scoresystem.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}