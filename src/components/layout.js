import Meta from "./meta";

const Layout = (props) => (
  <>
    <Meta></Meta>
    <div className="viewport">
      <div className="content">
        {props.children}
      </div>
    </div>
  </>
);

export default Layout;
