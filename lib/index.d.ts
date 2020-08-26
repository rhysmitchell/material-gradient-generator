interface Colours {
    Red: string;
    Pink: string;
    Purple: string;
    DeepPurple: string;
    Indigo: string;
    Blue: string;
    LightBlue: string;
    Cyan: string;
    Teal: string;
    Green: string;
    LightGreen: string;
    Lime: string;
    Yellow: string;
    Amber: string;
    Orange: string;
    DeepOrange: string;
    Brown: string;
    Grey: string;
    BlueGrey: string;
}
declare class MaterialGradientGenerator {
    _gradientGenerator: IterableIterator<string>;
    _excludeRed?: boolean;
    _colours: Colours;
    _darkShade?: number;
    _lightShade?: number;
    _step?: number;
    /**
     * Sets 'exclude red', 'skip'.
     * Returns gradient collection as GENERATOR.
     **/
    constructor(excludeRed?: boolean, darkShade?: number, lightShade?: number, _step?: number);
    _initializeColours(): Colours;
    /**
     * Returns iterable generator of material gradent css properties.
     **/
    _initializeGradientGenerator(): IterableIterator<string>;
    /**
     * Interfaces with iterable generator to get the 'next' colour in the generator.
     * The gradient generator will re-instantiate if 'done'.
     **/
    NextColour(): IteratorResult<string>;
}
export { MaterialGradientGenerator as materialGradientGenerator };
//# sourceMappingURL=index.d.ts.map