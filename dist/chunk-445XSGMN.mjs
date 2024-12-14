// src/components/layout/footers/SimpleFooter.tsx
var SimpleFooter = ({ text = "Con \u{1F49A} para latam" }) => {
  return <footer className="simple-footer">
    <div className="span" />
    <h2>{text}</h2>
    <div className="span" />
  </footer>;
};
var SimpleFooter_default = SimpleFooter;

export {
  SimpleFooter_default
};
