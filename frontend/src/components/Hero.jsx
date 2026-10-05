import { motion } from "framer-motion";
import { Radio, Activity, Clock3 } from "lucide-react";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="hero-main">
        <div className="hero-kicker">
          <span className="live-pulse"></span>
          LIVE CRICKET CENTRE
        </div>

        <h2>
          Every ball.
          <br />
          <span>Every moment.</span>
        </h2>

        <p>
          Real-time match scores, player statistics and match
          information in one place.
        </p>
      </div>

      <div className="hero-meta">
        <div className="meta-item">
          <Radio size={17} />
          <div>
            <span>STATUS</span>
            <strong>LIVE</strong>
          </div>
        </div>

        <div className="meta-item">
          <Activity size={17} />
          <div>
            <span>UPDATES</span>
            <strong>REAL TIME</strong>
          </div>
        </div>

        <div className="meta-item">
          <Clock3 size={17} />
          <div>
            <span>REFRESH</span>
            <strong>5 SEC</strong>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;