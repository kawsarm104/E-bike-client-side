import Button from "@restart/ui/esm/Button";
import React from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../ProtectedRoute/AdminRoute/AdminRoute";
import AddNewItem from "../Admin/AddNewItem/AddNewItem";
import ChangeRole from "../Admin/ChangeRole/ChangeRole";
import ManageAllOrdersParent from "../Admin/ManageAllOrders/ManageAllOrdersParent/ManageAllOrdersParent";
import MyOrdersParent from "../MyOrders/MyOrdersParent/MyOrdersParent";
import Payment from "../Payment/Payment";
import Reviews from "../Reviews/Reviews";
import "./Dashboard.css";

const Dashboard = () => {
  const { admin, user, logOut } = useAuth();
  const history = useHistory();
  let { path, url } = useRouteMatch();

  const handleLogOut = () => {
    logOut();

    // redirect
    history.replace("/");
  };

  return (
    <>
      <div className="s-layout">
        {/* SideBar */}
        <div className="s-layout__sidebar">
          <a className="s-sidebar__trigger" href="#0">
            <i className="fa fa-bars"></i>
          </a>

          <nav className="s-sidebar__nav">
            <div className="user text-center py-1">
              <h5>{user.displayName}</h5>
            </div>

            <ul>
              <li>
                <Link className="s-sidebar__nav-link" to="/home">
                  <i className="fa fa-home"></i>
                  <em>Home</em>
                </Link>
              </li>
              <li>
                <Link className="s-sidebar__nav-link" to={`${url}/pay`}>
                  <i className="fas fa-dollar-sign"></i>
                  <em>Pay</em>
                </Link>
              </li>
              {/* {!admin ? ( */}
              <>
                <li>
                  <Link className="s-sidebar__nav-link" to={`${url}/myorders`}>
                    <i className="fas fa-cart-plus"></i>
                    <em>My Orders</em>
                  </Link>
                </li>
                <li>
                  <Link className="s-sidebar__nav-link" to={`${url}/review`}>
                    <i className="fas fa-star"></i>
                    <em>Review</em>
                  </Link>
                </li>
                {admin && (
                  <>
                    {" "}
                    <li>
                      <Link
                        className="s-sidebar__nav-link"
                        to={`${url}/manageallorders`}
                      >
                        <i className="fas fa-cart-plus"></i>
                        <em>Manage All Orders</em>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="s-sidebar__nav-link"
                        to={`${url}/addnewproduct`}
                      >
                        <i className="fa fa-plus"></i>
                        <em>Add New Product</em>
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        className="s-sidebar__nav-link"
                        to={`${url}/manageallproducts`}
                      >
                        <i className="fas fa-wrench"></i>
                        <em>Manage All Products</em>
                      </Link>
                    </li> */}
                    <li>
                      <Link className="s-sidebar__nav-link" to={`${url}/makeadmin`}>
                        <i className="fas fa-user-cog"></i>
                        <em>Make Admin</em>
                      </Link>
                    </li>
                  </>
                )}

                <li className="mt-4 d-flex justify-content-center">
                  <Button onClick={handleLogOut} className="btn btn-outline-primary">
                    <i className="fa fa-user pe-2"></i> <em> Log Out</em>
                  </Button>
                </li>
              </>
              {/* ) : ( */}
              <></>
              {/*  )} */}
            </ul>
          </nav>
        </div>

        {/* COntent */}
        <main className="s-layout__content">
          <Switch>
            {/* User */}
            <Route exact path={`${path}/pay`}>
              <Payment />
            </Route>
            <Route exact path={`${path}/myorders`}>
              <MyOrdersParent />
            </Route>
            <Route exact path={`${path}/review`}>
              <Reviews />
            </Route>

            {/* Admin */}
            <AdminRoute path={`${path}/manageallorders`}>
              <ManageAllOrdersParent />
            </AdminRoute>

            <AdminRoute path={`${path}/addnewproduct`}>
              <AddNewItem />
            </AdminRoute>

            <AdminRoute path={`${path}/makeadmin`}>
              <ChangeRole />
            </AdminRoute>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
