// SVG Loader for Reality Creation Assessment
// This script injects the full SVG diagram into the introduction page
document.addEventListener('DOMContentLoaded', function() {
  // Get the diagram container
  const diagramContainer = document.getElementById('diagram-container');
  
  if (!diagramContainer) {
    console.error("Diagram container not found");
    return;
  }

  // Remove any background canvas and make container transparent
  // This helps when embedded in Squarespace
  document.body.style.backgroundColor = 'transparent';
  
  const backgroundCanvases = document.querySelectorAll('.background-canvas');
  backgroundCanvases.forEach(canvas => {
    canvas.style.display = 'none';
  });

  // Inject the full SVG diagram (including all extra labels)
  diagramContainer.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1018.81 1105.68"
      class="w-full h-auto"
    >
      <defs>
        <style>
          .cls-1 {
            fill: none;
            stroke: #7b7975;
            stroke-miterlimit: 10;
          }
          .cls-2,
          .cls-3,
          .cls-4 {
            isolation: isolate;
          }
          .cls-2,
          .cls-4 {
            fill: #5a5753;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif;
            font-size: 30px;
            font-weight: 300;
          }
          /* These extra classes were used for letter-spacing or partial words in the original SVG */
          .cls-5 { letter-spacing: 0em; }
          .cls-6 { letter-spacing: 0em; }
          .cls-7 { letter-spacing: 0em; }
          .cls-8 { letter-spacing: 0em; }
          .cls-4 { letter-spacing: .04em; }
          .cls-9 { letter-spacing: -.02em; }
          .cls-10 { letter-spacing: 0em; }
          .cls-11 { letter-spacing: 0em; }
          .cls-12 { letter-spacing: 0em; }
          .cls-13 { letter-spacing: 0em; }
          .cls-14 { letter-spacing: .02em; }
          .cls-15 { letter-spacing: .01em; }
        </style>
      </defs>
      <g id="Layer_1-2">
        <!-- "Reality Creation Typology" Circle & Text -->
        <circle class="cls-1" cx="430.34" cy="150.87" r="129.37"/>
        <g class="cls-3">
          <text class="cls-2" transform="translate(324.52 145.25)">
            <tspan x="0" y="0">R</tspan>
          </text>
          <text class="cls-2" transform="translate(341.63 145.25)">
            <tspan x="0" y="0">eali</tspan>
            <tspan class="cls-15" x="44.46" y="0">t</tspan>
            <tspan class="cls-8" x="54.93" y="0">y C</tspan>
          </text>
          <text class="cls-2" transform="translate(438.59 145.25)">
            <tspan x="0" y="0">r</tspan>
          </text>
          <text class="cls-2" transform="translate(448.62 145.25)">
            <tspan x="0" y="0">eation</tspan>
          </text>
          <text class="cls-2" transform="translate(367.63 181.25)">
            <tspan x="0" y="0">T</tspan>
          </text>
          <text class="cls-2" transform="translate(381.69 181.25)">
            <tspan x="0" y="0">ypology</tspan>
          </text>
        </g>

        <!-- "Mastery Assessment" Circle & Text -->
        <circle class="cls-1" cx="768.68" cy="502.22" r="129.37"/>
        <g class="cls-3">
          <text class="cls-2" transform="translate(715.45 488.03)">
            <tspan x="0" y="0">Mas</tspan>
          </text>
          <text class="cls-2" transform="translate(770.38 488.03)">
            <tspan x="0" y="0">t</tspan>
          </text>
          <text class="cls-2" transform="translate(780.31 488.03)">
            <tspan x="0" y="0">e</tspan>
          </text>
          <text class="cls-4" transform="translate(796 488.03)">
            <tspan x="0" y="0">r</tspan>
          </text>
          <text class="cls-2" transform="translate(807.63 488.03)">
            <tspan x="0" y="0">y</tspan>
          </text>
          <text class="cls-2" transform="translate(691.49 524.03)">
            <tspan x="0" y="0">Asses</tspan>
            <tspan class="cls-6" x="82.35" y="0">s</tspan>
            <tspan x="97.77" y="0">ment</tspan>
          </text>
        </g>

        <!-- "Personalized Results" Circle & Text -->
        <circle class="cls-1" cx="482.82" cy="866.72" r="129.37"/>
        <g class="cls-3">
          <text class="cls-2" transform="translate(398.83 862.87)">
            <tspan x="0" y="0">P</tspan>
          </text>
          <text class="cls-2" transform="translate(414.52 862.87)">
            <tspan x="0" y="0">e</tspan>
          </text>
          <text class="cls-2" transform="translate(430.21 862.87)">
            <tspan x="0" y="0">r</tspan>
          </text>
          <text class="cls-2" transform="translate(440.84 862.87)">
            <tspan x="0" y="0">sonali</tspan>
            <tspan class="cls-11" x="77.46" y="0">z</tspan>
            <tspan x="90.9" y="0">ed</tspan>
          </text>
          <text class="cls-2" transform="translate(435.5 898.87)">
            <tspan x="0" y="0">R</tspan>
          </text>
          <text class="cls-2" transform="translate(452.61 898.87)">
            <tspan x="0" y="0">esults</tspan>
          </text>
        </g>

        <!-- Spoke Labels (top-right) -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(750.78 25.71)">
            <tspan x="0" y="0">Cogniti</tspan>
          </text>
          <text class="cls-2" transform="translate(846.27 25.71)">
            <tspan x="0" y="0">v</tspan>
          </text>
          <text class="cls-2" transform="translate(860.47 25.71)">
            <tspan x="0" y="0">e Alignment</tspan>
          </text>
        </g>
        <g class="cls-3">
          <text class="cls-2" transform="translate(747.33 119.48)">
            <tspan x="0" y="0">P</tspan>
          </text>
          <text class="cls-2" transform="translate(763.02 119.48)">
            <tspan x="0" y="0">e</tspan>
          </text>
          <text class="cls-2" transform="translate(778.71 119.48)">
            <tspan x="0" y="0">r</tspan>
          </text>
          <text class="cls-2" transform="translate(788.74 119.48)">
            <tspan x="0" y="0">ceptual Focus</tspan>
          </text>
        </g>

        <!-- Spoke Labels (top-left) -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(10.87 102.04)">
            <tspan x="0" y="0">R</tspan>
          </text>
          <text class="cls-2" transform="translate(27.98 102.04)">
            <tspan x="0" y="0">esonance</tspan>
          </text>
          <text class="cls-2" transform="translate(50.54 138.04)">
            <tspan x="0" y="0">Field</tspan>
          </text>
        </g>
        <g class="cls-3">
          <text class="cls-2" transform="translate(11.87 218.85)">
            <tspan x="0" y="0">Kinetic Dri</tspan>
          </text>
          <text class="cls-2" transform="translate(147.44 218.85)">
            <tspan x="0" y="0">v</tspan>
          </text>
          <text class="cls-2" transform="translate(161.64 218.85)">
            <tspan x="0" y="0">e</tspan>
          </text>
        </g>

        <!-- Spoke Labels (middle-left) -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(0 298.02)">
            <tspan x="0" y="0">Manifes</tspan>
            <tspan class="cls-6" x="105.03" y="0">t</tspan>
            <tspan class="cls-5" x="115.14" y="0">ation</tspan>
          </text>
          <text class="cls-2" transform="translate(39.58 334.02)">
            <tspan x="0" y="0">Rh</tspan>
          </text>
          <text class="cls-2" transform="translate(74.5 334.02)">
            <tspan x="0" y="0">y</tspan>
          </text>
          <text class="cls-2" transform="translate(89.11 334.02)">
            <tspan x="0" y="0">thm</tspan>
          </text>
        </g>

        <!-- Spoke Labels (middle-right) -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(746.9 216.37)">
            <tspan x="0" y="0">Choice N</tspan>
            <tspan class="cls-12" x="121.74" y="0">a</tspan>
            <tspan class="cls-8" x="137.43" y="0">vigation</tspan>
          </text>
        </g>

        <!-- Acceptance & Alignment Needs -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(260.6 374.2)">
            <tspan class="cls-10" x="0" y="0">A</tspan>
            <tspan x="19.44" y="0">ccep</tspan>
            <tspan class="cls-7" x="86.46" y="0">t</tspan>
            <tspan x="96.57" y="0">ance &amp; Alignment Needs</tspan>
          </text>
        </g>

        <!-- Lines connecting circles -->
        <path class="cls-1" d="M712.6,19.45s-51.84.27-97.78,47.62c-45.94,47.35-61.48,43.11-61.48,43.11"/>
        <path class="cls-1" d="M713.05,109.1s-37.38-.81-71.34,15.56c-26.7,12.87-73.52,20.03-82.21,15.87"/>
        <path class="cls-1" d="M558.61,169.28s38.77,8.68,56.13,16.2,45.13,24.88,97.21,24.3"/>
        <path class="cls-1" d="M205.83,285.69s29.07,7,75.58-39.79c26.39-26.55,38.08-28.2,38.08-28.2"/>
        <path class="cls-1" d="M193.61,208.68s29.86-4.58,52.91-15.92c23.06-11.34,44.19-12.69,58.67-11.18"/>
        <path class="cls-1" d="M305.61,116.78s-26.79-3.25-44.32-10.36c-27.5-11.15-46.25-19.79-86.49-14.35"/>
        <path class="cls-1" d="M548.28,203s28.13,11.85,42.2,41.46c14.07,29.61,7.83,62.68,30.21,99.83"/>
        <path class="cls-1" d="M672.27,414.89s-22.33-12.3-30.28-32.16"/>
        <path class="cls-1" d="M639.54,512.22s-35.75-1.52-63.82,27c-25.27,25.67-33.52,78.09-45.33,103.1s-36.91,38.91-36.91,38.91"/>
        <path class="cls-1" d="M766.14,632.59s-.44,72.27-29.21,90.49"/>
        <path class="cls-1" d="M404.66,762.11s-13.17-15.36-.88-52.67"/>
        <path class="cls-1" d="M575.55,775.81s7.14-8.48,23.66-12.94"/>
        <path class="cls-1" d="M387.71,954.73s-9.85,8.06-10.75,17.92"/>
        <path class="cls-1" d="M556.13,974.89s21.05,23.74,19.26,64.95"/>
        <path class="cls-1" d="M613.22,868.25s37.91-.34,66.58,34.89"/>

        <!-- Growth & Permission Areas -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(696.56 910.2)">
            <tspan x="0" y="0">G</tspan>
          </text>
          <text class="cls-2" transform="translate(717.14 910.2)">
            <tspan x="0" y="0">r</tspan>
          </text>
          <text class="cls-2" transform="translate(727.18 910.2)">
            <tspan class="cls-13" x="0" y="0">o</tspan>
            <tspan class="cls-14" x="17.49" y="0">w</tspan>
            <tspan x="39.36" y="0">th &amp;</tspan>
          </text>
          <text class="cls-2" transform="translate(649.47 946.2)">
            <tspan x="0" y="0">P</tspan>
          </text>
          <text class="cls-2" transform="translate(665.16 946.2)">
            <tspan x="0" y="0">e</tspan>
          </text>
          <text class="cls-2" transform="translate(680.85 946.2)">
            <tspan x="0" y="0">r</tspan>
          </text>
          <text class="cls-2" transform="translate(691.22 946.2)">
            <tspan x="0" y="0">mission A</tspan>
          </text>
          <text class="cls-2" transform="translate(819.18 946.2)">
            <tspan x="0" y="0">r</tspan>
          </text>
          <text class="cls-2" transform="translate(829.21 946.2)">
            <tspan x="0" y="0">eas</tspan>
          </text>
        </g>

        <!-- Natural Energy Patterns -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(378.45 503.37)">
            <tspan x="0" y="0">Natural Ene</tspan>
          </text>
          <text class="cls-2" transform="translate(532.32 503.37)">
            <tspan x="0" y="0">r</tspan>
          </text>
          <text class="cls-2" transform="translate(542.35 503.37)">
            <tspan x="0" y="0">gy</tspan>
          </text>
          <text class="cls-2" transform="translate(423.01 539.37)">
            <tspan x="0" y="0">P</tspan>
          </text>
          <text class="cls-2" transform="translate(438.85 539.37)">
            <tspan x="0" y="0">at</tspan>
          </text>
          <text class="cls-2" transform="translate(464.28 539.37)">
            <tspan x="0" y="0">t</tspan>
          </text>
          <text class="cls-2" transform="translate(474.21 539.37)">
            <tspan x="0" y="0">e</tspan>
          </text>
          <text class="cls-2" transform="translate(489.9 539.37)">
            <tspan x="0" y="0">r</tspan>
          </text>
          <text class="cls-2" transform="translate(500.27 539.37)">
            <tspan x="0" y="0">ns</tspan>
          </text>
        </g>

        <!-- Common Misalignments -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(160.99 696.93)">
            <tspan x="0" y="0">Common Mi</tspan>
            <tspan class="cls-6" x="161.67" y="0">s</tspan>
            <tspan class="cls-5" x="177.09" y="0">alignments</tspan>
          </text>
        </g>

        <!-- Ideal Approaches -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(148.17 1013.68)">
            <tspan x="0" y="0">Ideal App</tspan>
          </text>
          <text class="cls-2" transform="translate(271.99 1013.68)">
            <tspan class="cls-9" x="0" y="0">r</tspan>
            <tspan x="9.99" y="0">o</tspan>
          </text>
          <text class="cls-2" transform="translate(299.21 1013.68)">
            <tspan x="0" y="0">aches</tspan>
          </text>
        </g>

        <!-- Typology Insights -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(482.59 1080.75)">
            <tspan x="0" y="0">T</tspan>
          </text>
          <text class="cls-2" transform="translate(496.65 1080.75)">
            <tspan x="0" y="0">ypology Insights</tspan>
          </text>
        </g>

        <!-- Reality Creation Strategies -->
        <g class="cls-3">
          <text class="cls-2" transform="translate(574.96 749.69)">
            <tspan x="0" y="0">R</tspan>
          </text>
          <text class="cls-2" transform="translate(592.07 749.69)">
            <tspan x="0" y="0">eali</tspan>
            <tspan class="cls-15" x="44.46" y="0">t</tspan>
            <tspan class="cls-8" x="54.93" y="0">y C</tspan>
          </text>
          <text class="cls-2" transform="translate(689.03 749.69)">
            <tspan x="0" y="0">r</tspan>
          </text>
          <text class="cls-2" transform="translate(699.06 749.69)">
            <tspan x="0" y="0">eation </tspan>
          </text>
          <text class="cls-2" transform="translate(790.22 749.69)">
            <tspan x="0" y="0">S</tspan>
          </text>
          <text class="cls-2" transform="translate(808.19 749.69)">
            <tspan class="cls-6" x="0" y="0">t</tspan>
            <tspan x="10.11" y="0">ra</tspan>
          </text>
          <text class="cls-2" transform="translate(844.05 749.69)">
            <tspan x="0" y="0">t</tspan>
          </text>
          <text class="cls-2" transform="translate(853.98 749.69)">
            <tspan x="0" y="0">egies</tspan>
          </text>
        </g>
      </g>
    </svg>
  `;
});
