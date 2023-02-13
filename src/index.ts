import { Auth } from "./auth";
import { Base } from "./base";
import { Connote } from "./connote";
import { applyMixins } from "./utils";


class Poslaju extends Base {}
interface Poslaju extends Auth, Connote {}
applyMixins(Poslaju, [Auth, Connote]);

export default Poslaju;