import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import FindWorker from "./pages/FindWorker";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<FindWorker />} />
              <Route path="/contact/" element={<Contact />} />

              {/* Use ProtectedRoute for Signin page (redirects logged-in users to Profile) */}
              <Route
                path="/signin/"
                element={
                  <ProtectedRoute isProtected={false}>
                    <Signin />
                  </ProtectedRoute>
                }
              />

              <Route path="/signup/" element={<Signup />} />

              {/* Use ProtectedRoute for Profile page (redirects unauthenticated users to Signin) */}
              <Route
                path="/profile/"
                element={
                  <ProtectedRoute isProtected={true}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
