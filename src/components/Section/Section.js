import PropTypes from "prop-types";
function Section({ children, title }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default Section;
