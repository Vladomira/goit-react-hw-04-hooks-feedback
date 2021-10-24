import PropTypes from "prop-types";
import "./styles/statistics.scss";

export default function Section({ title, children }) {
  return (
    <section className="section">
      <h1 className="title__main">{title}</h1>
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
// class Section extends Component {
//   state = {
//     visible: false,
//   };
//   onShow = () => {
//     this.setState({ visible: true });
//   };
//   render() {
//     return <h1>{this.props.title}</h1>;
//   }
// }
