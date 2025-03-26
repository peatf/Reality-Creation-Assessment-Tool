// JavaScript to inject the SVG diagram into the introduction page

document.addEventListener('DOMContentLoaded', function () {
  const diagramContainer = document.getElementById('diagram-container');

  if (!diagramContainer) {
    console.error("Diagram container not found");
    return;
  }

  const svgObject = document.createElement('object');
  svgObject.setAttribute('type', 'image/svg+xml');
  svgObject.setAttribute('data', 'data:image/svg+xml,' + encodeURIComponent(getSvgContent()));
  svgObject.setAttribute('class', 'w-full h-auto');
  svgObject.setAttribute('aria-label', 'Assessment Journey Diagram');
  svgObject.textContent = 'Your browser does not support SVG';

  diagramContainer.innerHTML = '';
  diagramContainer.appendChild(svgObject);

  const backgroundCanvases = document.querySelectorAll('.background-canvas');
  backgroundCanvases.forEach(canvas => {
    canvas.style.display = 'none';
  });

  document.body.style.backgroundColor = 'transparent';
  const containers = document.querySelectorAll('.container, .introduction-section, .introduction');
  containers.forEach(container => {
    container.style.backgroundColor = 'transparent';
    if (container.classList.contains('introduction')) {
      container.style.boxShadow = 'none';
    }
  });
});

// Function to get the SVG content
function getSvgContent() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1018.81 1105.68">
    <defs>
      <style>
        .cls-1{fill:none;stroke:#7b7975;stroke-miterlimit:10;}
        .cls-2,.cls-3,.cls-4{isolation:isolate;}
        .cls-2,.cls-4{fill:#5a5753;font-family:AktivGrotesk-Light, 'Aktiv Grotesk';font-size:30px;font-weight:300;}
        .cls-5{letter-spacing:0em;}
        .cls-6{letter-spacing:0em;}
        .cls-7{letter-spacing:0em;}
        .cls-8{letter-spacing:0em;}
        .cls-4{letter-spacing:.04em;}
        .cls-9{letter-spacing:-.02em;}
        .cls-10{letter-spacing:0em;}
        .cls-11{letter-spacing:0em;}
        .cls-12{letter-spacing:0em;}
        .cls-13{letter-spacing:0em;}
        .cls-14{letter-spacing:.02em;}
        .cls-15{letter-spacing:.01em;}
      </style>
    </defs>
    <g class="cls-3">
      <text class="cls-2" transform="translate(324.52 145.25)">Reality Creation</text>
      <text class="cls-2" transform="translate(367.63 181.25)">Typology</text>
    </g>
    <circle class="cls-1" cx="430.34" cy="150.87" r="129.37" />
    <circle class="cls-1" cx="768.68" cy="502.22" r="129.37" />
    <circle class="cls-1" cx="482.82" cy="866.72" r="129.37" />
    <path class="cls-1" d="M712.6,19.45s-51.84.27-97.78,47.62c-45.94,47.35-61.48,43.11-61.48,43.11" />
    <path class="cls-1" d="M713.05,109.1s-37.38-.81-71.34,15.56c-26.7,12.87-73.52,20.03-82.21,15.87" />
    <path class="cls-1" d="M558.61,169.28s38.77,8.68,56.13,16.2,45.13,24.88,97.21,24.3" />
    <g class="cls-3">
      <text class="cls-2" transform="translate(715.45 488.03)">Mastery</text>
      <text class="cls-2" transform="translate(691.49 524.03)">Assessment</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(398.83 862.87)">Personalized</text>
      <text class="cls-2" transform="translate(435.5 898.87)">Results</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(750.78 25.71)">Cognitive Alignment</text>
      <text class="cls-2" transform="translate(747.33 119.48)">Perceptual Focus</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(11.87 218.85)">Kinetic Drive</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(746.9 216.37)">Choice Navigation</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(10.87 102.04)">Resonance Field</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(0 298.02)">Manifestation Rhythm</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(260.6 374.2)">Acceptance &amp; Alignment Needs</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(696.56 910.2)">Growth &amp; Permission Areas</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(378.45 503.37)">Natural Energy Patterns</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(160.99 696.93)">Common Misalignments</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(148.17 1013.68)">Ideal Approaches</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(482.59 1080.75)">Typology Insights</text>
    </g>
    <g class="cls-3">
      <text class="cls-2" transform="translate(574.96 749.69)">Reality Creation Strategies</text>
    </g>
  </svg>`;
}
