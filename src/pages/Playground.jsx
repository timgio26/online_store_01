import { Button3d } from "../ui/Button3d";
import { RocketContainer } from "../ui/RocketContainer";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Status } from "../ui/Status";
import { AiChef } from "./AiChef";

export function Playground() {
  // error;
  return (
    <div>
      <div>
        <Button3d />
        <Status />
      </div>

      <div>
        <RocketContainer />
      </div>

      <div>
        <AiChef/>
      </div>

    </div>
  );
}
