import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import FAQs from "./components/FAQs/Faqs";
import Forum from "./components/forum/Forum";
import Profile from "./components/profile/Profile";
import Support from "./components/support/Support";
import { AuthProvider } from "./auth/authprovider";
import { RequireAuth } from "./auth/RequireAuth";
import Login from "./components/login";
import AppLayout from "./AppLayout";
import Posts from "./components/posts/posts";

function App() {
  return (
    <AuthProvider>
      <AppLayout>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />

          <Route
            path="forum"
            element={
              <RequireAuth>
                <Forum />
              </RequireAuth>
            }
          />
          <Route
            path="faq"
            element={
              <RequireAuth>
                <FAQs />
              </RequireAuth>
            }
          />
          <Route
            path="support"
            element={
              <RequireAuth>
                <Support />
              </RequireAuth>
            }
          />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="post"
            element={
              <RequireAuth>
                <Posts />
              </RequireAuth>
            }
          />
        </Routes>
      </AppLayout>
    </AuthProvider>
  );
}

export default App;
