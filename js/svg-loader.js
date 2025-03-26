// JavaScript to inject the SVG diagram into the introduction page
document.addEventListener('DOMContentLoaded', function () {
  const diagramContainer = document.getElementById('diagram-container');

  if (!diagramContainer) {
    console.error("Diagram container not found");
    return;
  }

  const svgObject = document.createElement('object');
  svgObject.setAttribute('type', 'image/svg+xml');
  svgObject.setAttribute(
    'data',
    'data:image/svg+xml,' + encodeURIComponent(getSvgContent())
  );
  svgObject.setAttribute('class', 'w-full h-auto');
  svgObject.setAttribute('aria-label', 'Assessment Journey Diagram');
  svgObject.textContent = 'Your browser does not support SVG';

  diagramContainer.innerHTML = '';
  diagramContainer.appendChild(svgObject);

  const backgroundCanvases = document.querySelectorAll('.background-canvas');
  backgroundCanvases.forEach((canvas) => {
    canvas.style.display = 'none';
  });

  document.body.style.backgroundColor = 'transparent';
  const containers = document.querySelectorAll(
    '.container, .introduction-section, .introduction'
  );
  containers.forEach((container) => {
    container.style.backgroundColor = 'transparent';
    if (container.classList.contains('introduction')) {
      container.style.boxShadow = 'none';
    }
  });
});

// Function to get the SVG content
function getSvgContent() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1018.81 1105.68">
  <defs>
    <style>
      .cls-1 { fill: none; stroke: #7b7975; stroke-miterlimit: 10; }
      .cls-2, .cls-3, .cls-4 { isolation: isolate; }
      .cls-2, .cls-4 { fill: #5a5753; font-family: AktivGrotesk-Light, 'Aktiv Grotesk'; font-size: 30px; font-weight: 300; }
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
    <!-- More SVG content can be included here -->
  </g>
</svg>`;
}
