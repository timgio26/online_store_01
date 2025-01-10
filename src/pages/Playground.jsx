import { Button3d } from "../ui/Button3d";
import { RocketContainer } from "../ui/RocketContainer";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Status } from "../ui/Status";

export function Playground() {
  // error;
  return (
    <div className="w-svw">
        
      <div className="h-svh">
        {/* <div> */}

        <Button3d />
        {/* </div> */}
        <Status />
      </div>

      <div className="h-svh bg-slate-500">
        
      </div>

      <RocketContainer />
      {/* <ScrollAnimation/> */}
      
    </div>
  );
}
