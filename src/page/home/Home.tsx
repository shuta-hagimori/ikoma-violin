import { Introduce } from "./Introduce";
import { Profile } from "./Profile";
import IkomaViolin from "../../img/ikomaviolin.png";
import { Lesson } from "./Lesson";
export function Home() {
  return (
    <div>
      <div>
        <Introduce />
        <Lesson />
        <Profile />
      </div>
    </div>
  );
}
