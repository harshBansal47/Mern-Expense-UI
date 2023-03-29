import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className='dashboard_wrapper'>
      <div className="dashboard_left">
        <div className="dashboard_chart"></div>
        <div className="dashboard_main_info"></div>
      </div>
      <div className="dashboard_right">
        <div className = "dashboard_history">
            <div className="history_top"></div>
            <div className="dashboard_analysis"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;