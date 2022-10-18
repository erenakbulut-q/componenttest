import logo from './logo.svg';

import { acai } from "react-json-prettify/dist/themes"
import { atomOneLight } from "react-json-prettify/dist/themes"
import { monokaiSublime } from "react-json-prettify/dist/themes"
import { codepenEmbed } from "react-json-prettify/dist/themes"
import { obsidian } from "react-json-prettify/dist/themes"
import { agate } from "react-json-prettify/dist/themes"
import { colorBrewer } from "react-json-prettify/dist/themes"
import { ocean } from "react-json-prettify/dist/themes"
import { androidStudio } from "react-json-prettify/dist/themes"
import { darcula } from "react-json-prettify/dist/themes"
import { paraisoDark } from "react-json-prettify/dist/themes"
import { arduinoLight } from "react-json-prettify/dist/themes"
import { dark } from "react-json-prettify/dist/themes"
import { paraisoLight } from "react-json-prettify/dist/themes"
import { arta } from "react-json-prettify/dist/themes"
import { darkula } from "react-json-prettify/dist/themes"
import { pojoaque } from "react-json-prettify/dist/themes"
import { ascetic } from "react-json-prettify/dist/themes"
import { pureBasic } from "react-json-prettify/dist/themes"
import { atelierCaveDark } from "react-json-prettify/dist/themes"
import { docco } from "react-json-prettify/dist/themes"
import { qtcreatorDark } from "react-json-prettify/dist/themes"
import { atelierCaveLight } from "react-json-prettify/dist/themes"
import { dracula } from "react-json-prettify/dist/themes"
import { qtcreatorLight } from "react-json-prettify/dist/themes"
import { atelierDuneDark } from "react-json-prettify/dist/themes"
import { far } from "react-json-prettify/dist/themes"
import { railscasts } from "react-json-prettify/dist/themes"
import { atelierDuneLight } from "react-json-prettify/dist/themes"
import { foundation } from "react-json-prettify/dist/themes"
import { rainbow } from "react-json-prettify/dist/themes"
import { atelierEstuaryDark } from "react-json-prettify/dist/themes"
import { github } from "react-json-prettify/dist/themes"
import { routeros } from "react-json-prettify/dist/themes"
import { atelierEstuaryLight } from "react-json-prettify/dist/themes"
import { githubGist } from "react-json-prettify/dist/themes"
import { schoolbook } from "react-json-prettify/dist/themes"
import { atelierForestDark } from "react-json-prettify/dist/themes"
import { googlecode } from "react-json-prettify/dist/themes"
import { solarizedDark } from "react-json-prettify/dist/themes"
import { atelierForestLight } from "react-json-prettify/dist/themes"
import { grayscale } from "react-json-prettify/dist/themes"
import { solarizedLight } from "react-json-prettify/dist/themes"
import { atelierHealthDark } from "react-json-prettify/dist/themes"
import { gruvboxDark } from "react-json-prettify/dist/themes"
import { sunburst } from "react-json-prettify/dist/themes"
import { atelierHealthLight } from "react-json-prettify/dist/themes"
import { gruvboxLight } from "react-json-prettify/dist/themes"
import { tomorrow } from "react-json-prettify/dist/themes"
import { atelierLakesideDark } from "react-json-prettify/dist/themes"
import { hopscotch } from "react-json-prettify/dist/themes"
import { tomorrowNight } from "react-json-prettify/dist/themes"
import { atelierLakesideLight } from "react-json-prettify/dist/themes"
import { hybrid } from "react-json-prettify/dist/themes"
import { tomorrowNightBlue } from "react-json-prettify/dist/themes"
import { atelierPlateauDark } from "react-json-prettify/dist/themes"
import { idea } from "react-json-prettify/dist/themes"
import { tomorrowNightBright } from "react-json-prettify/dist/themes"
import { atelierPlateauLight } from "react-json-prettify/dist/themes"
import { tomorrowNightEighties } from "react-json-prettify/dist/themes"
import { atelierSavannaDark } from "react-json-prettify/dist/themes"
import { irBlack } from "react-json-prettify/dist/themes"
import { vs } from "react-json-prettify/dist/themes"
import { atelierSavannaLight } from "react-json-prettify/dist/themes"
import { kimbieDark } from "react-json-prettify/dist/themes"
import { vs2015 } from "react-json-prettify/dist/themes"
import { atelierSeasideDark } from "react-json-prettify/dist/themes"
import { kimbieLight } from "react-json-prettify/dist/themes"
import { xcode } from "react-json-prettify/dist/themes"
import { atelierSeasideLight } from "react-json-prettify/dist/themes"
import { leet } from "react-json-prettify/dist/themes"
import { xt256 } from "react-json-prettify/dist/themes"
import { atelierSulphurpoolDark } from "react-json-prettify/dist/themes"
import { magula } from "react-json-prettify/dist/themes"
import { zenburn } from "react-json-prettify/dist/themes"
import { atelierSulphurpoolLight } from "react-json-prettify/dist/themes"
import { monoBlue } from "react-json-prettify/dist/themes"
import { atomOneDark } from "react-json-prettify/dist/themes"
import { monokai } from "react-json-prettify/dist/themes"




import JSONPretty from 'react-json-prettify';

const json = {
  name: 'John Doe',
  age: 20,
  admin: true,
  member: null,
  permissions: ['read', 'write', 'edit'],
  deep: [
    {
      a: {
        b: {
          c: null,
          d: ['e', 'f', [1, null]],
        },
      },
    },
  ],
};
function App() {
  return (
    <div className="App">
      <div style={{marginBottom: 100}} >
        <p>acai</p>
        <JSONPretty json={json} theme={acai} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atomOneLight</p>
        <JSONPretty json={json} theme={atomOneLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>monokaiSublime</p>
        <JSONPretty json={json} theme={monokaiSublime} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>codepenEmbed</p>
        <JSONPretty json={json} theme={codepenEmbed} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>obsidian</p>
        <JSONPretty json={json} theme={obsidian} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>agate</p>
        <JSONPretty json={json} theme={agate} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>colorBrewer</p>
        <JSONPretty json={json} theme={colorBrewer} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>ocean</p>
        <JSONPretty json={json} theme={ocean} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>androidStudio</p>
        <JSONPretty json={json} theme={androidStudio} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>darcula</p>
        <JSONPretty json={json} theme={darcula} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>paraisoDark</p>
        <JSONPretty json={json} theme={paraisoDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>arduinoLight</p>
        <JSONPretty json={json} theme={arduinoLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>dark</p>
        <JSONPretty json={json} theme={dark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>paraisoLight</p>
        <JSONPretty json={json} theme={paraisoLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>arta</p>
        <JSONPretty json={json} theme={arta} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>darkula</p>
        <JSONPretty json={json} theme={darkula} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>pojoaque</p>
        <JSONPretty json={json} theme={pojoaque} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>ascetic</p>
        <JSONPretty json={json} theme={ascetic} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>pureBasic</p>
        <JSONPretty json={json} theme={pureBasic} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierCaveDark</p>
        <JSONPretty json={json} theme={atelierCaveDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>docco</p>
        <JSONPretty json={json} theme={docco} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>qtcreatorDark</p>
        <JSONPretty json={json} theme={qtcreatorDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierCaveLight</p>
        <JSONPretty json={json} theme={atelierCaveLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>dracula</p>
        <JSONPretty json={json} theme={dracula} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>qtcreatorLight</p>
        <JSONPretty json={json} theme={qtcreatorLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierDuneDark</p>
        <JSONPretty json={json} theme={atelierDuneDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>far</p>
        <JSONPretty json={json} theme={far} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>railscasts</p>
        <JSONPretty json={json} theme={railscasts} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierDuneLight</p>
        <JSONPretty json={json} theme={atelierDuneLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>foundation</p>
        <JSONPretty json={json} theme={foundation} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>rainbow</p>
        <JSONPretty json={json} theme={rainbow} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierEstuaryDark</p>
        <JSONPretty json={json} theme={atelierEstuaryDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>github</p>
        <JSONPretty json={json} theme={github} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>routeros</p>
        <JSONPretty json={json} theme={routeros} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierEstuaryLight</p>
        <JSONPretty json={json} theme={atelierEstuaryLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>githubGist</p>
        <JSONPretty json={json} theme={githubGist} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>schoolbook</p>
        <JSONPretty json={json} theme={schoolbook} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierForestDark</p>
        <JSONPretty json={json} theme={atelierForestDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>googlecode</p>
        <JSONPretty json={json} theme={googlecode} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>solarizedDark</p>
        <JSONPretty json={json} theme={solarizedDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierForestLight</p>
        <JSONPretty json={json} theme={atelierForestLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>grayscale</p>
        <JSONPretty json={json} theme={grayscale} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>solarizedLight</p>
        <JSONPretty json={json} theme={solarizedLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierHealthDark</p>
        <JSONPretty json={json} theme={atelierHealthDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>gruvboxDark</p>
        <JSONPretty json={json} theme={gruvboxDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>sunburst</p>
        <JSONPretty json={json} theme={sunburst} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierHealthLight</p>
        <JSONPretty json={json} theme={atelierHealthLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>gruvboxLight</p>
        <JSONPretty json={json} theme={gruvboxLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>tomorrow</p>
        <JSONPretty json={json} theme={tomorrow} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierLakesideDark</p>
        <JSONPretty json={json} theme={atelierLakesideDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>hopscotch</p>
        <JSONPretty json={json} theme={hopscotch} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>tomorrowNight</p>
        <JSONPretty json={json} theme={tomorrowNight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierLakesideLight</p>
        <JSONPretty json={json} theme={atelierLakesideLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>hybrid</p>
        <JSONPretty json={json} theme={hybrid} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>tomorrowNightBlue</p>
        <JSONPretty json={json} theme={tomorrowNightBlue} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierPlateauDark</p>
        <JSONPretty json={json} theme={atelierPlateauDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>idea</p>
        <JSONPretty json={json} theme={idea} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>tomorrowNightBright</p>
        <JSONPretty json={json} theme={tomorrowNightBright} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierPlateauLight</p>
        <JSONPretty json={json} theme={atelierPlateauLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>tomorrowNightEighties</p>
        <JSONPretty json={json} theme={tomorrowNightEighties} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierSavannaDark</p>
        <JSONPretty json={json} theme={atelierSavannaDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>irBlack</p>
        <JSONPretty json={json} theme={irBlack} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>vs</p>
        <JSONPretty json={json} theme={vs} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierSavannaLight</p>
        <JSONPretty json={json} theme={atelierSavannaLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>kimbieDark</p>
        <JSONPretty json={json} theme={kimbieDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>vs2015</p>
        <JSONPretty json={json} theme={vs2015} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierSeasideDark</p>
        <JSONPretty json={json} theme={atelierSeasideDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>kimbieLight</p>
        <JSONPretty json={json} theme={kimbieLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>xcode</p>
        <JSONPretty json={json} theme={xcode} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierSeasideLight</p>
        <JSONPretty json={json} theme={atelierSeasideLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>leet</p>
        <JSONPretty json={json} theme={leet} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>xt256</p>
        <JSONPretty json={json} theme={xt256} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierSulphurpoolDark</p>
        <JSONPretty json={json} theme={atelierSulphurpoolDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>magula</p>
        <JSONPretty json={json} theme={magula} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>zenburn</p>
        <JSONPretty json={json} theme={zenburn} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atelierSulphurpoolLight</p>
        <JSONPretty json={json} theme={atelierSulphurpoolLight} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>monoBlue</p>
        <JSONPretty json={json} theme={monoBlue} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>atomOneDark</p>
        <JSONPretty json={json} theme={atomOneDark} />
      </div>
      <div style={{marginBottom: 100}} >
        <p>monokai</p>
        <JSONPretty json={json} theme={monokai} />
      </div>

    </div>
  );
}

export default App;
