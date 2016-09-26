import * as React from "react";

import { Hello } from "./Hello";

export class Home extends React.Component<any, {}> {
    render() {
        return <Hello compiler="TypeScript" framework="React" />;
    }
}
