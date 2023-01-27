import QuizList from './containers/QuizList/QuizList';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <QuizList />
      </Layout>
    </div>
  );
}

export default App;
