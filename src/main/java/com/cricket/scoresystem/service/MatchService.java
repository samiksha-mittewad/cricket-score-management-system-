package com.cricket.scoresystem.service;

import com.cricket.scoresystem.entity.Match;
import com.cricket.scoresystem.repository.MatchRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchService {

    private final MatchRepository matchRepository;

    public MatchService(MatchRepository matchRepository) {
        this.matchRepository = matchRepository;
    }

    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    public Match getMatch(Long id) {
        return matchRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Match not found"));
    }

    public Match createMatch(Match match) {
        return matchRepository.save(match);
    }

    public Match updateMatch(Long id, Match updatedMatch) {

        Match match = getMatch(id);

        match.setTeam1(updatedMatch.getTeam1());
        match.setTeam2(updatedMatch.getTeam2());
        match.setVenue(updatedMatch.getVenue());
        match.setStatus(updatedMatch.getStatus());

        match.setTeam1Score(updatedMatch.getTeam1Score());
        match.setTeam1Wickets(updatedMatch.getTeam1Wickets());
        match.setTeam1Overs(updatedMatch.getTeam1Overs());

        match.setTeam2Score(updatedMatch.getTeam2Score());
        match.setTeam2Wickets(updatedMatch.getTeam2Wickets());
        match.setTeam2Overs(updatedMatch.getTeam2Overs());

        match.setTossWinner(updatedMatch.getTossWinner());
        match.setResult(updatedMatch.getResult());

        return matchRepository.save(match);
    }

    public void deleteMatch(Long id) {
        matchRepository.deleteById(id);
    }
}