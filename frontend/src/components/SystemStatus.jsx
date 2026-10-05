import { motion } from "framer-motion";
import { Server, Database, Zap } from "lucide-react";

function SystemStatus() {

  return (

    <motion.section
      className="system-panel"
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
    >

      <div className="system-left">

        <div className="system-icon">
          <Zap size={19} />
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

        <span>
          <Server size={13} />
          API ONLINE
        </span>

        <span>
          <Database size={13} />
          DATABASE CONNECTED
        </span>

        <span className="system-online">

          <i></i>

          SYSTEM ONLINE

        </span>

      </div>

    </motion.section>

  );
}

export default SystemStatus;