import MyPage from './myPageComponent';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

const MyProtectedPage = withAdalLoginApi(MyPage, () => <Loading />, (error) => <ErrorPage error={error}/>);

<Route 
   path="/onlyLoggedUsers"
   render={ ()=> <MyProtectedPage /> } 
/>