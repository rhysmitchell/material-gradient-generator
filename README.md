# Material Gradient Generator #

Intended use case is mainly for React when you need to iterate over items in a list and apply
a soft, linear gradient to them, i.e. buttons or dashboard items.

- Install the package:
  - `npm i material-gradient-generator --save`

- Import the gradient genetator:
  - `import { materialGradientGenerator } from "material-gradient-generator";`

- Use the generator! 🔥
  - `const colourGen = new materialGradientGenerator(false, 500, 200, 2);`
  - `const nextColour = colourGen.NextColour();`

```javascript
// excludeRed?: boolean
// darkShade?: number
// lightShade?: number
// _step?: number
const colourGen = new materialGradientGenerator(false, 500, 200, 2);
const nextColour = colourGen.NextColour();

<button className='btn btn-light' style={{ margin: "5px", backgroundImage: `${nextColour}` }}
    <i className='fa fa-free-code-camp'></i>
</button>

<button className='btn btn-light' style={{ margin: "5px", backgroundImage: `${nextColour}` }}
    <i className='fa fa-diamond'></i>
</button>

<button className='btn btn-light' style={{ margin: "5px", backgroundImage: `${nextColour}` }}
    <i className='fa fa-paper-plane'></i>
</button>
```

[EXAMPLE](https://codesandbox.io/s/external-ts-module-test-906ys).
