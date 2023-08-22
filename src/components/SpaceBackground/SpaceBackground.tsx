import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { config } from "./config";

function SpaceBackground() {
   const initialize = useCallback(async (engine: Engine) => {
      await loadFull(engine);
   }, []);

   return <Particles init={initialize} options={config} />;
}

export default SpaceBackground;
