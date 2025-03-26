// SVG Loader for Reality Creation Assessment
// This script injects the FULL diagram with merged text labels
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

  // Inject the SVG diagram directly (with unified text labels)
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
          .cls-2 {
            fill: #5a5753;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif;
            font-size: 30px;
            font-weight: 300;
            isolation: isolate;
          }
        </style>
      </defs>

      <!-- Circles -->
      <circle class="cls-1" cx="430.34" cy="150.87" r="129.37" />
      <circle class="cls-1" cx="768.68" cy="502.22" r="129.37" />
      <circle class="cls-1" cx="482.82" cy="866.72" r="129.37" />

      <!-- Connecting Lines -->
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

      <!-- Single-Line Text Labels -->

      <!-- Top Circle: Reality Creation Typology -->
      <text class="cls-2" transform="translate(324.52 145.25)">Reality Creation</text>
      <text class="cls-2" transform="translate(367.63 181.25)">Typology</text>

      <!-- Middle Circle: Mastery Assessment -->
      <text class="cls-2" transform="translate(715.45 488.03)">Mastery</text>
      <text class="cls-2" transform="translate(691.49 524.03)">Assessment</text>

      <!-- Bottom Circle: Personalized Results -->
      <text class="cls-2" transform="translate(398.83 862.87)">Personalized</text>
      <text class="cls-2" transform="translate(435.5 898.87)">Results</text>

      <!-- Spokes/Labels -->

      <!-- Right-Side Labels -->
      <text class="cls-2" transform="translate(750.78 25.71)">Cognitive Alignment</text>
      <text class="cls-2" transform="translate(747.33 119.48)">Perceptual Focus</text>
      <text class="cls-2" transform="translate(746.9 216.37)">Choice Navigation</text>

      <!-- Left-Side Labels -->
      <text class="cls-2" transform="translate(10.87 102.04)">Resonance Field</text>
      <text class="cls-2" transform="translate(11.87 218.85)">Kinetic Drive</text>
      <text class="cls-2" transform="translate(0 298.02)">Manifestation Rhythm</text>

      <!-- Middle Text: Acceptance & Alignment Needs -->
      <text class="cls-2" transform="translate(260.6 374.2)">Acceptance & Alignment Needs</text>

      <!-- Growth & Permission Areas -->
      <text class="cls-2" transform="translate(696.56 910.2)">Growth & Permission Areas</text>

      <!-- Natural Energy Patterns -->
      <text class="cls-2" transform="translate(378.45 503.37)">Natural Energy Patterns</text>

      <!-- Common Misalignments -->
      <text class="cls-2" transform="translate(160.99 696.93)">Common Misalignments</text>

      <!-- Ideal Approaches -->
      <text class="cls-2" transform="translate(148.17 1013.68)">Ideal Approaches</text>

      <!-- Typology Insights -->
      <text class="cls-2" transform="translate(482.59 1080.75)">Typology Insights</text>

      <!-- Reality Creation Strategies -->
      <text class="cls-2" transform="translate(574.96 749.69)">Reality Creation Strategies</text>
    </svg>
  `;
});
