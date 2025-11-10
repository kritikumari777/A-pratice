import {ErrorBoundary} from 'react-error-boundary' // need to install
const ErrorBoundaryComp = () => {

 const  FallBackComp = ({error}) => {
    return <p>Something went wrong: {error.message}</p>
 }

 const MyComp = () => {
    throw new Error("error");
    
 }
  return (
    <div>
        <ErrorBoundary FallbackComponent={FallBackComp}>
            <MyComp/>
        </ErrorBoundary>
    </div>
  )
}

export default ErrorBoundaryComp