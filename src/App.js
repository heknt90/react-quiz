import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './containers/NotFound/NotFound';
import Auth from './containers/Auth/Auth'
import QuizList from './containers/QuizList/QuizList';
import Layout from './hoc/Layout/Layout';
import QuizCreator from './containers/QuizCreator/QuizCreator';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<QuizList />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/quiz/create" element={<QuizCreator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
