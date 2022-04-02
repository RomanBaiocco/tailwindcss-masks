const plugin = require("tailwindcss/plugin");
const shapeToSvgDataUrl = require('./maskShapes');

module.exports = plugin(function ({ addUtilities }) {
  const utilities = Object.fromEntries(
    Object.entries(shapeToSvgDataUrl).map(([shapeName, svgDataUrl]) => {
      const className = `.mask-${shapeName}`;
      const classAttributes = {
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskImage: `url(${svgDataUrl})`,
      };

      return [className, classAttributes]
    })
  )

  addUtilities(utilities);
});
