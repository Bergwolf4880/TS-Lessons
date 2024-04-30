import { ClipLoader } from 'react-spinners';
// import { SpinnerWrapper } from './styles';

function Spinner(loading = true) {
  
  return (
    <>
          <ClipLoader
              loading={loading}
              size={35}
          
          />
    </>
  );
}
export default Spinner