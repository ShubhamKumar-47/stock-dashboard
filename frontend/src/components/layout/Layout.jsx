import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;