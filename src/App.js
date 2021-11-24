import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import errorImage from './pages/error.jpg';
import './App.css';

const HomeView = lazy(() =>
  import('./pages/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);
const NotFoundView = lazy(() =>
  import('./pages/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  return (
    <Container title="Hello world!">
      <AppBar />

      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Routes>
          <Route path="" element={<HomeView />} />
          <Route
            path="*"
            element={
              <NotFoundView
                errorImage={errorImage}
                messadge="Ошибка 404: страница не найдена :("
              />
            }
          />
        </Routes>
      </Suspense>

      <ToastContainer />
    </Container>
  );
}
