import { SECOND } from "~/constants";

export default function(req, res) {
	res.end(`Hello from TypeScript on Now 2.0! ${SECOND}`);
}
