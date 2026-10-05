import { motion } from "framer-motion";
import {
  MapPin,
  Trophy,
  CircleDot
} from "lucide-react";

function MatchCard({ match, index }) {

  return (

    <motion.article
      className="match-card"
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.12
      }}
      whileHover={{
        y: -8
      }}
    >

      <div className="match-card-line"></div>


      <div className="match-top">

        <div className="match-status">

          <CircleDot size={14} />

          {match.status || "UPCOMING"}

        </div>


        <div className="venue">

          <MapPin size={13} />

          {match.venue || "Venue TBA"}

        </div>

      </div>


      <div className="teams">


        {/* TEAM 1 */}

        <div className="team">

          <div className="team-info">

            <div className="team-logo">
              {match.team1?.charAt(0)}
            </div>

            <div>

              <span className="team-name">
                {match.team1}
              </span>

              <span className="team-label">
                Batting
              </span>

            </div>

          </div>


          <div className="team-score">

            <strong>
              {match.team1Score ?? 0}
              <span>
                /
                {match.team1Wickets ?? 0}
              </span>
            </strong>

            <small>
              {match.team1Overs ?? 0} overs
            </small>

          </div>

        </div>


        <div className="vs">
          VS
        </div>


        {/* TEAM 2 */}

        <div className="team">

          <div className="team-info">

            <div className="team-logo team-logo-second">
              {match.team2?.charAt(0)}
            </div>

            <div>

              <span className="team-name">
                {match.team2}
              </span>

              <span className="team-label">
                Bowling
              </span>

            </div>

          </div>


          <div className="team-score">

            <strong>
              {match.team2Score ?? 0}
              <span>
                /
                {match.team2Wickets ?? 0}
              </span>
            </strong>

            <small>
              {match.team2Overs ?? 0} overs
            </small>

          </div>

        </div>

      </div>


      <div className="match-result">

        <Trophy size={14} />

        {match.result
          ? match.result
          : match.tossWinner
            ? `${match.tossWinner} won the toss`
            : "Match in progress"
        }

      </div>

    </motion.article>

  );
}

export default MatchCard;