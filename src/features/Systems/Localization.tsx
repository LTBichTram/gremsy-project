export default function Localization() {
  return (
    <div>
      LocalizationStyle props work similar to component specific props, but with
      several differences: Style props are not component specific, they can be
      used with any component. Style props always control a single CSS property.
      For example, c prop controls CSS color property, while color prop controls
      a set of properties: color, background-color and border-color. Style props
      are set in style attribute. It is not possible to override them with CSS
      without using !important. Style props are useful when you need to change a
      single CSS property without creating a separate file for styles. Some of
      the most common use cases are: Changing text color and font-sizeStyle
      props work similar to component specific props, but with several
      differences: Style props are not component specific, they can be used with
      any component. Style props always control a single CSS property. For
      example, c prop controls CSS color property, while color prop controls a
      set of properties: color, background-color and border-color. Style props
      are set in style attribute. It is not possible to override them with CSS
      without using !important. Style props are useful when you need to change a
      single CSS property without creating a separate file for styles. Some of
      the most common use cases are: Changing text color and font-size
    </div>
  );
}
