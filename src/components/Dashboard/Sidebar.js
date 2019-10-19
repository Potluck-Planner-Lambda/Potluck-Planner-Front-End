import React, { useContext } from "react";
import { Col, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import UserContext from "../../contexts/UserContext";
import SidebarCreateEvent from "../../photos/Icons/create-event-sidebar.svg";
import SidebarPotluckInvite from "../../photos/Icons/potluck-invite-sidebar.svg";
import SidebarDashboardIcon from "../../photos/Icons/dashboard-eye-sidebar.svg";
import SidebarLogoutIcon from "../../photos/Icons/logout-sidebar.svg";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.reload();
  };
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Col className="dashboard-sidebar">
        <Col className="dashboard-sidebarContainer">
          <Row>
            <h4 className="dashboard-welcome">Welcome Back, {user.username}</h4>
            {/* <h4 className="dashboard-welcome">Welcome Back, {localStorage.getItem("username")}</h4> */}
          </Row>

          <Row>
            <h4 className="dashboard-actions">
              <img
                className="sidebarIcon"
                src={SidebarCreateEvent}
                alt="Create Event Icon"
              />
              Create Event
            </h4>
          </Row>

          <Row>
            <h4 className="dashboard-actions">
              <img
                className="sidebarIcon"
                src={SidebarPotluckInvite}
                alt="Create Event Icon"
              />
              No Potluck Invite
            </h4>
          </Row>

          <Row className="buttonContainer">
            <Col>
              <Row>
                <Button className="dashboard-button sidebarButton">
                  <img
                    className="sidebarIcon buttonIcon"
                    src={SidebarDashboardIcon}
                    alt="Create Event Icon"
                  />
                  Dashboard
                </Button>
              </Row>

              <Row>
                <Button
                  className="dashboard-logout sidebarButton"
                  onClick={handleLogout}
                >
                  <img
                    className="sidebarIcon buttonIcon"
                    src={SidebarLogoutIcon}
                    alt="Create Event Icon"
                  />
                  Log Out
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
};

export default Sidebar;
