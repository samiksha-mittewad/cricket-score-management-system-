import { useEffect, useState } from "react";
import { CircleDot } from "lucide-react";
import { motion } from "framer-motion";
import {
  Activity,
  Database,
  RefreshCw,
  Server,
  Radio,
  Trophy,
  Users,
  Clock3,
} from "lucide-react";

import "./App.css";

const API_BASE = "http://localhost:8080/api";

function App() {
  const [matches, setMatches] = useState([]);
  const [players, setPlayers] = useState([]);

  const [loadingMatches, setLoadingMatches] = useState(true);
  const [loadingPlayers, setLoadingPlayers] = useState(true);

  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  /* -----------------------------
     FETCH MATCHES
  ----------------------------- */

  const loadMatches = async (showRefresh = false) => {
    try {
      if (showRefresh) {
        setRefreshing(true);
      }

      const response = await fetch(`${API_BASE}/matches`);

      if (!response.ok) {
        throw new Error("Failed to fetch matches");
      }

      const data = await response.json();

      setMatches(data);
      setError(false);
      setLastUpdated(new Date());
    } catch (err) {
      console.error("Match API error:", err);
      setError(true);
    } finally {
      setLoadingMatches(false);
      setRefreshing(false);
    }
  };

  /* -----------------------------
     FETCH PLAYERS
  ----------------------------- */

  const loadPlayers = async () => {
    try {
      const response = await fetch(`${API_BASE}/players`);

      if (!response.ok) {
        throw new Error("Failed to fetch players");
      }

      const data = await response.json();

      setPlayers(data);
    } catch (err) {
      console.error("Player API error:", err);
    } finally {
      setLoadingPlayers(false);
    }
  };

  /* -----------------------------
     INITIAL LOAD + LIVE REFRESH
  ----------------------------- */

  useEffect(() => {
    loadMatches();
    loadPlayers();

    const interval = setInterval(() => {
      loadMatches();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* -----------------------------
     HELPERS
  ----------------------------- */

  const formatTime = () => {
    if (!lastUpdated) return "Waiting";

    return lastUpdated.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const liveMatches = matches.filter(
    (match) =>
      match.status &&
      match.status.toUpperCase() === "LIVE"
  );

  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <motion.header
        className="navbar"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <div className="brand">

          <div className="brand-mark">
            CP
          </div>

          <div className="brand-info">
            <h1>CricketPulse</h1>

            <span>
              LIVE SCORE MANAGEMENT
            </span>
          </div>

        </div>

        <div className="nav-right">

          <div className="nav-item active">
            Matches
          </div>

          <div className="nav-item">
            Players
          </div>

          <div className="system-live">
            <span className="system-dot"></span>
            <Activity size={13} />
            SYSTEM LIVE
          </div>

        </div>

      </motion.header>


      {/* =========================
          MAIN
      ========================= */}

      <main className="dashboard">

        {/* =========================
            HERO
        ========================= */}

        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

         <div className="hero-background-circle"></div>

<div className="cricket-animation">

  <div className="pitch">

    <div className="crease crease-one"></div>
    <div className="crease crease-two"></div>

  </div>

  <motion.div
    className="cricket-ball"
    animate={{
      x: [0, 125, 250, 375],
      y: [20, -35, -8, 25],
      rotate: [0, 180, 360, 540],
    }}
    transition={{
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

</div>

          <div className="hero-content">

            <div className="hero-kicker">

              <span className="live-pulse"></span>

              <Radio size={13} />

              LIVE CRICKET CENTRE

            </div>

            <h2>
              Every ball.
              <br />
              <span>Every moment.</span>
            </h2>

            <p>
              Real-time match scores, player statistics
              and match information powered by a
              Spring Boot and MySQL backend.
            </p>

          </div>


          <div className="hero-metrics">

            <div className="hero-metric">

              <Radio size={17} />

              <div>
                <span>STATUS</span>
                <strong>LIVE</strong>
              </div>

            </div>


            <div className="hero-metric">

              <Activity size={17} />

              <div>
                <span>UPDATES</span>
                <strong>5 SEC</strong>
              </div>

            </div>


            <div className="hero-metric">

              <Clock3 size={17} />

              <div>
                <span>LAST SYNC</span>
                <strong>{formatTime()}</strong>
              </div>

            </div>

          </div>

        </motion.section>


        {/* =========================
            MATCH SECTION
        ========================= */}

        <section className="section">

          <div className="section-header">

            <div>

              <span className="section-label">
                LIVE CENTRE
              </span>

              <div className="section-title-row">

                <h2>
                  Current Matches
                </h2>

                <span className="count-badge">
                  {matches.length}
                </span>

              </div>

            </div>


            <button
              className="refresh-button"
              onClick={() => loadMatches(true)}
              disabled={refreshing}
            >

              <RefreshCw
                size={14}
                className={refreshing ? "spinning" : ""}
              />

              {refreshing ? "Updating" : "Refresh"}

            </button>

          </div>


          {/* BACKEND ERROR */}

          {error && (

            <motion.div
              className="error-card"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >

              <div className="error-icon">
                !
              </div>

              <div>

                <strong>
                  Backend connection unavailable
                </strong>

                <p>
                  Make sure Spring Boot is running
                  on port 8080.
                </p>

              </div>

            </motion.div>

          )}


          {/* MATCHES */}

          <div className="matches-grid">

            {loadingMatches ? (

              <div className="state-card">

                <div className="loader"></div>

                <p>
                  Loading match data...
                </p>

              </div>

            ) : matches.length === 0 ? (

              <div className="state-card">

                <div className="state-icon">
                  <Trophy size={25} />
                </div>

                <h3>
                  No matches available
                </h3>

                <p>
                  Create a match through the REST API
                  to display it here.
                </p>

              </div>

            ) : (

              matches.map((match, index) => (

                <MatchCard
                  key={match.id}
                  match={match}
                  index={index}
                />

              ))

            )}

          </div>

        </section>


        {/* =========================
            PLAYER SECTION
        ========================= */}

        <section className="section">

          <div className="section-header">

            <div>

              <span className="section-label">
                PLAYER CENTRE
              </span>

              <div className="section-title-row">

                <h2>
                  Player Statistics
                </h2>

                <span className="count-badge">
                  {players.length}
                </span>

              </div>

            </div>

          </div>


          <div className="players-grid">

            {loadingPlayers ? (

              <div className="state-card">

                <div className="loader"></div>

                <p>
                  Loading player data...
                </p>

              </div>

            ) : players.length === 0 ? (

              <div className="state-card">

                <div className="state-icon">
                  <Users size={25} />
                </div>

                <h3>
                  No players available
                </h3>

                <p>
                  Add players through the REST API.
                </p>

              </div>

            ) : (

              players.map((player, index) => (

                <PlayerCard
                  key={player.id}
                  player={player}
                  index={index}
                />

              ))

            )}

          </div>

        </section>


        {/* =========================
            SYSTEM STATUS
        ========================= */}

        <motion.section
          className="system-panel"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="system-main">

            <div className="system-icon">
              <Activity size={18} />
            </div>

            <div>

              <h3>
                Live Data Engine
              </h3>

              <p>
                React → Spring Boot → MySQL
              </p>

            </div>

          </div>


          <div className="system-services">

            <div>
              <Server size={13} />
              API ONLINE
            </div>

            <div>
              <Database size={13} />
              DATABASE CONNECTED
            </div>

            <div className="online-service">
              <span></span>
              SYSTEM ONLINE
            </div>

          </div>

        </motion.section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}
<footer>

  <div className="footer-brand">

    <strong>
      CricketPulse
    </strong>

    <span>
      • Live Cricket Intelligence
    </span>

  </div>

  <p>
    © 2026 CricketPulse. All rights reserved.
    <span className="footer-divider">|</span>
    Built by <strong>Samiksha Ganesh Mittewad</strong>
  </p>

</footer>

    </div>
  );
}


/* =================================
   MATCH CARD
================================= */

function MatchCard({ match, index }) {

  const isLive =
    match.status?.toUpperCase() === "LIVE";

  return (

    <motion.article
      className="match-card"
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.08
      }}
      whileHover={{
        y: -4
      }}
    >

      <div className="match-accent"></div>


      <div className="match-header">

        <div className="match-status">

          <span
            className={
              isLive
                ? "status-light live"
                : "status-light"
            }
          ></span>

          {match.status || "UPCOMING"}

        </div>


        <div className="venue">
          {match.venue || "Venue TBA"}
        </div>

      </div>


      <div className="teams">

        {/* TEAM 1 */}

        <div className="team-row">

          <div className="team-details">

            <div className="team-badge">
              {match.team1?.charAt(0) || "T"}
            </div>

            <div>

              <strong>
                {match.team1 || "Team 1"}
              </strong>

              <span>
                Batting
              </span>

            </div>

          </div>


          <div className="score">

            <strong>
              {match.team1Score ?? 0}
              <small>
                /{match.team1Wickets ?? 0}
              </small>
            </strong>

            <span>
              {match.team1Overs ?? 0} overs
            </span>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="versus">

          <span></span>

          <b>VS</b>

          <span></span>

        </div>


        {/* TEAM 2 */}

        <div className="team-row">

          <div className="team-details">

            <div className="team-badge secondary">
              {match.team2?.charAt(0) || "T"}
            </div>

            <div>

              <strong>
                {match.team2 || "Team 2"}
              </strong>

              <span>
                Bowling
              </span>

            </div>

          </div>


          <div className="score">

            <strong>
              {match.team2Score ?? 0}
              <small>
                /{match.team2Wickets ?? 0}
              </small>
            </strong>

            <span>
              {match.team2Overs ?? 0} overs
            </span>

          </div>

        </div>

      </div>


      <div className="match-footer">

        <div>

          <Trophy size={13} />

          {match.result
            ? match.result
            : match.tossWinner
              ? `${match.tossWinner} won the toss`
              : "Match in progress"}

        </div>

        {isLive && (
          <span className="live-text">
            LIVE
          </span>
        )}

      </div>

    </motion.article>
  );
}


/* =================================
   PLAYER CARD
================================= */

function PlayerCard({ player, index }) {

  return (

    <motion.article
      className="player-card"
      initial={{
        opacity: 0,
        y: 18
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.07
      }}
      whileHover={{
        y: -4
      }}
    >

      <div className="player-header">

        <div className="player-avatar">

          {player.name
            ?.split(" ")
            .map(word => word[0])
            .slice(0, 2)
            .join("")
            .toUpperCase()}

        </div>


        <div className="player-info">

          <h3>
            {player.name}
          </h3>

          <p>
            {player.team || "Team"} ·{" "}
            {player.role || "Player"}
          </p>

        </div>

      </div>


      <div className="player-stats">

        <div className="player-stat">

          <span>
            RUNS
          </span>

          <strong>
            {player.runs ?? 0}
          </strong>

        </div>


        <div className="player-stat">

          <span>
            WICKETS
          </span>

          <strong>
            {player.wickets ?? 0}
          </strong>

        </div>


        <div className="player-stat">

          <span>
            MATCHES
          </span>

          <strong>
            {player.matches ?? 0}
          </strong>

        </div>

      </div>

    </motion.article>
  );
}


export default App;