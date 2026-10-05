import { motion } from "framer-motion";
import {
  UserRound,
  Activity,
  Target
} from "lucide-react";

function PlayerCard({ player, index }) {

  return (

    <motion.article
      className="player-card"
      initial={{
        opacity: 0,
        y: 25
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.1
      }}
      whileHover={{
        y: -6
      }}
    >

      <div className="player-top">

        <div className="player-avatar">

          <UserRound size={22} />

        </div>


        <div>

          <h3>
            {player.name}
          </h3>

          <p>
            {player.team} • {player.role}
          </p>

        </div>

      </div>


      <div className="player-stats">

        <div className="stat">

          <Activity size={14} />

          <strong>
            {player.runs ?? 0}
          </strong>

          <span>
            Runs
          </span>

        </div>


        <div className="stat">

          <Target size={14} />

          <strong>
            {player.wickets ?? 0}
          </strong>

          <span>
            Wickets
          </span>

        </div>


        <div className="stat">

          <strong>
            {player.matches ?? 0}
          </strong>

          <span>
            Matches
          </span>

        </div>

      </div>

    </motion.article>

  );
}

export default PlayerCard;